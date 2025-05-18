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
      subject: "Inschrijvingsformulier voor rijles",
      html: `<div style="font-family: Arial, sans-serif; background-color: #e0fff3; border: 1px solid #22ff57; padding: 20px; border-radius: 10px; max-width: 500px; margin: 20px auto; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);">
  <h3 style="font-size: 24px; color: #22ff57; font-weight: bold; text-align: center; margin-bottom: 20px;">
    Nieuwe inschrijving voor rijles
  </h3>
  <p style="font-size: 16px; color: #333; margin-bottom: 10px; line-height: 1.5;">
    <strong style="color: #22ff57;">Naam:</strong> ${name}
  </p>
  <p style="font-size: 16px; color: #333; margin-bottom: 10px; line-height: 1.5;">
    <strong style="color: #22ff57;">Email:</strong> ${email}
  </p>
  <p style="font-size: 16px; color: #333; margin-bottom: 10px; line-height: 1.5;">
    <strong style="color: #22ff57;">Nummer:</strong> ${number}
  </p>
  <p style="font-size: 16px; color: #333; margin-bottom: 10px; line-height: 1.5;">
    <strong style="color: #22ff57;">Cursus:</strong> ${courseId}
  </p>
</div>`,
    });

    await transport.sendMail({
      from: process.env.STRATO_EMAIL,  // Use your Strato email as the "from" address
      to: email,
      subject: "Bevestiging van uw inschrijving voor rijles - Bereid om de weg te lopen!",
      html: `<div style="font-family: Arial, sans-serif; background-color: #e0fff3; margin: 0; padding: 0; color: #333;">
  <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #22ff57; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden;">
    <div style="background-color: #22ff57; padding: 20px; text-align: center;">
      <h1 style="color: #ffffff; font-size: 28px; margin: 0;">Bevestiging van uw inschrijving voor rijles</h1>
      <p style="color: #e0fff3; margin: 5px 0; font-size: 18px;">Bereid om de weg te lopen!</p>
    </div>
    <div style="padding: 20px;">
      <p style="font-size: 16px; color: #333; margin: 0 0 15px;">
        Beste <strong style="color: #22ff57;">${name}</strong>,
      </p>
      <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 0 0 15px;">
        Dank u wel voor het inschrijven voor uw rijles bij ons! We zijn enthousiast om u te helpen op uw reis naar een vertrouwde en vaardige bestuurder. Hieronder vindt u de details van uw inschrijving:
      </p>
      <div style="background-color: #e0fff3; border: 1px solid #22ff57; padding: 15px; border-radius: 8px; margin: 15px 0;">
        <h3 style="color: #22ff57; font-size: 20px; margin-bottom: 10px;">Inschrijvingsdetails:</h3>
        <p style="font-size: 16px; margin: 5px 0;">
          <strong style="color: #22ff57;">Naam:</strong> ${name}
        </p>
        <p style="font-size: 16px; margin: 5px 0;">
          <strong style="color: #22ff57;">Email:</strong> ${email}
        </p>
        <p style="font-size: 16px; margin: 5px 0;">
          <strong style="color: #22ff57;">Nummer:</strong> ${number}
        </p>
        <p style="font-size: 16px; margin: 5px 0;">
          <strong style="color: #22ff57;">Cursus:</strong> ${courseId}
        </p>
      </div>
      <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 15px 0;">
        Als u vragen heeft of uw les wilt herplannen, aarzel dan niet om contact met ons op te nemen via 
        <a href="mailto:support@drivingschool.com" style="color: #22ff57; text-decoration: none;">info@nolimitbikers.nl</a>.
      </p>
      <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 15px 0;">
        We kijken uit naar uw snelste bezoek. Laten we de weg lopen en maak dit avontuur leuk, veilig en onvergetelijk!
      </p>
      <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 0;">
        Met vriendelijke groet, <br>
        <strong style="color: #22ff57;">Het Rijles Team</strong>
      </p>
    </div>
    <div style="background-color: #22ff57; color: #e0fff3; text-align: center; padding: 10px; font-size: 14px;">
      <p style="margin: 0;">© 2024 Rijles. Alle rechten voorbehouden.</p>
      <p style="margin: 0;">
        <a href="#" style="color: #e0fff3; text-decoration: none; margin: 0 10px;">Servicevoorwaarden</a> |
        <a href="#" style="color: #e0fff3; text-decoration: none; margin: 0 10px;">Privacybeleid</a>
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