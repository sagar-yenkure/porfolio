"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LanguageTransitionProps {
    isActive: boolean;
    isContentReady?: boolean;

    from: {
        code: string;
        glyph: string;
    };

    to: {
        code: string;
        glyph: string;
        native: string;
    };

    onComplete?: () => void;
}

const SHUTTER_COUNT = 10;

function randomGlyph() {
    const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return pool[Math.floor(Math.random() * pool.length)];
}

export default function LanguageTransition({
    isActive,
    isContentReady = false,
    from,
    to,
    onComplete,
}: LanguageTransitionProps) {
    const [phase, setPhase] = React.useState<'closing' | 'covered' | 'opening' | 'idle'>('idle');

    React.useEffect(() => {
        if (!isActive) {
            setPhase('idle');
            return;
        }

        setPhase('closing');
        const timer = window.setTimeout(() => {
            setPhase('covered');
        }, 450);

        return () => window.clearTimeout(timer);
    }, [isActive]);

    React.useEffect(() => {
        if (phase === 'covered') {
            if (isContentReady) {
                setPhase('opening');
            } else {
                const fallback = window.setTimeout(() => {
                    setPhase('opening');
                }, 3500);
                return () => window.clearTimeout(fallback);
            }
        }
    }, [phase, isContentReady]);

    React.useEffect(() => {
        if (phase === 'opening') {
            const timer = window.setTimeout(() => {
                onComplete?.();
                setPhase('idle');
            }, 550);
            return () => window.clearTimeout(timer);
        }
    }, [phase, onComplete]);

    return (
        <AnimatePresence>
            {isActive && phase !== 'idle' && (
                <motion.div
                    className="
            pointer-events-none
            fixed
            inset-0
            z-[9999]
            overflow-hidden
          "
                    initial={{
                        opacity: 1,
                    }}
                    animate={{
                        opacity: phase === 'opening' ? 0.99 : 1,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                >
                    <motion.div
                        className="
              fixed
              left-0
              top-0
              z-[30]
              h-[2px]
              w-full
            "
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, var(--foreground), transparent)",
                            boxShadow:
                                "0 0 12px var(--foreground)",
                        }}
                        initial={{
                            y: 0,
                            opacity: 0,
                        }}
                        animate={{
                            y: "100vh",
                            opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeIn",
                        }}
                    />

                    <div className="fixed inset-0 z-[40] flex">
                        {Array.from({
                            length: SHUTTER_COUNT,
                        }).map((_, index) => (
                            <motion.div
                                key={index}
                                className="
                  relative
                  h-full
                  flex-1
                  border-r
                  border-foreground/20
                  bg-background
                "
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle, rgba(128,128,128,.12) 1px, transparent 1.4px)",
                                    backgroundSize:
                                        "12px 12px",
                                    transformOrigin:
                                        index % 2 === 0
                                            ? "top"
                                            : "bottom",
                                    willChange: "transform",
                                }}
                                initial={{
                                    scaleY: 0,
                                }}
                                animate={{
                                    scaleY: phase === 'opening' ? 0 : 1,
                                }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.02,
                                    ease: [0.6, 0.05, 0.15, 1],
                                }}
                            />
                        ))}
                    </div>

                    {/* DEPARTED  */}

                    <motion.div
                        className="
              fixed
              left-1/2
              top-[30%]
              z-[55]
              w-full
              -translate-x-1/2
              text-center
            "
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: phase === 'opening' ? 0 : 0.35,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <span
                            className="
                font-mono
                text-[9px]
                tracking-[0.35em]
                text-foreground
                sm:text-[11px]
                sm:tracking-[0.5em]
              "
                        >
                            {from.glyph.toUpperCase()} — DEPARTED
                        </span>
                    </motion.div>

                    {/* LANGUAGE WORD   */}

                    <motion.div
                        className="
              fixed
              left-1/2
              top-1/2
              z-[60]
              w-full
              -translate-x-1/2
              -translate-y-1/2
              px-4
              text-center
            "
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: phase === 'opening' ? 0 : 1,
                            y: phase === 'opening' ? -6 : 0,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >
                        <div
                            className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-[3px]
                text-[13vw]
                leading-none
                sm:text-[8vw]
                lg:text-[5.5vw]
              "
                        >
                            {to.native
                                .split("")
                                .map((char, index) => {
                                    if (char === " ") {
                                        return (
                                            <span
                                                key={`space-${index}`}
                                                className="
                          inline-block
                          w-[0.35em]
                        "
                                            />
                                        );
                                    }

                                    return (
                                        <FlapCharacter
                                            key={`${char}-${index}`}
                                            character={char.toUpperCase()}
                                            index={index}
                                        />
                                    );
                                })}
                        </div>

                        {/* NOW SHOWING */}

                        <motion.div
                            className="
                mt-5
                font-mono
                text-[9px]
                font-bold
                tracking-[0.25em]
                text-foreground
                sm:text-xs
                sm:tracking-[0.4em]
              "
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: phase === 'opening' ? 0 : 1,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                        >
                            NOW SHOWING —{" "}
                            {to.glyph.toUpperCase()}
                        </motion.div>
                    </motion.div>

                    {/* FLASH */}

                    <motion.div
                        className="
              fixed
              inset-0
              z-[35]
              bg-foreground
            "
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: phase === 'closing' ? 0.05 : 0,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

interface FlapCharacterProps {
    character: string;
    index: number;
}

function FlapCharacter({
    character,
    index,
}: FlapCharacterProps) {
    const [current, setCurrent] =
        React.useState(randomGlyph);

    const [settled, setSettled] =
        React.useState(false);

    React.useEffect(() => {
        setCurrent(randomGlyph());
        setSettled(false);

        const baseDelay =
            200 + index * 40;

        const timers: number[] = [];

        timers.push(
            window.setTimeout(() => {
                setCurrent(randomGlyph());
            }, baseDelay)
        );

        timers.push(
            window.setTimeout(() => {
                setCurrent(randomGlyph());
            }, baseDelay + 60)
        );

        timers.push(
            window.setTimeout(() => {
                setCurrent(character);
                setSettled(true);
            }, baseDelay + 120)
        );

        return () => {
            timers.forEach((timer) => {
                window.clearTimeout(timer);
            });
        };
    }, [character, index]);

    return (
        <motion.span
            className="
        relative
        inline-block
        h-[1em]
        w-[0.75em]
        overflow-hidden
        rounded-[3px]
        bg-background
        [perspective:300px]
      "
            initial={{
                opacity: 0,
                scale: 0.95,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                delay: 0.15 + index * 0.03,
                duration: 0.2,
            }}
        >
            {/* Split line */}

            <span
                className="
          pointer-events-none
          absolute
          left-0
          top-1/2
          z-10
          h-px
          w-full
          bg-foreground/30
        "
            />

            {/* Character */}

            <AnimatePresence>
                <motion.span
                    key={`${current}-${settled}`}
                    className={`
            absolute
            inset-0
            flex
            items-center
            justify-center
            font-mono
            font-extrabold
            ${settled
                            ? "text-foreground"
                            : "text-muted-foreground/60"
                        }
          `}
                    initial={{
                        rotateX: -90,
                        opacity: 0,
                    }}
                    animate={{
                        rotateX: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.09,
                        ease: "linear",
                    }}
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                >
                    {current}
                </motion.span>
            </AnimatePresence>
        </motion.span>
    );
}