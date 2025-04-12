"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className="relative overflow-hidden hover:cursor-pointer rounded-full p-2 transition-all duration-300 hover:bg-accent hover:shadow-md"
    >
      <Sun className="h-5 w-5 transition-transform duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
