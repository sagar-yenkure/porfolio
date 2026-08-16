"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import ThemeTransition from "./ThemeTransition";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [targetDark, setTargetDark] = React.useState(false);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    if (isTransitioning) return;

    const nextDark = !isDark;

    setTargetDark(nextDark);
    setIsTransitioning(true);

    /*
     * Timeline
     *
     * 0ms      → cinematic Y bars start
     * 420ms    → X-axis cut starts
     * 520ms    → red slash
     * 700ms    → impact + theme change
     * 1150ms   → cinematic bars leave
     * 1650ms   → animation finished
     */

    // Theme changes exactly at the slash impact
    setTimeout(() => {
      setTheme(nextDark ? "dark" : "light");
    }, 850);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1650);
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={toggleTheme}
        disabled={isTransitioning}
        aria-label="Toggle theme"
        whileTap={{ scale: 0.94 }}
        className="
          group
          relative
          mt-2
          h-9
          w-[68px]
          overflow-hidden
          rounded-full
          border
          border-border/50
          bg-muted/50
          p-1
          shadow-inner
          backdrop-blur-xl
        "
      >
        {/* Toggle background */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            background: isDark
              ? "linear-gradient(90deg, rgba(30,30,40,.9), rgba(15,15,20,.7))"
              : "linear-gradient(90deg, rgba(255,255,255,.9), rgba(240,240,240,.7))",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Thumb */}
        <motion.div
          className="
            absolute
            top-1
            z-10
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            bg-background
            shadow-md
          "
          animate={{
            x: isDark ? 30 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 450,
            damping: 28,
          }}
        >
          <motion.div
            key={isDark ? "moon" : "sun"}
            initial={{
              scale: 0,
              rotate: isDark ? 90 : -90,
            }}
            animate={{
              scale: 1,
              rotate: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 18,
            }}
          >
            {isDark ? (
              <Moon className="h-[15px] w-[15px]" />
            ) : (
              <Sun className="h-[15px] w-[15px]" />
            )}
          </motion.div>
        </motion.div>

        {/* Background icons */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
          <Sun
            className={`h-3.5 w-3.5 transition-all duration-500 ${isDark
              ? "scale-75 opacity-20"
              : "scale-100 opacity-50"
              }`}
          />

          <Moon
            className={`h-3.5 w-3.5 transition-all duration-500 ${isDark
              ? "scale-100 opacity-50"
              : "scale-75 opacity-20"
              }`}
          />
        </div>
      </motion.button>

      {/* Anime theme transition */}
      <ThemeTransition
        isActive={isTransitioning}
        isDark={targetDark}
        beforText={{
          sign: "愛",
          meaning: "Love"
        }}
        afterText={{
          sign: "復讐",
          meaning: "Revenge"
        }}
      />
    </>
  );
}