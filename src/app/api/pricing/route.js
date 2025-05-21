import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, number, courseId } = await req.json();
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
    await transport.sendMail({
      from: process.env.STRATO_EMAIL,  // Use your Strato email as the "from" address
      replyTo: email, // User's email
      to: process.env.STRATO_EMAIL, // Company email (same as "from")
      subject: "Lesboekingsformulier",
      html: `<div style="font-family: Arial, sans-serif; background-color: #fff4db; border: 1px solid #ff9f1c; padding: 20px; border-radius: 10px; max-width: 500px; margin: 20px auto; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);">
  <h3 style="font-size: 24px; color: #ff9f1c; font-weight: bold; text-align: center; margin-bottom: 20px;">
    Nieuwe Lesboeking – Gegevens
  </h3>
  <p style="font-size: 16px; color: #333; margin-bottom: 10px; line-height: 1.5;">
    <strong style="color: #ff9f1c;">Naam:</strong> ${name}
  </p>
  <p style="font-size: 16px; color: #333; margin-bottom: 10px; line-height: 1.5;">
    <strong style="color: #ff9f1c;">Email:</strong> ${email}
  </p>
  <p style="font-size: 16px; color: #333; margin-bottom: 10px; line-height: 1.5;">
    <strong style="color: #ff9f1c;">Nummer:</strong> ${number}
  </p>
  <p style="font-size: 16px; color: #333; margin-bottom: 10px; line-height: 1.5;">
    <strong style="color: #ff9f1c;">Cursus:</strong> ${courseId}
  </p>
</div>`

    });

    await transport.sendMail({
      from: process.env.STRATO_EMAIL,  // Use your Strato email as the "from" address
      to: email,
      subject: "Bevestiging van je motorrijles – Klaar om de weg op te gaan!",
      html: `<div style="font-family: Arial, sans-serif; background-color: #fff4db; margin: 0; padding: 0; color: #333;">
  <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #ff9f1c; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden;">
    <div style="background-color: #ff9f1c; padding: 20px; text-align: center;">
      <h1 style="color: #ffffff; font-size: 28px; margin: 0;">Bevestiging van je Motorrijles</h1>
      <p style="color: #fff4db; margin: 5px 0; font-size: 18px;">Klaar om de weg op te gaan!</p>
    </div>
    <div style="padding: 20px;">
      <p style="font-size: 16px; color: #333; margin: 0 0 15px;">
        Beste <strong style="color: #ff9f1c;">${name}</strong>,
      </p>
      <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 0 0 15px;">
        Bedankt voor het boeken van je motorrijles bij ons! We zijn enthousiast om je te begeleiden op weg naar een zelfverzekerde en vaardige motorrijder. Hieronder vind je de details van je boeking:
      </p>
      <div style="background-color: #fff4db; border: 1px solid #ff9f1c; padding: 15px; border-radius: 8px; margin: 15px 0;">
        <h3 style="color: #ff9f1c; font-size: 20px; margin-bottom: 10px;">Boekingsgegevens:</h3>
        <p style="font-size: 16px; margin: 5px 0;">
          <strong style="color: #ff9f1c;">Naam:</strong> ${name}
        </p>
        <p style="font-size: 16px; margin: 5px 0;">
          <strong style="color: #ff9f1c;">E-mail:</strong> ${email}
        </p>
        <p style="font-size: 16px; margin: 5px 0;">
          <strong style="color: #ff9f1c;">Telefoonnummer:</strong> ${number}
        </p>
        <p style="font-size: 16px; margin: 5px 0;">
          <strong style="color: #ff9f1c;">Cursus:</strong> ${courseId}
        </p>
      </div>
      <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 15px 0;">
        Heb je vragen of wil je de les verplaatsen? Neem dan gerust contact met ons op via 
        <a href="mailto:info@nolimitbikers.nl" style="color: #ff9f1c; text-decoration: none;">info@nolimitbikers.nl</a>.
      </p>
      <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 15px 0;">
        We kijken ernaar uit je binnenkort te zien. Laten we samen de weg op gaan en er een leuke, veilige en onvergetelijke ervaring van maken!
      </p>
      <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 0;">
        Met vriendelijke groet, <br>
        <strong style="color: #ff9f1c;">Motorrijschool NoLimitBikers</strong>
      </p>
    </div>
    <div style="background-color: #ff9f1c; color: #fff4db; text-align: center; padding: 10px; font-size: 14px;">
      <p style="margin: 0;">© ${new Date().getFullYear()} NoLimitBikers. Alle rechten voorbehouden.</p>
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