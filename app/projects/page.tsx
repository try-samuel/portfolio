"use client";

import Projectss from "@/components/Projects Page/Projects";
import Footer from "@/components/common/Footer";
import MobileTopBar from "@/components/common/MobileTopBar";
import TopBar from "@/components/common/TopBar";
import BackButton from "@/components/ui/backButton";
import useIsMobile from "@/hooks/useIsMobile";

export default function ProjectsPage() {
  const isMobile = useIsMobile(); // Check if the user is on a mobile device
  return (
    <>
      {
        // If the user is on a mobile device, render the MobileTopBar component
        isMobile ? <MobileTopBar /> : <TopBar />
      }
      <main className="container">
        <section className="pt-52 lg:pt-10">
          <BackButton />
          <h1 className="text-4xl">An Overview of my Projects:</h1>
          <Projectss />
        </section>
        <Footer />
      </main>
    </>
  );
}
