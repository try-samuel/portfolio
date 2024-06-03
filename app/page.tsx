"use client";

import Education from "@/components/LandingPage/Education";
import { Experiences } from "@/components/LandingPage/Experiences";
import { Projects } from "@/components/LandingPage/FourProjects";
import Hero from "@/components/LandingPage/Hero";
import MobileTopBar from "@/components/common/MobileTopBar";
import TopBar from "@/components/common/TopBar";
import HeroSlider from "@/components/ui/hero-slider";
import MobileHeroSlider from "@/components/ui/hero-slider-mobile";
import useIsMobile from "@/hooks/useIsMobile";
import { education, expereince } from "@/lib/data";

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
        <Projects
          items={[
            {
              title: "Project 1",
              description: "Description 1",
              link: "/projects/project1",
              image:
                "https://i.pinimg.com/originals/fa/bb/e8/fabbe8c930aa212e16c1fb0fa55f35b9.jpg",
            },
            {
              title: "Project 2",
              description: "Description 2",
              link: "/projects/project2",
              image:
                "https://i.pinimg.com/originals/fa/bb/e8/fabbe8c930aa212e16c1fb0fa55f35b9.jpg",
            },
            {
              title: "Project 3",
              description: "Description 3",
              link: "/projects/project3",
              image:
                "https://i.pinimg.com/originals/fa/bb/e8/fabbe8c930aa212e16c1fb0fa55f35b9.jpg",
            },
            {
              title: "Project 4",
              description: "Description 4",
              link: "/projects/project4",
              image:
                "https://i.pinimg.com/originals/fa/bb/e8/fabbe8c930aa212e16c1fb0fa55f35b9.jpg",
            },
          ]}
        />
        <Experiences experiences={expereince} />
        <Education educations={education} />
      </section>
    </main>
  );
}
