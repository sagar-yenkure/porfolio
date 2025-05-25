"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, X, Minus, Square } from "lucide-react";

const lines = [
  {
    command: "whoami",
    output: "Sagar Yenkure - Software Engineer",
  },
  {
    command: "cat skills.json",
    output: `{
  "frontend": ["React.js", "TypeScript", "Tailwind CSS"],
  "backend": ["Node.js", "PostgreSQL"],
  "tools": ["Git", "Docker", "AWS"],
  "current_focus": "Building scalable web applications"
}`,
  },
  {
    command: "git status",
    output: `On branch main
Your portfolio is up to date
Ready to collaborate on exciting projects!`,
  },
  {
    command: "./show_experience.sh",
    output: `> 1+ years of professional experience
> Delivered 7+ high-performing websites,
> Mentored 5+ interns
> Always learning and exploring new technologies`,
  },
];

const CodeTerminal = () => {
  const [displayedLines, setDisplayedLines] = useState<
    Array<{ command: string; output: string; completed: boolean }>
  >([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];

    const typeCommand = async () => {
      setIsTyping(true);
      for (let i = 0; i <= currentLine.command.length; i++) {
        await new Promise((resolve) =>
          setTimeout(resolve, 50 + Math.random() * 50)
        );
        setCurrentText(currentLine.command.slice(0, i));
      }

      await new Promise((resolve) => setTimeout(resolve, 500));
      setDisplayedLines((prev) => [
        ...prev,
        { ...currentLine, completed: true },
      ]);
      setCurrentText("");
      setIsTyping(false);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setCurrentLineIndex((prev) => prev + 1);
    };

    typeCommand();
  }, [currentLineIndex]);

  return (
    <motion.div
      className="rounded-b-xl font-mono text-sm w-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Terminal header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-850 border-b border-gray-700 rounded-t-xl">
        <div className="flex items-center space-x-3">
          <Terminal className="h-5 w-5 text-green-400" />
          <span className="text-sm font-semibold text-green-400 select-none">
            portfolio.sh
          </span>
        </div>
        <div className="flex items-center space-x-2 text-gray-500">
          <button
            aria-label="Minimize"
            className="p-1 rounded hover:bg-gray-700 transition"
          >
            <Minus className="h-4 w-4" />
          </button>
          <button
            aria-label="Maximize"
            className="p-1 rounded hover:bg-gray-700 transition"
          >
            <Square className="h-4 w-4" />
          </button>
          <button
            aria-label="Close"
            className="p-1 rounded hover:bg-gray-700 transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Terminal content */}
      <div
        className="p-6 max-h-[520px] overflow-y-auto space-y-3 text-gray-300"
        style={{ scrollbarWidth: "thin" }}
      >
        {displayedLines.map((line, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center text-green-400 select-text">
              <span className="mr-3 font-semibold">$</span>
              <span className="font-semibold">{line.command}</span>
            </div>
            <pre className="whitespace-pre-wrap text-gray-300 leading-relaxed select-text">
              {line.output}
            </pre>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center text-green-400">
            <span className="mr-3 font-semibold">$</span>
            <span>{currentText}</span>
            <motion.span
              className="ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              aria-hidden="true"
            >
              ▊
            </motion.span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CodeTerminal;
