import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Email is invalid"),
  message: z.string().min(1, { message: "Message is required" }),
});
