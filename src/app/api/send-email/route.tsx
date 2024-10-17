import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Sender email from environment variable
    pass: process.env.EMAIL_PASS, // Email password from environment variable
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error("Transporter verification failed:", error);
  } else {
    console.log("Server is ready to send messages");
  }
});

export async function POST(request: Request) {
  try {
    const { subject, text } = await request.json(); // Extract email details from request body

    // Define the email options to send the message to your address
    const mailOptionsToMe = {
      from: process.env.EMAIL_USER,
      to: "emaknoel909@gmail.com", // Your contact email
      subject, // Subject provided by the user
      text, // Email content from the user
    };

    // Define the email options to send a success message to the user
    const mailOptionsToUser = {
      from: process.env.EMAIL_USER,
      to: subject, // User's email is passed in the 'subject' field
      subject: "Contact success", // Fixed subject for success message
      text: "Thanks for your contact. I will be in touch with you soon.", // Response message
    };

    // Send emails concurrently
    const [result, result1] = await Promise.all([
      transporter.sendMail(mailOptionsToMe),
      transporter.sendMail(mailOptionsToUser),
    ]);

    if (!result || !result1) {
      return NextResponse.json(
        { message: "Failed to send email" },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
