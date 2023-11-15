"use server";

import { z } from "zod";
import { Resend } from "resend";
import { ContactFormSchema } from "../schema/contact";
import ContactFormEmail from "@/components/shared/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: z.infer<typeof ContactFormSchema>) {
  const res = ContactFormSchema.safeParse(data);

  if (res.success) {
    const { email, message, name } = res.data;

    try {
      const data = await resend.emails.send({
        from: "wahyu172845@gmail.com",
        to: [email],
        subject: `Thank You for Your Message - ${name}`,
        text: `${message}`,
        react: ContactFormEmail({ name, email, message }),
      });

      return { success: true, data };
    } catch (err: any) {
      return { success: false, error: err };
    }
  }

  if (res.error) {
    return { success: false, error: res.error.format() };
  }
}
