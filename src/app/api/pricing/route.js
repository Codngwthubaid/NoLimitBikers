import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req) {
  const { name, email, number, courseId } = await req.json()
  const transport = nodemailer.createTransport({
    host: "smtp.strato.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.STRATO_EMAIL,
      pass: process.env.STRATO_PASSWORD
    }
  })

  try {
    await transport.sendMail({
      from: process.env.STRATO_EMAIL,  // Use your Strato email as the "from" address
      replyTo: email, // User's email
      to: process.env.STRATO_EMAIL, // Company email (same as "from")
      subject: "Lesson Booking Form",
      html: `<div style="font-family: Arial, sans-serif; background-color: #fff4e6; border: 1px solid #ffa500; padding: 20px; border-radius: 10px; max-width: 500px; margin: 20px auto; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);">
  <h3 style="font-size: 24px; color: #ff8303; font-weight: bold; text-align: center; margin-bottom: 20px;">
    New Lesson Booking Details
  </h3>
  <p style="font-size: 16px; color: #333; margin-bottom: 10px; line-height: 1.5;">
    <strong style="color: #ff8303;">Name:</strong> ${name}
  </p>
  <p style="font-size: 16px; color: #333; margin-bottom: 10px; line-height: 1.5;">
    <strong style="color: #ff8303;">Email:</strong> ${email}
  </p>
  <p style="font-size: 16px; color: #333; margin-bottom: 10px; line-height: 1.5;">
    <strong style="color: #ff8303;">Number:</strong> ${number}
  </p>
  <p style="font-size: 16px; color: #333; margin-bottom: 10px; line-height: 1.5;">
    <strong style="color: #ff8303;">Course:</strong> ${courseId}
  </p>
</div>`,
    })
    await transport.sendMail({
      from: process.env.STRATO_EMAIL,  // Use your Strato email as the "from" address
      to: email,
      subject: "Driving Lesson Booking Confirmation and Get Ready to Hit the Road",
      html: `<div style="font-family: Arial, sans-serif; background-color: #fff4e6; margin: 0; padding: 0; color: #333;">
  <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #ffa500; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden;">
    <div style="background-color: #ff8303; padding: 20px; text-align: center;">
      <h1 style="color: #ffffff; font-size: 28px; margin: 0;">Driving Lesson Booking Confirmation</h1>
      <p style="color: #fff4e6; margin: 5px 0; font-size: 18px;">Get Ready to Hit the Road!</p>
    </div>
    <div style="padding: 20px;">
      <p style="font-size: 16px; color: #333; margin: 0 0 15px;">
        Dear <strong style="color: #ff8303;">${name}</strong>,
      </p>
      <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 0 0 15px;">
        Thank you for booking your driving lesson with us! We’re thrilled to help you on your journey towards becoming a confident and skilled driver. Below are the details of your booking:
      </p>
      <div style="background-color: #fff4e6; border: 1px solid #ffa500; padding: 15px; border-radius: 8px; margin: 15px 0;">
        <h3 style="color: #ff8303; font-size: 20px; margin-bottom: 10px;">Booking Details:</h3>
        <p style="font-size: 16px; margin: 5px 0;">
          <strong style="color: #ff8303;">Name:</strong> ${name}
        </p>
        <p style="font-size: 16px; margin: 5px 0;">
          <strong style="color: #ff8303;">Email:</strong> ${email}
        </p>
        <p style="font-size: 16px; margin: 5px 0;">
          <strong style="color: #ff8303;">Number:</strong> ${number}
        </p>
        <p style="font-size: 16px; margin: 5px 0;">
          <strong style="color: #ff8303;">Course:</strong> ${courseId}
        </p>
      </div>
      <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 15px 0;">
        If you have any questions or need to reschedule your lesson, please don’t hesitate to contact us at 
        <a href="mailto:support@drivingschool.com" style="color: #ff8303; text-decoration: none;">support@drivingschool.com</a>.
      </p>
      <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 15px 0;">
        We look forward to seeing you soon. Let’s hit the road and make this journey fun, safe, and memorable!
      </p>
      <p style="font-size: 16px; color: #333; line-height: 1.6; margin: 0;">
        Best regards, <br>
        <strong style="color: #ff8303;">The Driving School Team</strong>
      </p>
    </div>
    <div style="background-color: #ff8303; color: #fff4e6; text-align: center; padding: 10px; font-size: 14px;">
      <p style="margin: 0;">© 2024 Driving School. All rights reserved.</p>
      <p style="margin: 0;">
        <a href="#" style="color: #fff4e6; text-decoration: none; margin: 0 10px;">Terms of Service</a> |
        <a href="#" style="color: #fff4e6; text-decoration: none; margin: 0 10px;">Privacy Policy</a>
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