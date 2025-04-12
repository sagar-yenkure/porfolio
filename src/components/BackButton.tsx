"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      className="m-4 flex justify-around items-center gap-4"
      onClick={() => router.back()}
    >
      <ArrowLeft />
      Back
    </Button>
  );
};

export default BackButton;
