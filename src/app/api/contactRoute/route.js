// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, message } = req.body;

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       port: 465, 
//       secure: true, 
//       auth: {
//         user: process.env.GMAIL,
//         pass: process.env.GMAIL_PASSWORD,  
//       },
//     });

//     try {
//       // Send email to yourself
//       await transporter.sendMail({
//         from: process.env.GMAIL,
//         to: process.env.GMAIL,
//         subject: 'New Contact Form Submission',
//         text: `You have a new message from ${name} (${email}): ${message}`,
//       });

//       // Send confirmation email to the user
//       await transporter.sendMail({
//         from: process.env.GMAIL,
//         to: email,
//         subject: 'Thank you for reaching out!',
//         text: `Hello ${name},\n\nThank you for contacting us! We'll get back to you soon.\n\nBest Regards,\nNoLimitBikers Team`,
//       });

//       res.status(200).json({ message: 'Emails sent successfully!' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ message: 'Failed to send email' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // if (req.method === 'OPTIONS') {
  //   res.status(200).end();
  //   return;
  // }

  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PASSWORD, // Use App Password instead of regular password
      },
    });

    try {
      // Send email to yourself
      await transporter.sendMail({
        from: process.env.GMAIL,
        to: process.env.GMAIL,
        subject: 'New Contact Form Submission',
        text: `You have a new message from ${name} (${email}): ${message}`,
      });

      // Send confirmation email to the user
      await transporter.sendMail({
        from: process.env.GMAIL,
        to: email,
        subject: 'Thank you for reaching out!',
        text: `Hello ${name},\n\nThank you for contacting us! We'll get back to you soon.\n\nBest Regards,\nNoLimitBikers Team`,
      });

      res.status(200).json({ message: 'Emails sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}