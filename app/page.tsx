"use client";

import Hero from "@/components/LandingPage/Hero";
import MobileTopBar from "@/components/common/MobileTopBar";
import TopBar from "@/components/common/TopBar";
import useIsMobile from "@/hooks/useIsMobile";

export default function Home() {
  const isMobile = useIsMobile(); // Check if the user is on a mobile device

  return (
    <main className="">
      {
        // If the user is on a mobile device, render the MobileTopBar component
        isMobile ? <MobileTopBar /> : <TopBar />
      }
      <section className="container">
        <Hero />
      </section>
    </main>
  );
}
