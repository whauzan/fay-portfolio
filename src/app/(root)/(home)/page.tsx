import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="min-h-screen" id="about-me">
        About Me
      </section>
      <section className="min-h-screen" id="selected-work">
        This is What I Do
      </section>
      <section className="min-h-screen" id="contact">
        Contact
      </section>
    </>
  );
}
