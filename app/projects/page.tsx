

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of personal and professional projects built by Adekunle Samuel Fiyinfoluwa.",
};

import ProjectsContent from "@/components/Projects Page/ProjectsContent";

export default function ProjectsPage() {
  return <ProjectsContent />;
}
