"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [cursorText, setCursorText] = useState("");
  const [isViewMode, setIsViewMode] = useState(false);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);

      // Check if hovering over element with data-cursor="view"
      const target = e.target as HTMLElement;
      const cursorType = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      
      if (cursorType === 'view') {
        setIsViewMode(true);
        setCursorText('View');
      } else {
        setIsViewMode(false);
        setCursorText('');
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="hidden lg:block">
      {/* Normal Cursor */}
      {!isViewMode && (
        <>
          <motion.div
            className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
            style={{
              translateX: cursorX,
              translateY: cursorY,
            }}
          />
          <motion.div
            className="cursor-outline fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9998] mix-blend-difference"
            style={{
              translateX: cursorXSpring,
              translateY: cursorYSpring,
              x: -16,
              y: -16,
            }}
          />
        </>
      )}

      {/* View Mode Cursor */}
      {isViewMode && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="w-24 h-24 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex items-center justify-center">
            <span className="text-black text-sm font-medium">{cursorText}</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
