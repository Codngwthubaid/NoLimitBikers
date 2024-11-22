import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();
  const transporter = nodemailer.createTransport({
    host: "smtp.strato.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
  });

  try {
    await transporter.sendMail({
      from: email, // User's email
      to: process.env.GMAIL, // Company email
      subject: 'Inquiry About Driving Lessons',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #FFF3E0; padding: 20px; border-radius: 8px;">
          <h2 style="color: #FF5722;">Inquiry About Driving Lessons</h2>
          <p style="color: #FF7043;">Dear NoLimitBikers Team,</p>
          <p style="color: #FF7043;">I hope this message finds you well. My name is <strong>${name}</strong>, and I am interested in your driving lessons. Here are my details:</p>
          <ul style="list-style-type: none; padding: 0;">
            <li style="color: #FF5722;"><strong>Email:</strong> ${email}</li>
            <li style="color: #FF5722;"><strong>Phone Number:</strong> [User 's Phone Number]</li>
            <li style="color: #FF5722;"><strong>Preferred Lesson Type:</strong> [e.g., Beginner Lessons, Defensive Driving]</li>
            <li style="color: #FF5722;"><strong>Experience Level:</strong> [e.g., Complete Beginner, Some Experience]</li>
            <li style="color: #FF5722;"><strong>Preferred Schedule:</strong> [e.g., Weekdays, Weekends]</li>
            <li style="color: #FF5722;"><strong>Location for Lessons:</strong> [e.g., City, Neighborhood]</li>
          </ul>
          <p style="color: #FF7043;">I am looking forward to your response regarding the available options and scheduling.</p>
          <p style="color: #FF7043;">Thank you for your assistance!</p>
          <p style="color: #FF7043;">Best regards,</p>
          <p style="color: #FF5722;"><strong>${name}</strong></p>
        </div>
      `,
    });
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: 'Thank You for Your Inquiry About Driving Lessons!',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #FFF3E0; padding: 20px; border-radius: 8px;">
          <h2 style="color: #FF5722;">Dear ${name},</h2>
          <p style="color: #FF7043;">Thank you for reaching out to us at <strong>Driving Lessons</strong>! We appreciate your interest in our driving lessons and are excited to help you on your journey to becoming a confident driver.</p>
          <p style="color: #FF7043;">We understand that you have selected the following preferences in your inquiry:</p>
          <ul style="list-style-type: none; padding: 0;">
            <li style="color: #FF5722;"><strong>Preferred Lesson Type:</strong> [e.g., Beginner Lessons, Defensive Driving, Road Test Preparation]</li>
            <li style="color: #FF5722;"><strong>Experience Level:</strong> [e.g., Complete Beginner, Some Experience, Advanced]</li>
            <li style="color: #FF5722;"><strong>Preferred Schedule:</strong> [e.g., Weekdays, Weekends, Specific Days]</li>
            <li style="color: #FF5722;"><strong>Location for Lessons:</strong> [e.g., City, Neighborhood, or specific address]</li>
          </ul>
          <p style="color: #FF7043;">Our team is committed to tailoring our lessons to meet your specific needs and preferences. Whether you are just starting out or looking to refine your driving skills, we have a variety of programs designed to support you at every stage of your driving journey.</p>
          <p style="color: #FF7043;">We are excited to provide you with personalized instruction that focuses on building your confidence behind the wheel. Our experienced instructors will work with you to ensure that you feel comfortable and prepared for each lesson, as well as for the eventual driving test.</p>
          <p style="color: #FF7043;">If you have any questions or would like more information regarding lesson start dates, availability, or anything else, please feel free to contact us at <strong>[Phone Number]</strong>. Our team is here to assist you and provide any additional details you may need.</p>
          <p style="color: #FF7043;">Thank you once again for considering <strong>[Driving School Name]</strong>. We look forward to partnering with you on this important journey toward becoming a skilled and confident driver.</p>
          <p style="color: #FF7043;">Best regards,</p>
          <p style="color: #FF5722;"><strong>NoLimitBikers Team</strong></p>
          <p style="color: #FF7043;">[Contact Information]</p>
          <p style="color: #FF7043;">
            <a href="[Website URL]" style="color: #FF5722; text-decoration: none;">[Website URL]</a>
          </p>
          <p style="color: #FF7043;">Follow us on:</p>
          <p>
            <a href="[Social Media Link 1]" style="text-decoration: none;">
              <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" style="width: 24px; height: 24px; vertical-align: middle;"/>
            </a>
            <a href="[Social Media Link 2]" style="text-decoration: none;">
              <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" style="width: 24px; height: 24px; vertical-align: middle;"/>
            </a>
            <a href="[Social Media Link 3]" style="text-decoration: none;">
              <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram" style="width: 24px; height: 24px; vertical-align: middle;"/>
            </a>
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Emails sent successfully!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error in POST /api/pricing:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process request', error: error.message },
      { status: 500 }
    );
  }
}