"use client";

import MobileTopBar from "@/components/common/MobileTopBar";
import TopBar from "@/components/common/TopBar";
import useIsMobile from "@/hooks/useIsMobile";

export default function IndividualProject() {
  const isMobile = useIsMobile(); // Check if the user is on a mobile device
  return (
    <main className="">
      {
        // If the user is on a mobile device, render the MobileTopBar component
        isMobile ? <MobileTopBar /> : <TopBar />
      }
      <section className="pt-52 lg:pt-10">
        <h1>Hello, world!</h1>
      </section>
    </main>
  );
}
