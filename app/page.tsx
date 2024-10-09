"use client";

import "aos/dist/aos.css";
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
import { useEffect } from "react";

export default function Home() {
  const isMobile = useIsMobile(); // Check if the user is on a mobile device

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        disable: false,
        startEvent: "DOMContentLoaded",
        initClassName: "aos-init",
        animatedClassName: "aos-animate",
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 400,
        easing: "ease",
        once: false,
        mirror: false,
        anchorPlacement: "top-bottom",
      });
    });
  }, []);

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
        {/* <Skills skills={skills} /> */}
        <Footer />
      </section>
    </main>
  );
}
