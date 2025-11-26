import { PROJECTS } from "@/app/constants/data";
import { HoverEffect } from "../ui/card-hover-effect";

export default function Projectss() {
  return (
    <div className="w-full md:max-w-8xl md:px-8">
      <HoverEffect items={PROJECTS} />
    </div>
  );
}
