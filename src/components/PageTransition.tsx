"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface PageTransitionProps {
    children: ReactNode;
}

export default function PageTransition({
    children,
}: PageTransitionProps) {
    useEffect(() => {
        // Handle hash when the page loads
        if (window.location.hash) {
            const id = window.location.hash.substring(1);

            // Wait for the page/sections to render
            requestAnimationFrame(() => {
                const element = document.getElementById(id);

                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }, 100);
                }
            });
        }

        // Handle hash links clicked anywhere on the page
        const handleHashClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const link = target.closest("a");

            if (!link) return;

            const href = link.getAttribute("href");

            // Only handle links like #contact, #projects, etc.
            if (!href || !href.startsWith("#")) return;

            const id = href.substring(1);
            const element = document.getElementById(id);

            if (!element) return;

            event.preventDefault();

            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            // Update URL without causing browser jump
            window.history.pushState(null, "", href);
        };

        document.addEventListener("click", handleHashClick);

        return () => {
            document.removeEventListener("click", handleHashClick);
        };
    }, []);

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 12,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}