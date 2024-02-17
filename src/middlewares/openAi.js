import OpenAI from "openai";

const openai = new OpenAI({ apiKey: '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' });

export async function chatGenerate(ctx) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "Ты крутой бесстрашный мужик мудрец" },
      { role: "user", content: ctx.message.text },
    ],
    model: "gpt-3.5-turbo",
  });
  ctx.reply(completion.choices[0].message.content);
}