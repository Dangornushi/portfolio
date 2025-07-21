// app/api/send-mail/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // SMTP設定（例: Gmail）
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `お問い合わせ: ${name}`,
      text: `名前: ${name}\nメール: ${email}\n内容:\n${message}`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    const errorMsg = typeof error === 'object' && error !== null && 'message' in error
      ? (error as { message: string }).message
      : String(error);
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}