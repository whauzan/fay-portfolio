import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email("Email is invalid"),
  message: z.string({ required_error: "Message is required" }),
});
