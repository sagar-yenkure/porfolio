"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import LanguageTransition from "./Langtransition";

export type LangCode = "en" | "jp";

interface LanguageOption {
    code: LangCode;
    name: string;
    native: string;
    glyph: string;
}

const LANGS: LanguageOption[] = [
    {
        code: "en",
        name: "ENGLISH",
        native: "English",
        glyph: "EN",
    },
    {
        code: "jp",
        name: "日本語",
        native: "Japanese",
        glyph: "JP",
    },
];

interface LanguageToggleProps {
    value: LangCode;
    onChange: (lang: LangCode) => void;
}

export function LanguageToggle({
    value,
    onChange,
}: LanguageToggleProps) {
    const [open, setOpen] = React.useState(false);

    const [isTransitioning, setIsTransitioning] =
        React.useState(false);

    const [pendingLanguage, setPendingLanguage] =
        React.useState<LangCode | null>(null);

    const wrapRef = React.useRef<HTMLDivElement>(null);

    const currentLanguage =
        LANGS.find((lang) => lang.code === value) ?? LANGS[0];

    const targetLanguage =
        LANGS.find(
            (lang) => lang.code === pendingLanguage
        ) ?? currentLanguage;

    React.useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                wrapRef.current &&
                !wrapRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        }

        function handleEscape(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setOpen(false);
            }
        }

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        document.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, []);

    const select = (code: LangCode) => {
        if (code === value) {
            setOpen(false);
            return;
        }

        if (isTransitioning) return;

        setOpen(false);

        setPendingLanguage(code);

        setIsTransitioning(true);

        onChange(code);
    };

    const handleTransitionFinished = () => {
        setIsTransitioning(false);
        setPendingLanguage(null);
    };

    const isContentReady = pendingLanguage !== null && value === pendingLanguage;

    return (
        <>
            <div
                ref={wrapRef}
                className="relative mt-2"
            >
                {/* BUTTON  */}

                <button
                    type="button"
                    onClick={() => {
                        if (isTransitioning) return;

                        setOpen((current) => !current);
                    }}
                    disabled={isTransitioning}
                    aria-label="Change language"
                    aria-expanded={open}
                    className="
            relative
            flex
            h-9
            min-w-[60px]
            items-center
            justify-center
            gap-1.5
            rounded-full
            border
            border-border/50
            bg-muted/50
            px-3
            text-[11px]
            font-bold
            tracking-wide
            text-foreground
            backdrop-blur-xl
            transition-colors
            duration-250
            hover:border-border
            hover:bg-muted/70
            disabled:cursor-not-allowed
          "
                >
                    {/* Current language */}

                    <span className="flex h-[1.1em] overflow-hidden">
                        <AnimatePresence>
                            {currentLanguage.glyph
                                .split("")
                                .map((char, index) => (
                                    <motion.span
                                        key={`${currentLanguage.code}-${char}-${index}`}
                                        initial={{
                                            rotateX: -90,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            rotateX: 0,
                                            opacity: 1,
                                        }}
                                        exit={{
                                            rotateX: 90,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            duration: 0.32,
                                            delay: index * 0.03,
                                        }}
                                        className="
                      inline-block
                      [transform-style:preserve-3d]
                    "
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                        </AnimatePresence>
                    </span>

                    {/* Chevron */}

                    <motion.span
                        animate={{
                            rotate: open ? 180 : 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 26,
                        }}
                        className="
              text-[8px]
              text-muted-foreground
            "
                    >
                        ▾
                    </motion.span>
                </button>

                {/* DROPDOWN */}

                <AnimatePresence>
                    {open && (
                        <motion.div
                            role="listbox"
                            initial={{
                                opacity: 0,
                                scale: 0.92,
                                y: -6,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.92,
                                y: -6,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 28,
                            }}
                            className="
                absolute
                right-0
                top-[calc(100%+10px)]
                z-50
                w-[190px]
                overflow-y-auto
                rounded-2xl
                border
                border-border/50
                bg-background/95
                p-1.5
                shadow-2xl
                backdrop-blur-2xl
              "
                        >
                            {LANGS.map((lang) => {
                                const active = lang.code === value;

                                return (
                                    <motion.button
                                        key={lang.code}
                                        type="button"
                                        role="option"
                                        aria-selected={active}
                                        onClick={() => select(lang.code)}
                                        whileHover={{
                                            x: 3,
                                        }}
                                        className="
                      group
                      flex
                      w-full
                      flex-col
                      gap-0.5
                      rounded-xl
                      px-3
                      py-2.5
                      text-left
                      transition-colors
                      duration-200
                      hover:bg-foreground/5
                    "
                                    >
                                        <span
                                            className="
                        text-[13px]
                        font-semibold
                        tracking-wide
                      "
                                            style={{
                                                color: "var(--foreground)",
                                                opacity: active ? 1 : 0.55,
                                            }}
                                        >
                                            {lang.name}
                                        </span>

                                        <motion.span
                                            className="
                        h-px
                        w-full
                        origin-left
                        bg-foreground
                      "
                                            animate={{
                                                scaleX: active ? 1 : 0,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                            }}
                                            style={{
                                                opacity: 0.7,
                                            }}
                                        />

                                        <span
                                            className="
                        mt-0.5
                        text-[10px]
                        tracking-wide
                        text-muted-foreground/70
                      "
                                        >
                                            {lang.native}
                                        </span>
                                    </motion.button>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* LANGUAGE TRANSITION */}
            <LanguageTransition
                isActive={isTransitioning}
                isContentReady={isContentReady}
                from={{
                    code: currentLanguage.code,
                    glyph: currentLanguage.glyph,
                }}
                to={{
                    code: targetLanguage.code,
                    glyph: targetLanguage.glyph,
                    native: targetLanguage.native,
                }}
                onComplete={handleTransitionFinished}
            />
        </>
    );
}