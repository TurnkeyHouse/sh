import { NextResponse } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';

// const botToken = process.env.TELEGRAM_BOT_TOKEN;
const botToken ="6752050226:AAH21pNH8Jqip3hmomx52IyrMab4czhTCKY";
const bot = new TelegramBot(botToken);

export async function POST(req, res) {
//const chatId = process.env.TELEGRAM_CHAT_ID;
  const chatId = "483108480"
  const { name, email, phone, letter } = await req.json();
  const telegramMessage = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${letter}`;

  try {
    await bot.sendMessage(chatId, telegramMessage);
    return NextResponse.json({ message: 'ok' }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
}