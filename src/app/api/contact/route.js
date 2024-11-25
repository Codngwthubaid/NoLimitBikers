import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();
  const transporter = nodemailer.createTransport({
    host: "smtp.strato.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.STRATO_EMAIL,
      pass: process.env.STRATO_PASSWORD
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.STRATO_EMAIL,  // Use your Strato email as the "from" address
      replyTo: email, // User's email
      to: process.env.STRATO_EMAIL, // Company email (same as "from")
      subject: 'Inquiry About Driving Lessons',
      html: `
       <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #FFF3E0; padding: 20px; border-radius: 8px;">
  <h2 style="color: #FF5722;">Inquiry About Driving Lessons</h2>
  <p style="color: #FF7043;">Dear NoLimitBikers Team,</p>
  <p style="color: #FF7043;">I hope this message finds you well. My name is <strong>${name}</strong>, and I am interested in your driving lessons.</p>
  <p style="color: #FF7043;">${message}</p>
  <p style="color: #FF7043;">Thank you for your assistance!</p>
  <p style="color: #FF7043;">Best regards,</p>
  <p style="color: #FF5722;"><strong>${name}</strong></p>
</div>
      `,
    });
    await transporter.sendMail({
      from: process.env.STRATO_EMAIL,  // Use your Strato email as the "from" address
      to: email,
      subject: 'Thank You for Your Inquiry About Driving Lessons!',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #FFF3E0; padding: 20px; border-radius: 8px;">
  <h2 style="color: #FF5722;">Dear ${name},</h2>
  <p style="color: #FF7043;">Thank you for reaching out to us at <strong>NoLimitBikers</strong>. We have resolved your inquiry regarding <strong>${message}</strong> and will be in touch with you shortly to provide further assistance.</p>
  <p style="color: #FF7043;">If you have any immediate questions, feel free to contact us at <strong>06143 82099</strong>.</p>
  <p style="color: #FF7043;">Best regards,</p>
  <p style="color: #FF5722;"><strong>NoLimitBikers Team</strong></p>
</div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Emails sent successfully!' },
      { status: 200 }
    )

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: 'Failed to process request', error: error.message },
      { status: 500 }
    );
  }
}