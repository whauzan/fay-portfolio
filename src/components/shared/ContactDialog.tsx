import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import ContactForm from "./ContactForm";

const ContactDialog = () => {
  return (
    <DialogContent className="bg-neutral-white sm:max-w-[802px]">
      <DialogHeader className="mt-6 sm:text-center">
        <DialogTitle className="font-shrikhand text-[2rem] tracking-wide text-brand-red">
          Let&apos;s Get to Know Each Other First
        </DialogTitle>
      </DialogHeader>
      <ContactForm />
    </DialogContent>
  );
};

export default ContactDialog;
