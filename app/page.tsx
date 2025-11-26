import Hero from "@/components/Hero";
import Description from "@/components/Description";
import ProjectGallery from "@/components/ProjectGallery";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <Description />
      <ProjectGallery />
      <Footer />
    </main>
  );
}
