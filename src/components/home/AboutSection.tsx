import Image from "next/image";
import React from "react";
import Icon from "../shared/Icon";

const AboutSection = () => {
  return (
    <section
      className="h-screen px-16 pt-12 xl:px-36 2xl:px-72 2xl:pt-32"
      id="about-me"
    >
      <div className="relative h-[33rem] w-full rounded-2xl bg-[#C1A096] px-4 pb-20 pt-4 xl:h-[30rem]">
        <Image
          src={"/me.png"}
          width={1000}
          height={1000}
          alt="Me"
          className="absolute -bottom-72 left-0 w-[30rem]"
        />
        <div className="h-full rounded-3xl bg-brand-blue">
          <div className="relative ml-80 pr-16 pt-7 text-text-white">
            <Icon
              name="starOutline"
              className="absolute -left-28 top-20 h-1/6 w-16 animate-wiggle"
            />
            <Icon
              name="starOutline"
              className="absolute -left-20 top-32 h-12 w-12 animate-wiggle"
            />
            <h2 className="font-shrikhand text-5xl">About Me</h2>
            <div className="ml-10 mt-3">
              <p className="text-justify text-xl font-medium">
                I&apos;m all about the creative journey. I&apos;ve had some
                exciting gigs in design, each adding a burst of color to my
                story. From crafting graphics as a{" "}
                <span className="font-bold">Graphic Designer</span>, diving into
                the gaming world as a{" "}
                <span className="font-bold">
                  Junior Environment Concept Artist
                </span>
                {", "}
                and <span className="font-bold">2D Artist</span>, and being a{" "}
                <span className="font-bold">UI/UX Designer</span>, I&apos;ve had
                a blast. I&apos;ve worked on captivating visuals, collaborated
                on cool projects, and kept the creative vibes flowing. With a
                toolkit that includes Figma, UI/UX Design, and the Adobe family,
                especially Photoshop and so many more, I turn ideas into
                remarkable experiences. For me, design is about storytelling and
                experiences. As I look ahead to the next chapter, I&apos;m all
                about bringing creativity and a smile to every project I take
                on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
