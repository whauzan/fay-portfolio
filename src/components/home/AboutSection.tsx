import Image from "next/image";
import React from "react";
import Icon from "../shared/Icon";
import { Button } from "../ui/Button";
import { Dialog, DialogTrigger } from "../ui/Dialog";
import ContactDialog from "../shared/ContactDialog";

const AboutSection = () => {
  return (
    <section
      className="h-screen px-16 pt-12 xl:px-36 2xl:px-72 2xl:pt-32"
      id="about-me"
    >
      <div className="relative h-[33rem] w-full rounded-2xl bg-[#C1A096] px-4 pb-20 pt-4">
        <Image
          src={"/me.png"}
          width={1000}
          height={1000}
          alt="Me"
          className="absolute -bottom-72 left-0 w-[30rem] xl:-bottom-48 xl:w-[25rem] 2xl:-bottom-56 2xl:w-[26rem]"
        />
        <div className="h-full rounded-3xl bg-brand-blue">
          <div className="relative ml-72 mr-16 pt-10 text-text-white">
            <Icon
              name="starOutline"
              className="absolute -left-28 top-28 h-16 w-16 animate-wiggleLeft"
            />
            <Icon
              name="starOutline"
              className="absolute -left-20 top-40 h-12 w-12 animate-wiggleRight"
            />
            <h2 className="font-shrikhand text-5xl">About Me</h2>
            <div className="mr-20 mt-3">
              <p className="text-justify text-xl font-medium">
                I&apos;m all about the creative journey. I&apos;ve had some
                exciting gigs in design, each adding a burst of color to my
                story. I enjoy diving into and exploring various roles, starting
                from graphic design, diving into the world of game art, and
                UI/UX design. For me, design is about storytelling and
                experiences. As I look ahead to the next chapter, I&apos;m all
                about bringing creativity and a smile to every project I take
                on.
              </p>
            </div>
            <div className="relative mt-4">
              <Icon
                name="starOutline"
                className="absolute -top-10 right-4 h-12 w-12 animate-wiggleLeft"
              />
              <h3 className="text-2xl font-semibold">
                Click below to connect with me or to see all my journeys
              </h3>
            </div>
            <div className="mt-6 flex w-full gap-x-10 font-bold">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant={"secondary"}
                    dotColor={"secondary"}
                    className="uppercase"
                  >
                    <span className="z-10">Get In Touch</span>
                  </Button>
                </DialogTrigger>
                <ContactDialog />
              </Dialog>
              <Button variant={"outline"} className="uppercase">
                See My Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
