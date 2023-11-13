import React from "react";
import TextLoop from "../shared/TextLoop";
import LinkScroll from "../shared/LinkScroll";
import Image from "next/image";
import Icon from "../shared/Icon";

const HeroSection = () => {
  return (
    // <section className="relative h-[calc(100vh-110px)]">
    //   <div className="absolute left-1/2 top-1/2 w-7/12 -translate-x-1/2 translate-y-[-90%]  whitespace-nowrap font-catamaran text-[4rem] font-medium leading-none">
    //     <h2 className="flex items-center gap-x-8">
    //       <span className="text-[10rem] text-brand-blue">Hi </span>I&apos;m
    //       Aisyah, and
    //     </h2>
    //     <div className="ml-[18rem]">
    //       <span className="mr-6">I do</span>
    //       <TextLoop texts={["graphic design", "UI/UX design", "game & art"]} />
    //     </div>
    //   </div>
    //   <LinkScroll href="about-me">
    //     <div className="absolute bottom-32 left-[48%] flex -translate-x-1/2 animate-bounce flex-col items-center justify-end text-base font-bold text-brand-red">
    //       <p>scroll down</p>
    //       <svg
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="currentColor"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M18 6.41L16.59 5L12 9.58L7.41 5L6 6.41L12 12.41L18 6.41Z" />
    //         <path d="M18 13L16.59 11.59L12 16.17L7.41 11.59L6 13L12 19L18 13Z" />
    //       </svg>
    //     </div>
    //   </LinkScroll>
    // </section>
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
