"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Globe } from "lucide-react";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div className="scroller font-bold uppercase text-white text-[15vw] leading-[0.8] flex whitespace-nowrap flex-nowrap" style={{ x }}>
        <span className="block mr-12">{children} </span>
        <span className="block mr-12">{children} </span>
        <span className="block mr-12">{children} </span>
        <span className="block mr-12">{children} </span>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-end pb-10 md:pb-20 overflow-hidden relative bg-background text-foreground">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-new.png"
          fill
          alt="Hero background"
          className="object-cover object-center"
          priority
          sizes="auto"
          quality={100}
          unoptimized
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Right Side Text */}
      <div className="absolute top-[50%] right-10 md:right-20 -translate-y-1/2 text-right hidden md:block z-10">
        <p className="text-2xl md:text-3xl font-medium text-white leading-tight">
          Fullstack<br />
          Software Engineer
        </p>
      </div>

      {/* Left Side Location Pill */}
      <div className="absolute top-[50%] left-10 md:left-20 -translate-y-1/2 hidden md:block z-10">
        <div className="bg-[#1C1D20] text-white px-6 py-4 rounded-full flex items-center gap-4 shadow-2xl border border-white/10">
          <div className="flex flex-col">
            <span className="text-sm text-gray-400">Located in</span>
            <span className="text-base font-medium">Nigeria</span>
          </div>
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
            <Globe className="w-20 h-20 text-white animate-pulse" />
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10">
        <ParallaxText baseVelocity={-0.5}>ADEKUNLE SAMUEL — SWE —</ParallaxText>
      </div>
    </section>
  );
}
