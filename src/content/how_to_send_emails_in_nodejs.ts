const how_to_send_emails_in_nodejs = `

Sending transactional emails — such as signup confirmation, password reset, or order updates — is a common requirement in web development. In this guide, you'll learn two practical methods to send emails in **Node.js / Next.js** apps:

- Using **Gmail SMTP** with **Nodemailer**
- Using **Resend** API with a verified domain

---

## Method 1: Sending Emails Using Gmail SMTP

### Step 1: Install Nodemailer

\`\`\`bash
npm install nodemailer
\`\`\`

### Step 2: Setup Gmail SMTP Credentials

To use your Gmail account for sending emails:

- Go to your [Google Account Settings](https://myaccount.google.com/)
- Enable **2-step verification**
- Create an **App Password**
- Use that app password instead of your actual password

In your .env file:

\`\`\`
// .env
SMTP_USER=yourgmail@gmail.com
SMTP_PASS=your-app-password
\`\`\`

### Step 3: Create Mail Utility

\`\`\`ts
// lib/mailer.ts
import nodemailer from "nodemailer";

if (!process.env.SMTP_USER || !process.env.SMTP_PASS)
  throw new Error("SMTP_USER and SMTP_PASS must be set in .env");


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendMail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to,
    subject,
    html,
  };

  return await transporter.sendMail(mailOptions);
}
\`\`\`

### Step 4: Send Email

\`\`\`ts
// app/api/send-mail/route.ts
import { sendMail } from "@/lib/mailer";

export async function POST(req: Request) {
  const { to, subject, html } = await req.json();

  await sendMail({ to, subject, html });

  return Response.json({ success: true });
}
\`\`\`

---

## Method 2: Sending Emails Using Resend API

[Resend](https://resend.com) is an email API for developers with a clean DX.

### Step 1: Install Resend SDK

\`\`\`bash
npm install resend
\`\`\`

### Step 2: Get Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Create a project and verify a domain or email
3. Copy your API key and add it to .env:

\`\`\`
// .env
RESEND_API_KEY=your_resend_api_key
\`\`\`

### Step 3: Create Resend Utility

\`\`\`ts
// lib/resend.ts
import { Resend } from "resend";

if (!process.env.RESEND_API_KEY)
  throw new Error("RESEND_API_KEY must be set in .env");

export const resend = new Resend(process.env.RESEND_API_KEY);
\`\`\`

### Step 4: Send Email Using Resend

\`\`\`ts
// app/api/send-mail/route.ts
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  const { to, subject, html } = await req.json();

  await resend.emails.send({
    from: "Your Project <noreply@yourdomain.com>",
    to,
    subject,
    html,
  });

  return Response.json({ success: true });
}
\`\`\`

---

## Summary: When to Use What?
\`\`\`

| Use Case                       |  Recommended Option             |
|--------------------------------|--------------------------       |
| Quick internal testing         |  Gmail SMTP + Nodemailer        |
| Production with custom domain  |  Resend API (clean + scalable)  |
| No server / client-side send   |  Use EmailJS or Resend + API    |
\`\`\`
---

## Final Thoughts

Both Gmail SMTP and Resend offer great ways to send emails from your app. While Gmail works well for internal or testing use, Resend is ideal for production-grade transactional messaging.

Choose based on scale, branding, and infrastructure flexibility.

`;

export default how_to_send_emails_in_nodejs;
