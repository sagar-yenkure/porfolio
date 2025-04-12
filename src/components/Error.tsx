import React from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServerErrorPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <AlertTriangle className="mb-6 h-12 w-12 text-red-500" />
      <h1 className="text-2xl font-bold md:text-4xl">Something went wrong</h1>
      <p className="mt-4 text-muted-foreground max-w-md">
        We&apos;re experiencing a server issue with blogs. Please try refreshing
        the page or come back later.
      </p>
      <div className="mt-6 flex gap-4">
        <Link href="/" className="hover:cursor-pointer">
          <Button variant="outline">Go Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ServerErrorPage;
