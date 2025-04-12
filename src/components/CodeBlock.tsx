"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";

export default function CodeBlock({
  code,
  language = "tsx",
}: {
  code: string;
  language?: string;
}) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 1000);
    } catch (error) {
      console.log(error);
      toast("Error while copying code, please try again.", {
        style: {
          background: "red",
          color: "black",
        },
      });
    }
  };

  return (
    <div className="relative rounded-lg overflow-hidden shadow-xl bg-[#181818] mt-6 p-4 border border-transparent hover:border-gray-700 transition-all">
      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopyCode}
          className="hover:bg-gray-800 rounded-md p-2 transition-colors duration-200 hover:cursor-pointer"
        >
          {copiedCode ? (
            <Check className="h-5 w-5 text-green-500" />
          ) : (
            <Copy className="h-5 w-5 text-gray-400" />
          )}
        </Button>
      </div>

      <SyntaxHighlighter
        language={language}
        style={dracula}
        customStyle={{
          backgroundColor: "#181818",
          borderRadius: "8px",
          padding: "20px",
          fontSize: "14px",
          lineHeight: "1.5",
          overflow: "auto",
        }}
        PreTag="div"
      >
        {code}
      </SyntaxHighlighter>

      {/* Tooltip */}
      <div
        className={`absolute bottom-2 right-3 text-sm ${
          copiedCode ? "text-green-500" : "text-gray-400"
        } transition-all`}
      >
        {copiedCode ? "Copied!" : "Click to Copy"}
      </div>
    </div>
  );
}
