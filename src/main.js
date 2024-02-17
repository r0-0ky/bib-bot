import { Telegraf, Markup } from 'telegraf';
import 'dotenv/config';
import { chatGenerate } from './middlewares/openAi.js';

const bot = new Telegraf(process.env.BOT_TOKEN);
let a = '1';

bot.start(ctx => {
	ctx.reply(
		"Привет, как житуха?",
		Markup.keyboard([
			["🔍 ", "😎 Пафосная беседа"],
			["☸ Setting", "📞 Feedback"],
			["📢 Ads", "⭐️ Rate us", "👥 Share"],
		])
			.oneTime()
			.resize(),
	);
});
bot.hears("😎 Пафосная беседа", ctx => {ctx.reply(a); a += 'a'});
bot.hears(/^[^\/].*/, chatGenerate);

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))