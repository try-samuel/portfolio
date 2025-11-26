'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const routes = {
    "/": "Home",
    "/about": "About",
    "/work": "Work",
    "/contact": "Contact"
}

const anim = (variants: any) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    }
}

export default function Curve({ children }: { children: React.ReactNode }) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const pathname = usePathname();

    useEffect(() => {
        function resize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        resize();
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])

    return (
        <div className='page curve pointer-events-none'>
            <motion.div 
                style={{ opacity: dimensions.width == 0 ? 0 : 1 }} 
                className='background bg-[#1C1D20]'
                {...anim(translate)}
            />
            <motion.p className='route' {...anim(text)}>
                {routes[pathname as keyof typeof routes] || pathname.replace("/", "")}
            </motion.p>
            {dimensions.width > 0 && <SVG {...dimensions} />}
            <div className='pointer-events-auto'>
                {children}
            </div>
        </div>
    )
}

const SVG = ({ height, width }: { height: number, width: number }) => {

    // Simplified path to debug
    const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `

    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `

    return (
        <motion.svg {...anim(translate)}>
            <motion.path {...anim(curve(initialPath, targetPath))} fill="#1C1D20" />
        </motion.svg>
    )
}

const text = {
    initial: {
        opacity: 1,
    },
    enter: {
        opacity: 0,
        top: -100,
        transition: { duration: .75, delay: .35, ease: [0.76, 0, 0.24, 1] },
        transitionEnd: { top: "47.5%" }
    },
    exit: {
        opacity: 1,
        top: "40%",
        transition: { duration: .5, delay: .4, ease: [0.33, 1, 0.68, 1] }
    }
}

const curve = (initialPath: string, targetPath: string) => {
    return {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: { duration: .75, delay: .35, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: initialPath,
            transition: { duration: .75, ease: [0.76, 0, 0.24, 1] }
        }
    }
}

const translate = {
    initial: {
        top: "-300px"
    },
    enter: {
        top: "-100vh",
        transition: { duration: .75, delay: .35, ease: [0.76, 0, 0.24, 1] },
        transitionEnd: {
            top: "100vh"
        }
    },
    exit: {
        top: "-300px",
        transition: { duration: .75, ease: [0.76, 0, 0.24, 1] }
    }
}
