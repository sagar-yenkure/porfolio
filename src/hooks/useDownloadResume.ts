/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useCallback } from "react";

const useDownloadResume = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);

  const downloadResume = useCallback(() => {
    setIsLoading(true);
    try {
      if (!url) throw new Error("Resume is not available at this moment");

      const link = document.createElement("a");
      link.href = url;
      link.download = "Sagar_yenkure_Resume.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error: any) {
      console.error("Failed to download resume:", error.message);
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
