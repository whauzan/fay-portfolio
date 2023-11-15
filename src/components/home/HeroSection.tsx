import React from "react";
import TextLoop from "../shared/TextLoop";
import LinkScroll from "../shared/LinkScroll";
import Image from "next/image";
import Icon from "../shared/Icon";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src={"/bg-home-top.svg"}
        width={100}
        height={100}
        className="absolute z-0 h-full w-full object-cover object-bottom"
        alt="Background"
      />
      <div className="absolute z-10 flex h-full w-full flex-col px-40 pt-32 font-shrikhand text-[4rem] xl:px-56 2xl:px-96 2xl:pt-52">
        <h2 className=" gap-x-8">
          <span className="text-[10rem] text-brand-blue">Hi </span>I&apos;m
          Aisyah,{" "}
          <span className="relative">
            and
            <Icon
              name="star"
              className="absolute -right-20 -top-16 -rotate-12 text-brand-blue"
            />
          </span>
        </h2>
        <div className="relative ml-72 xl:ml-96">
          <span className="mr-6">I do</span>
          <Icon
            name="starGear"
            className="absolute -bottom-10 -left-36 text-brand-red"
          />
          <TextLoop texts={["graphic design", "UI/UX design", "game & art"]} />
        </div>
        <div className="mx-auto mt-72 w-fit animate-bounce font-catamaran text-base font-bold text-brand-red xl:mt-48 2xl:mt-60">
          <LinkScroll href="about-me">
            <p>Scroll down</p>
            <Icon name="downs" className="flex justify-center" />
          </LinkScroll>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
