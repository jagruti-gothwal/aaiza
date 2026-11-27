"use server"

import { getDb } from "@/lib/mongodb"
import nodemailer from "nodemailer"

export async function submitInquiry(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const name = formData.get("name")?.toString() || ""
  const email = formData.get("email")?.toString() || ""
  const phone = formData.get("phone")?.toString() || ""
  const message = formData.get("message")?.toString() || ""
  const product_ids = formData.get("product_ids")?.toString() || ""

  const data = {
    name,
    email,
    phone,
    message,
    product_ids,
    created_at: new Date(),
    status: 'New'
  }

  let dbSuccess = false;
  let emailSuccess = false;
  let lastError = "";

  // 1. Save to MongoDB
  if (process.env.MONGODB_URI) {
    try {
      const db = await getDb()
      await db.collection("inquiries").insertOne(data)
      dbSuccess = true;
    } catch (dbError: any) {
      console.error("MongoDB Connection Crash:", dbError.message)
      lastError = dbError.message;
    }
  }

  // 2. Send Email Notification
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "AAIZAFOODTRADING@GMAIL.COM",
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"AAIZA FOOD TRADING FZCO Website" <${process.env.EMAIL_USER || "AAIZAFOODTRADING@GMAIL.COM"}>`,
      to: "AAIZAFOODTRADING@GMAIL.COM",
      subject: `New B2B Inquiry: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0B4F43;">New Website Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Product IDs:</strong> ${product_ids}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
            ${message}
          </div>
          <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #888;">This email was sent from the AAIZA FOOD TRADING FZCO B2B Inquiry Form.</p>
        </div>
      `,
    }

    if (process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions)
      emailSuccess = true;
    } else {
      console.warn("Email not sent: EMAIL_PASS environment variable is missing.")
      lastError = lastError || "Email configuration missing";
    }
  } catch (emailError: any) {
    console.error("Email notification failed:", emailError)
    lastError = emailError.message || "Email delivery failed";
  }

  // We consider it a partial success if at least one method worked
  if (dbSuccess || emailSuccess) {
    return { success: true }
  }

  return { 
    success: false, 
    error: lastError || "Failed to process inquiry through all available channels" 
  }
}
