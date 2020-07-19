const http =require('http')
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
      selectedKey = key;
      ctx.reply("What Amount, for example, 3000");
      bot.on("text", (ctx) => {
        let amount = ctx.update.message.text;
        const withdrawalFee = withdrawalFees(amount);
        if (selectedKey === "Send Money") {
          if (transferFees(amount) < 0 ) {
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
        } else if (selectedKey === "Withdraw Money") {
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
      return true;
    }
  },
  isSet: (_, key) => key === selectedKey,
});

const bot = new Telegraf(process.env.BOT_TOKEN);
const menuMiddleware = new MenuMiddleware("/", menuTemplate);
bot.command("start", (ctx) => menuMiddleware.replyToContext(ctx));
bot.use(menuMiddleware);

bot.launch();

const server = http.createServer((req, resp) => {
  resp.writeHead(200, { 'Content-Type': 'text/html' });
  resp.write(`<i> pls visit t.me/mpesaratesbot on telegram </i>`);
  resp.end();
});
 const port = 3000 || process.env.port
server.listen(port, () => {
  console.log(`Server running at port:${port}`);
});
