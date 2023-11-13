import React from "react";
import TextLoop from "../shared/TextLoop";
import LinkScroll from "../shared/LinkScroll";
import Image from "next/image";
import Icon from "../shared/Icon";

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <Image
        src={"/bg-home-top.svg"}
        width={100}
        height={100}
        className="absolute z-0 w-screen"
        alt="Background"
      />
      <div className="absolute z-10 flex h-full w-full flex-col px-40 pt-32 font-shrikhand text-[4rem] xl:px-56 2xl:px-96 2xl:pt-52">
        <h2 className="relative gap-x-8">
          <Icon
            name="star"
            className="absolute right-16 top-10 -rotate-12 text-brand-blue xl:right-48 2xl:right-64"
          />
          <span className="text-[10rem] text-brand-blue">Hi </span>I&apos;m
          Aisyah, and
        </h2>
        <div className="relative ml-72 xl:ml-96">
          <span className="mr-6">I do</span>
          <Icon
            name="starGear"
            className="absolute -bottom-10 -left-36 text-brand-red"
          />
          <TextLoop texts={["graphic design", "UI/UX design", "game & art"]} />
        </div>
        <div className="mt-36 animate-bounce text-center font-catamaran text-base font-bold text-brand-red xl:mt-60">
          <LinkScroll href="about-me">
            <p>Scroll down</p>
            <Icon name="downs" className="flex w-full justify-center" />
          </LinkScroll>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
