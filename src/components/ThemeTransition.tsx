"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeTransitionProps {
    isActive: boolean;
    isDark: boolean;
    beforText: {
        sign: string;
        meaning: string;
    }
    afterText: {
        sign: string;
        meaning: string;
    }
}

export default function ThemeTransition({
    isActive,
    isDark,
    beforText,
    afterText
}: ThemeTransitionProps) {
    const [speedLines, setSpeedLines] = React.useState<
        Array<{
            x1: number;
            y1: number;
            x2: number;
            y2: number;
            delay: number;
        }>
    >([]);

    React.useEffect(() => {
        const createLines = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            const centerX = width / 2;
            const centerY = height / 2;

            const count = 44;

            const lines = Array.from({ length: count }, (_, i) => {
                const angle = (i / count) * Math.PI * 2;

                const innerRadius = 40 + Math.random() * 30;
                const outerRadius = Math.max(width, height) * 0.75;

                return {
                    x1:
                        centerX +
                        Math.cos(angle) * innerRadius,
                    y1:
                        centerY +
                        Math.sin(angle) * innerRadius,

                    x2:
                        centerX +
                        Math.cos(angle) * outerRadius,
                    y2:
                        centerY +
                        Math.sin(angle) * outerRadius,

                    delay: Math.random() * 120,
                };
            });

            setSpeedLines(lines);
        };

        createLines();

        window.addEventListener("resize", createLines);

        return () => {
            window.removeEventListener("resize", createLines);
        };
    }, []);

    return (
        <AnimatePresence>
            {isActive && (
                <div
                    className="
                        pointer-events-none
                        fixed
                        inset-0
                        z-[9999]
                        overflow-hidden
                    "
                >
                    {/* ================================================== */}
                    {/* 1. CINEMATIC Y-AXIS BARS                         */}
                    {/* ================================================== */}

                    <motion.div
                        className="
                            fixed
                            left-0
                            top-0
                            z-[45]
                            h-[12vh]
                            w-full
                            bg-black
                        "
                        initial={{
                            y: "-100%",
                        }}
                        animate={{
                            y: ["-100%", "0%", "0%", "-100%"],
                        }}
                        transition={{
                            duration: 1.65,
                            times: [0, 0.24, 0.78, 1],
                            ease: [0.2, 0.9, 0.15, 1],
                        }}
                    />

                    <motion.div
                        className="
                            fixed
                            bottom-0
                            left-0
                            z-[45]
                            h-[12vh]
                            w-full
                            bg-black
                        "
                        initial={{
                            y: "100%",
                        }}
                        animate={{
                            y: ["100%", "0%", "0%", "100%"],
                        }}
                        transition={{
                            duration: 1.65,
                            times: [0, 0.24, 0.78, 1],
                            ease: [0.2, 0.9, 0.15, 1],
                        }}
                    />

                    {/* ================================================== */}
                    {/* 2. RED ANIME SPEED LINES                         */}
                    {/* ================================================== */}

                    <svg
                        className="
                            pointer-events-none
                            fixed
                            inset-0
                            z-[40]
                            h-full
                            w-full
                        "
                    >
                        {speedLines.map((line, index) => (
                            <motion.line
                                key={index}
                                x1={line.x1}
                                y1={line.y1}
                                x2={line.x2}
                                y2={line.y2}
                                stroke={
                                    isDark
                                        ? "#ff2d4d"
                                        : "#d91f3c"
                                }
                                strokeWidth="2"
                                initial={{
                                    opacity: 0,
                                    pathLength: 0,
                                }}
                                animate={{
                                    opacity: [
                                        0,
                                        0.65,
                                        0.65,
                                        0,
                                    ],
                                    pathLength: [
                                        0,
                                        1,
                                        1,
                                        1,
                                    ],
                                }}
                                transition={{
                                    duration: 0.9,
                                    delay:
                                        0.38 +
                                        line.delay / 1000,
                                    times: [
                                        0,
                                        0.32,
                                        0.72,
                                        1,
                                    ],
                                    ease: "easeOut",
                                }}
                            />
                        ))}
                    </svg>

                    {/* ================================================== */}
                    {/* 3. FIRST JAPANESE TEXT                          */}
                    {/* ================================================== */}

                    <motion.div
                        className="
                            fixed
                            left-1/2
                            top-1/2
                            z-[70]
                            -translate-x-1/2
                            -translate-y-1/2
                            text-center
                        "
                        initial={{
                            opacity: 0,
                            scale: 1.8,
                            rotate: -5,
                        }}
                        animate={{
                            opacity: [
                                0,
                                1,
                                1,
                                1,
                                1,
                                0,
                            ],
                            scale: [
                                1.8,
                                0.92,
                                1,
                                1,
                                1,
                                0.96,
                            ],
                            rotate: [
                                -5,
                                -2,
                                -2,
                                -2,
                                -2,
                                -2,
                            ],
                        }}
                        transition={{
                            duration: 1.65,
                            delay: 0.28,
                            times: [
                                0,
                                0.12,
                                0.22,
                                0.48,
                                0.78,
                                1,
                            ],
                            ease: [0.2, 1.2, 0.3, 1],
                        }}
                    >
                        <div
                            className="
                                font-serif
                                text-[72px]
                                font-black
                                leading-none
                                text-white
                            "
                            style={{
                                WebkitTextStroke: `2px ${isDark
                                    ? "#ff2d4d"
                                    : "#d91f3c"
                                    }`,
                                textShadow:
                                    "0 0 20px rgba(255,45,77,.7)",
                            }}
                        >
                            {beforText.sign}
                        </div>

                        <div
                            className="
                                mt-2
                                text-sm
                                font-bold
                                tracking-[0.6em]
                                text-white
                            "
                            style={{
                                textShadow:
                                    "0 0 15px rgba(255,45,77,.8)",
                            }}
                        >
                            {beforText.meaning}
                        </div>
                    </motion.div>

                    {/* ================================================== */}
                    {/* 4. LEFT X-AXIS SCREEN SHARD                     */}
                    {/* ================================================== */}

                    <motion.div
                        className="
                            fixed
                            inset-y-0
                            left-0
                            z-[50]
                            w-[60vw]
                        "
                        style={{
                            background: isDark
                                ? "#0a0a0c"
                                : "#f5f2ea",

                            clipPath:
                                "polygon(0 0, 100% 0, 40% 100%, 0 100%)",
                        }}
                        initial={{
                            x: "-120%",
                        }}
                        animate={{
                            x: [
                                "-120%",
                                "0%",
                                "0%",
                                "-120%",
                            ],
                        }}
                        transition={{
                            duration: 1.15,
                            delay: 0.72,
                            times: [
                                0,
                                0.40,
                                0.62,
                                1,
                            ],
                            ease: [0.85, 0, 0.15, 1],
                        }}
                    />

                    {/* ================================================== */}
                    {/* 5. RIGHT X-AXIS SCREEN SHARD                    */}
                    {/* ================================================== */}

                    <motion.div
                        className="
                            fixed
                            inset-y-0
                            right-0
                            z-[50]
                            w-[60vw]
                        "
                        style={{
                            background: isDark
                                ? "#0a0a0c"
                                : "#f5f2ea",

                            clipPath:
                                "polygon(60% 0, 100% 0, 100% 100%, 0 100%)",
                        }}
                        initial={{
                            x: "120%",
                        }}
                        animate={{
                            x: [
                                "120%",
                                "0%",
                                "0%",
                                "120%",
                            ],
                        }}
                        transition={{
                            duration: 1.15,
                            delay: 0.72,
                            times: [
                                0,
                                0.40,
                                0.62,
                                1,
                            ],
                            ease: [0.85, 0, 0.15, 1],
                        }}
                    />

                    {/* ================================================== */}
                    {/* 6. MAIN ANIME RED SLASH                         */}
                    {/* ================================================== */}

                    <motion.div
                        className="
                            fixed
                            left-[-20%]
                            top-1/2
                            z-[60]
                            h-[4px]
                            w-[140%]
                            origin-left
                        "
                        style={{
                            background:
                                "linear-gradient(90deg, transparent 0%, rgba(255,45,77,0.15) 25%, #ff2d4d 42%, #ffffff 49%, #ffffff 51%, #ff2d4d 58%, rgba(255,45,77,0.15) 75%, transparent 100%)",

                            boxShadow:
                                "0 0 8px #fff, 0 0 20px #ff2d4d, 0 0 50px rgba(255,45,77,.8)",

                            transform: "rotate(-8deg)",
                        }}
                        initial={{
                            x: "-100%",
                            scaleX: 0,
                            opacity: 0,
                        }}
                        animate={{
                            x: [
                                "-100%",
                                "-20%",
                                "0%",
                                "100%",
                            ],
                            scaleX: [
                                0,
                                1,
                                1,
                                1,
                            ],
                            opacity: [
                                0,
                                1,
                                1,
                                0,
                            ],
                        }}
                        transition={{
                            duration: 0.62,
                            delay: 0.90,
                            times: [
                                0,
                                0.45,
                                0.6,
                                1,
                            ],
                            ease: [0.6, 0, 0.3, 1],
                        }}
                    />

                    {/* ================================================== */}
                    {/* 7. SECOND RED SLASH                             */}
                    {/* ================================================== */}

                    <motion.div
                        className="
                            fixed
                            left-[-20%]
                            top-1/2
                            z-[59]
                            h-[2px]
                            w-[140%]
                        "
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, #ff2d4d, #fff, #ff2d4d, transparent)",

                            boxShadow:
                                "0 0 12px #ff2d4d",

                            transform:
                                "rotate(-8deg) translateY(9px)",
                        }}
                        initial={{
                            x: "-100%",
                            opacity: 0,
                        }}
                        animate={{
                            x: [
                                "-100%",
                                "0%",
                                "100%",
                            ],
                            opacity: [
                                0,
                                0.7,
                                0,
                            ],
                        }}
                        transition={{
                            duration: 0.48,
                            delay: 0.95,
                            ease: "easeOut",
                        }}
                    />

                    {/* ================================================== */}
                    {/* 8. IMPACT FLASH                                */}
                    {/* ================================================== */}

                    <motion.div
                        className="
                            fixed
                            inset-0
                            z-[55]
                            bg-white
                        "
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: [
                                0,
                                0,
                                0.9,
                                0,
                                0.18,
                                0,
                            ],
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 1.00,
                            times: [
                                0,
                                0.25,
                                0.34,
                                0.47,
                                0.58,
                                1,
                            ],
                            ease: "linear",
                        }}
                    />

                    {/* ================================================== */}
                    {/* 9. CENTER IMPACT RING — NO BLACK BALL          */}
                    {/* ================================================== */}

                    <motion.div
                        className="
                            fixed
                            left-1/2
                            top-1/2
                            z-[65]
                            h-3
                            w-3
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full
                            bg-white
                        "
                        initial={{
                            scale: 0,
                            opacity: 0,
                        }}
                        animate={{
                            scale: [
                                0,
                                1,
                                5,
                                14,
                            ],
                            opacity: [
                                0,
                                1,
                                0.7,
                                0,
                            ],
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 1.04,
                            times: [
                                0,
                                0.15,
                                0.4,
                                1,
                            ],
                            ease: "easeOut",
                        }}
                    />

                    {/* ================================================== */}
                    {/* 10. SECOND / IMPACT JAPANESE TEXT              */}
                    {/* ================================================== */}

                    <motion.div
                        className="
                            fixed
                            left-1/2
                            top-1/2
                            z-[72]
                            -translate-x-1/2
                            -translate-y-1/2
                            text-center
                        "
                        initial={{
                            opacity: 0,
                            scale: 1.8,
                            rotate: -5,
                        }}
                        animate={{
                            opacity: [
                                0,
                                1,
                                1,
                                0,
                            ],
                            scale: [
                                1.8,
                                0.92,
                                1,
                                0.96,
                            ],
                            rotate: [
                                -5,
                                -2,
                                -2,
                                -2,
                            ],
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 1.06,
                            times: [
                                0,
                                0.2,
                                0.7,
                                1,
                            ],
                            ease: [
                                0.2,
                                1.2,
                                0.3,
                                1,
                            ],
                        }}
                    >
                        <div
                            className="
                                font-serif
                                text-[72px]
                                font-black
                                leading-none
                                text-white
                            "
                            style={{
                                WebkitTextStroke: `2px ${isDark
                                    ? "#ff2d4d"
                                    : "#d91f3c"
                                    }`,
                                textShadow:
                                    "0 0 20px rgba(255,45,77,.7)",
                            }}
                        >
                            {afterText.sign}
                        </div>

                        <div
                            className="
                                mt-2
                                text-sm
                                font-bold
                                tracking-[0.6em]
                                text-white
                            "
                            style={{
                                textShadow:
                                    "0 0 15px rgba(255,45,77,.8)",
                            }}
                        >
                            {afterText.meaning}
                        </div>
                    </motion.div>

                    {/* ================================================== */}
                    {/* 11. CAMERA SHAKE                                */}
                    {/* ================================================== */}

                    <motion.div
                        className="
                            fixed
                            inset-0
                            z-[100]
                            pointer-events-none
                        "
                        animate={{
                            x: [
                                0,
                                -7,
                                8,
                                -6,
                                5,
                                -3,
                                0,
                            ],
                            y: [
                                0,
                                3,
                                -5,
                                4,
                                -2,
                                1,
                                0,
                            ],
                        }}
                        transition={{
                            duration: 0.34,
                            delay: 1.02,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            )}
        </AnimatePresence>
    );
}