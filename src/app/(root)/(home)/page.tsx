import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <section className="min-h-screen" id="selected-work">
        This is What I Do
      </section>
      <section className="min-h-screen" id="contact">
        Contact
      </section>
    </>
  );
}
