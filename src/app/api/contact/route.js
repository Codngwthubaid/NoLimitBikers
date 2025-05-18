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
      subject: 'Vraag over rijles lessen',
      html: `
       <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #E0FFF3; padding: 20px; border-radius: 8px;">
  <h2 style="color: #22FF57;">Vraag over rijles lessen</h2>
  <p style="color: #43FF70;">Beste NoLimitBikers team,</p>
  <p style="color: #43FF70;">Ik hoop dat dit bericht je in goede gezondheid aantreft. Mijn naam is <strong>${name}</strong>, en ik ben geïnteresseerd in j rijles lessen.</p>
  <p style="color: #43FF70;">${message}</p>
  <p style="color: #43FF70;">Dank u wel voor uw hulp!</p>
  <p style="color: #43FF70;">Met vriendelijke groet,</p>
  <p style="color: #22FF57;"><strong>${name}</strong></p>
</div>
      `,
    });

    await transporter.sendMail({
      from: process.env.STRATO_EMAIL,  // Use your Strato email as the "from" address
      to: email,
      subject: 'Dank u wel voor uw vraag over rijles lessen!',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #E0FFF3; padding: 20px; border-radius: 8px;">
  <h2 style="color: #22FF57;">Beste ${name},</h2>
  <p style="color: #43FF70;">Dank u wel voor het contact met ons bij <strong>NoLimitBikers</strong>. We hebben uw vraag over <strong>${message}</strong> verwerkt en zullen spoedig contact met u opnemen om verder te helpen.</p>
  <p style="color: #43FF70;">Als u directe vragen heeft, aarzel dan niet om contact met ons op te nemen op <strong>06143 82099</strong>.</p>
  <p style="color: #43FF70;">Met vriendelijke groet,</p>
  <p style="color: #22FF57;"><strong>NoLimitBikers Team</strong></p>
</div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Emails sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: 'Failed to process request', error: error.message },
      { status: 500 }
    );
  }
}