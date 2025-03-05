//'use server'
//import nodemailer from 'nodemailer';
//
//interface EmailProps {
//  name: string;
//  email: string;
//  message: string;
//}
//
//// Create a transporter using SMTP
//const transporter = nodemailer.createTransport({
//  host: process.env.SMTP_HOST,
//  port: parseInt(process.env.SMTP_PORT || '587'),
//  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
//  auth: {
//    user: process.env.SMTP_USER,
//    pass: process.env.SMTP_PASS
//  }
//});
//
//export async function sendEmail({ name, email, message }: EmailProps) {
//  try {
//    console.log('Sending email...');
//    // Send email
//    const info = await transporter.sendMail({
//      from: `"Contact Form" <${process.env.SMTP_FROM_EMAIL}>`, // sender address
//      to: process.env.SMTP_TO_EMAIL, // list of receivers
//      subject: 'New Contact Form Submission', // Subject line
//      html: `
//        <h1>New Contact Form Submission</h1>
//        <p><strong>Name:</strong> ${name}</p>
//        <p><strong>Email:</strong> ${email}</p>
//        <p><strong>Message:</strong></p>
//        <p>${message}</p>
//        <hr/>
//        <p>Sent via contact form</p>
//      `,
//      replyTo: email // Set reply-to to the sender's email
//    });
//
//    console.log('Email sent: %s', info.messageId);
//    return info;
//  } catch (error) {
//    console.error('Error sending email:', error);
//    throw error;
//  }
//}
//
//// Optional: Verify transporter connection
//export async function verifyEmailTransport() {
//  try {
//    await transporter.verify();
//    console.log('SMTP Server is ready to send emails');
//    return true;
//  } catch (error) {
//    console.error('SMTP Server connection error:', error);
//    return false;
//  }
//}
//
