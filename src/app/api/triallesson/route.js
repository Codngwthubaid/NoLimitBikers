import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, number } = await req.json();
  const transport = nodemailer.createTransport({
    host: "smtp.strato.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.STRATO_EMAIL,
      pass: process.env.STRATO_PASSWORD
    }
  });

  try {
    // Email to site owner
    await transport.sendMail({
      from: process.env.STRATO_EMAIL,
      replyTo: email,
      to: process.env.STRATO_EMAIL,
      subject: "Lesson Booking Form",
      html: `<div style="font-family: Arial, sans-serif; background-color: #e6fff4; border: 1px solid #3cb371; padding: 20px; border-radius: 10px; max-width: 500px; margin: 20px auto; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);">
        <h3 style="font-size: 24px; color: #2e8b57; font-weight: bold; text-align: center; margin-bottom: 20px;">
          Nieuwe Lesboeking – Gegevens
        </h3>
        <p style="font-size: 16px; color: #333; margin-bottom: 10px; line-height: 1.5;">
          <strong style="color: #2e8b57;">Naam:</strong> ${name}
        </p>
        <p style="font-size: 16px; color: #333; margin-bottom: 10px; line-height: 1.5;">
          <strong style="color: #2e8b57;">E-mail:</strong> ${email}
        </p>
        <p style="font-size: 16px; color: #333; margin-bottom: 10px; line-height: 1.5;">
          <strong style="color: #2e8b57;">Telefoonnummer:</strong> ${number}
        </p>
      </div>`
    });

    // Confirmation email to user
    await transport.sendMail({
      from: process.env.STRATO_EMAIL,
      to: email,
      subject: "Bevestiging van je Motorrijles – Klaar om de weg op te gaan!",
      html: `<div style="font-family: Arial, sans-serif; background-color: #4a8e0; margin: 0; padding: 0; color: #333;">
  <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #3cb371; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden;">
    <div style="background-color: #2e8b57; padding: 20px; text-align: center;">
      <h1 style="color: #ffffff; font-size: 28px; margin: 0;">Bevestiging van je Motorrijles</h1>
      <p style="color: #e6fff4; margin: 5px 0; font-size: 18px;">Klaar om de weg op te gaan!</p>
    </div>
    <div style="padding: 20px;">
      <p style="font-size: 16px; color: #333; margin: 0 0 15px;">
        Beste <strong style="color: #2e8b57;">${name}</strong>,
      </p>
      <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 0 0 15px;">
        Bedankt voor het boeken van je motorrijles bij ons! We zijn enthousiast om je te begeleiden op weg naar een zelfverzekerde en vaardige motorrijder. Hieronder vind je de details van je boeking:
      </p>
      <div style="background-color: #e6fff4; border: 1px solid #3cb371; padding: 15px; border-radius: 8px; margin: 15px 0;">
        <h3 style="color: #2e8b57; font-size: 20px; margin-bottom: 10px;">Boekingsgegevens:</h3>
        <p style="font-size: 16px; margin: 5px 0;">
          <strong style="color: #2e8b57;">Naam:</strong> ${name}
        </p>
        <p style="font-size: 16px; margin: 5px 0;">
          <strong style="color: #2e8b57;">E-mail:</strong> ${email}
        </p>
        <p style="font-size: 16px; margin: 5px 0;">
          <strong style="color: #2e8b57;">Telefoonnummer:</strong> ${number}
        </p>
      </div>
      <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 15px 0;">
        Heb je vragen of wil je de les verplaatsen? Neem dan gerust contact met ons op via 
        <a href="mailto:info@nolimitbikers.nl" style="color: #2e8b57; text-decoration: none;">info@nolimitbikers.nl</a>.
      </p>
      <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 15px 0;">
        We kijken ernaar uit je binnenkort te zien. Laten we samen de weg op gaan en er een leuke, veilige en onvergetelijke ervaring van maken!
      </p>
      <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 0;">
        Met vriendelijke groet, <br>
        <strong style="color: #2e8b57;">Motorrijschool NoLimitBikers</strong>
      </p>
    </div>
    <div style="background-color: #2e8b57; color: #e6fff4; text-align: center; padding: 10px; font-size: 14px;">
      <p style="margin: 0;">© 2024 NoLimitBikers. Alle rechten voorbehouden.</p>
      <p style="margin: 0;">
        <a href="#" style="color: #e6fff4; text-decoration: none; margin: 0 10px;">Terms of Service</a> |
        <a href="#" style="color: #e6fff4; text-decoration: none; margin: 0 10px;">Privacy Policy</a>
      </p>
    </div>
  </div>
</div>`
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
