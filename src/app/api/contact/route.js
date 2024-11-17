import nodemailer from 'nodemailer';

export async function POST(req, res) {
    const { name, email, message } = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PASSWORD
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.GMAIL,
        to: process.env.GMAIL,
        subject: 'New Contact Form Submission',
        text: `You have a new message from ${name} (${email}): ${message}`,
      });

      await transporter.sendMail({
        from: process.env.GMAIL,
        to: email,
        subject: 'Thank you for reaching out!',
        text: `Hello ${name},\n\nThank you for contacting us! We'll get back to you soon.\n\nBest Regards,\nNoLimitBikers Team`,
      });

      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
    }
}