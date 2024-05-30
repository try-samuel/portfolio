"use client";

import MobileTopBar from "@/components/common/MobileTopBar";
import TopBar from "@/components/common/TopBar";
import useIsMobile from "@/hooks/useIsMobile";

export default function ProjectsPage() {
  const isMobile = useIsMobile(); // Check if the user is on a mobile device
  return (
    <main className="">
      {
        // If the user is on a mobile device, render the MobileTopBar component
        isMobile ? <MobileTopBar /> : <TopBar />
      }

      <h1>General Projects page!</h1>
    </main>
  );
}
