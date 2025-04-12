"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [hoverTab, setHoverTab] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 h-fit -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = hoverTab === item.label;

          return (
            <Link
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHoverTab(item.label)}
              onMouseLeave={() => setHoverTab(null)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors duration-300",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-primary/10 text-primary"
              )}
            >
              <span className="hidden md:inline">{item.label}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>

              {/* Pop-Up Animation */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
