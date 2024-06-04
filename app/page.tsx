"use client";

import Education from "@/components/LandingPage/Education";
import { Experiences } from "@/components/LandingPage/Experiences";
import Hero from "@/components/LandingPage/Hero";
import Skills from "@/components/LandingPage/Skills";
import Footer from "@/components/common/Footer";
import MobileTopBar from "@/components/common/MobileTopBar";
import TopBar from "@/components/common/TopBar";
import HeroSlider from "@/components/ui/hero-slider";
import MobileHeroSlider from "@/components/ui/hero-slider-mobile";
import useIsMobile from "@/hooks/useIsMobile";
import { education, expereince, skills } from "@/lib/data";

export default function Home() {
  const isMobile = useIsMobile(); // Check if the user is on a mobile device

  return (
    <main className="cursor-default">
      {
        // If the user is on a mobile device, render the MobileTopBar component
        isMobile ? <MobileTopBar /> : <TopBar />
      }
      <div className="container">
        <Hero />
      </div>
      <div className="my-10">
        {isMobile ? <MobileHeroSlider /> : <HeroSlider />}
      </div>
      <section className="container">
        <Experiences experiences={expereince} />
        <Education educations={education} />
        <Skills skills={skills} />
        <Footer />
      </section>
    </main>
  );
}
