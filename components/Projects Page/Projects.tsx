import { projects } from "@/lib/data";
import { HoverEffect } from "../ui/card-hover-effect";

export default function Projectss() {
  return (
    <div className="w-full md:max-w-8xl md:px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
