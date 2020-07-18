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
    try {
      await ctx.answerCbQuery(`You selected ${key}`);
      ctx.reply("What Amount?");
      bot.on("text", (ctx) => {
        let amount = ctx.update.message.text;
        if (key === "Send Money") {
          ctx.reply(withdrawalFees(amount));
        } else {
          ctx.reply(transferFees(amount));
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
