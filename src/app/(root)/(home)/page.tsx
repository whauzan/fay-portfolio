import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="min-h-screen" id="#about-me">
        About Me
      </div>
      <div className="min-h-screen" id="#selected-work">
        This is What I Do
      </div>
      <div className="min-h-screen" id="#contact">
        Contact
      </div>
    </>
  );
}
