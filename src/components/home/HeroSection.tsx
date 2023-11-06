import React from "react";
import TextLoop from "../shared/TextLoop";
import LinkScroll from "../shared/LinkScroll";

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-110px)]">
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-3/4 flex-col text-[13rem] uppercase leading-none text-primary-light/20">
        <span className="my-[-2.05rem]">Portfolio</span>
        <span className="my-[-2.05rem] rotate-180 scale-x-[-1]">Portfolio</span>
      </div>
      <div className="absolute left-1/2 top-1/2 w-7/12 -translate-x-1/2 translate-y-[-90%]  whitespace-nowrap font-catamaran text-[4rem] font-medium leading-none">
        <h2 className="flex items-center gap-x-8">
          <span className="text-[10rem] text-secondary">Hi </span>I&apos;m
          Aisyah, and
        </h2>
        <div className="ml-[18rem]">
          <span className="mr-6">I do</span>
          <TextLoop texts={["graphic design", "UI/UX design", "game & art"]} />
        </div>
      </div>
      <LinkScroll href="about-me">
        <div className="absolute bottom-32 left-[48%] flex -translate-x-1/2 animate-bounce flex-col items-center justify-end text-base font-bold text-primary-dark">
          <p>scroll down</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 6.41L16.59 5L12 9.58L7.41 5L6 6.41L12 12.41L18 6.41Z" />
            <path d="M18 13L16.59 11.59L12 16.17L7.41 11.59L6 13L12 19L18 13Z" />
          </svg>
        </div>
      </LinkScroll>
    </section>
  );
};

export default HeroSection;
