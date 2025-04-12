"use server";

import { getEmailComponent } from "@/email/getEmailComponent";
import { redis } from "@/lib/redis";
import { Resend } from "resend";

const sendmail = async (
  data: unknown,
  email: string,
  subject: string,
  templateType: string
) => {
  try {
    if (!process.env.RESEND_API_KEY)
      throw new Error("Resend API key is not set");

    const resend = new Resend(process.env.RESEND_API_KEY);
    const reactComponent = getEmailComponent(templateType, email, data);

    const { data: result, error } = await resend.emails.send({
      from: "Sagar Yenkure <no-reply@sagaryenkure.pro>",
      to: [email],
      cc: ["sagaryenkure4@gmail.com"],
      subject,
      react: reactComponent,
    });

    if (error) throw new Error(error.message);

    return result;
  } catch (error) {
    throw error;
  }
};

export default sendmail;
