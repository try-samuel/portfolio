import { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Matching the CustomCursor spring config for that "realtime" feel
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const textX = useTransform(xSpring, (latest) => latest * 0.1);
  const textY = useTransform(ySpring, (latest) => latest * 0.1);

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    x.set(middleX * 0.35);
    y.set(middleY * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="relative inline-block"
    >
      <motion.div
        style={{ x: xSpring, y: ySpring }}
        className={className}
      >
        <motion.span 
          style={{ x: textX, y: textY }}
          className="relative block"
        >
          {children}
        </motion.span>
      </motion.div>
    </div>
  );
}
