import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, company, email, mobile,  budget, interests } = req.body;

  if (!name || !email || !mobile || !budget) {
    return res.status(400).json({ message: "Please fill all required fields." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #F8FAFD; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <div style="background:"#D3E3FD">
          <h2 style="text-align: center; color: #007bff; margin-bottom: 10px;">Congratulations</h2>
          <p style="text-align: center; font-size: 16px; color: #333;">You have a new inquiry from your website</p>
          <hr style="border: none; height: 1px; background: #ddd; margin: 20px 0;">
          </div>
          <div style="padding: 10px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "N/A"}</p>
            <p><strong>Mobile:</strong> ${mobile}</p>
            <p><strong>Budget:</strong> ${budget}</p>
            <p><strong>Interests:</strong> ${interests.length > 0 ? interests.join(", ") : "N/A"}</p>
          </div>
          <hr style="border: none; height: 1px; background: #ddd; margin: 20px 0;">
          <p style="text-align: center; font-size: 14px; color: #666;">This is an automated message. Please do not reply.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Your message has been sent!" });

  } catch (error) {
    return res.status(500).json({ message: `Something went wrong: ${error.message}` });
  }
}
