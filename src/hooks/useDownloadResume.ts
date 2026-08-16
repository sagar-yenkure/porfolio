"use client";

import { useState, useCallback } from "react";
import { toast } from "sonner";

const useDownloadResume = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);

  const downloadResume = useCallback(async () => {
    if (!url) {
      toast.error("Resume is not available at this moment");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch resume");
      }

      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Sagar_Yenkure_Resume.pdf";

      document.body.appendChild(link);
      link.click();
      link.remove();

      // Clean up
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Resume download failed:", error);

      toast.error("Failed to download resume. Please try again.", {
        style: {
          background: "red",
          color: "white",
        },
      });
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return {
    isLoading,
    downloadResume,
  };
};

export default useDownloadResume;