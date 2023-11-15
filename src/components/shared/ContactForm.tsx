"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { ContactFormSchema } from "@/lib/schema/contact";
import { sendEmail } from "@/lib/actions/contact.action";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { DialogFooter } from "../ui/Dialog";
import { toast } from "sonner";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof ContactFormSchema>> = async (
    data,
  ) => {
    console.log(data);

    const result = await sendEmail(data);

    if (result?.success) {
      console.log({ data: result.data });
      toast.success("Email sent!");
      reset();
    }

    console.log(result?.error);
    toast.error("Something went wrong!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 px-8 py-4">
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="name" className="text-xl font-medium">
            Name
          </Label>
          <Input id="name" className="py-6 text-lg" {...register("name")} />
          {errors.name?.message && <p>{errors.name.message}</p>}
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="email" className="text-xl font-medium">
            Email
          </Label>
          <Input id="email" className="py-6 text-lg" {...register("email")} />
          {errors.email?.message && <p>{errors.email.message}</p>}
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="message" className="text-xl font-medium">
            Message
          </Label>
          <Textarea
            id="message"
            className="resize-none text-lg"
            rows={7}
            {...register("message")}
          />
          {errors.message?.message && <p>{errors.message.message}</p>}
        </div>
      </div>
      <DialogFooter className="sm:justify-center">
        <Button type="submit" disabled={isSubmitting}>
          <span className="z-10">Submit</span>
        </Button>
      </DialogFooter>
    </form>
  );
};

export default ContactForm;
