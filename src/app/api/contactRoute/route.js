// export default async function handleEmail(req, res) {
//     require('dotenv').config();

//     let nodemailer = require('nodemailer');
//     const transporter = nodemailer.createTransport({
//         service: '',
//         port: 465,
//         auth: {
//             user: '',
//             pass: process.env.password,
//         },
//         secure: true,
//     });

//     const mailData = {
//         from: `${req.body.email}`,
//         to: 'codngwthubaid@gmail.com',
//         subject: `Message From ${req.body.name}`,
//         text: req.body.message + " | Sent from: " + req.body.email,
//         html: `<div>${req.body.message}</div><p>Sent from:
//       ${req.body.email}</p>`
//     };
//     try {
//         await transporter.sendMail(mailData);
//         res.status(200).json({ message: 'Your message has been delivered' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error sending email' });
//     }
//     res.status(200);
//     console.log(req.body);
//     res.send('success');
// }
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configure transporter with Strato SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.strato.com', // Strato SMTP server
      port: 465, // Strato's recommended port
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'Info@nolimitbikers.nl', // your Strato email
        pass: 'YOUR_EMAIL_PASSWORD',   // your Strato email password
      },
    });

    try {
      // Send email to yourself
      await transporter.sendMail({
        from: 'Info@nolimitbikers.nl',
        to: 'Info@nolimitbikers.nl',
        subject: 'New Contact Form Submission',
        text: `You have a new message from ${name} (${email}): ${message}`,
      });

      // Send confirmation email to the user
      await transporter.sendMail({
        from: 'Info@nolimitbikers.nl',
        to: email,
        subject: 'Thank you for reaching out!',
        text: `Hello ${name},\n\nThank you for contacting us! We'll get back to you soon.\n\nBest Regards,\nNoLimitBikers Team`,
      });

      res.status(200).json({ message: 'Emails sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
