import React from "react";
import TextLoop from "../shared/TextLoop";

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-110px)]">
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-3/4 flex-col text-[15rem] uppercase leading-none text-primary-light/20">
        <span className="my-[-2.32rem]">Portfolio</span>
        <span className="my-[-2.32rem] rotate-180 scale-x-[-1]">Portfolio</span>
      </div>
      <div className="absolute left-1/2 top-1/2 w-7/12 -translate-x-1/2 translate-y-[-80%] space-y-10 whitespace-nowrap font-catamaran text-8xl font-medium">
        <h2>
          <span className="text-[10rem] text-secondary">Hi </span>I&apos;m
          Aisyah, and
        </h2>
        <div className="ml-96">
          <span className="mr-3">I do</span>
          <TextLoop texts={["graphic design", "UI/UX design", "game & art"]} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
