import OpenAI from "openai";
import 'dotenv/config';

const openai = new OpenAI({ apiKey: process.env.API_KEY });

export async function chatGenerate(ctx) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "Ты крутой бесстрашный мужик мудрец" },
      { role: "user", content: ctx.message.text },
    ],
    model: "gpt-4-turbo-preview",
  });
  ctx.reply(completion.choices[0].message.content);
}