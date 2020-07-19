const { Telegraf } = require("telegraf");
const { MenuTemplate, MenuMiddleware } = require("telegraf-inline-menu");
const withdrawalFees = require("./withdrawalFees");
const transferFees = require("./transferFees");
require("dotenv").config();

const menuTemplate = new MenuTemplate(
  (ctx) => `Hey ${ctx.from.first_name}, which service would you like to use?`
);

let selectedKey = "";
menuTemplate.select("select", ["Send Money", "Withdraw Money"], {
  set: async (ctx, key) => {
    console.log(key);
    try {
      await ctx.answerCbQuery(`You selected ${key}`);
      ctx.reply("What Amount?");
      bot.on("text", (ctx) => {
        let amount = ctx.update.message.text;
        const withdrawalFee = withdrawalFees(amount);
        if (key === "Send Money") {
          console.log(key);
          if (amount <= 0) {
            ctx.reply("not applicable");
          } else {
            const total = Number(amount) + withdrawalFee + transferFees(amount);
            if (withdrawalFee < 0) {
              ctx.reply(
                `You need to send ${Number(
                  amount
                )}ksh incl. that cannot be withdrawn. This will cost you ${transferFees(
                  amount
                )}ksh. You need a total of ${Number(amount)}ksh`
              );
            } else {
              ctx.reply(
                `You need to send ${
                  withdrawalFee + Number(amount)
                }ksh incl. withdrawal fees of ${withdrawalFee}ksh. This will cost you ${transferFees(
                  amount
                )}ksh. You need a total of ${total}ksh`
              );
            }
          }
        } else if (key === "Withdraw Money") {
          console.log(key);
          if (withdrawalFee < 0) {
            ctx.reply(`Not applicable`);
          } else {
            ctx.reply(`You will be charged ${withdrawalFees(amount)}`);
          }
        }
      });
      return true;
    } catch (error) {
      ctx.reply(error);
    }
  },
  isSet: (_, key) => key === selectedKey,
});

const bot = new Telegraf(process.env.BOT_TOKEN);
const menuMiddleware = new MenuMiddleware("/", menuTemplate);
bot.command("start", (ctx) => menuMiddleware.replyToContext(ctx));
bot.use(menuMiddleware);

bot.launch();
