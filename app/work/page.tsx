import WorkContent from "@/components/work/WorkContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore the professional work and projects of Adekunle Samuel Fiyinfoluwa, showcasing expertise in full-stack development.",
};

export default function WorkPage() {
  return <WorkContent />;
}
