"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function MeetPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "sagar-yenkure" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section>
      <div className="max-w-7xl mx-auto py-24 px-4 md:px-8 lg:px-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-black dark:text-white max-w-4xl leading-tight">
          Let&apos;s connect — book a one-on-one meeting
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-2xl">
          Whether it&apos;s to talk tech, explore collaboration, or just connect
          — I&apos;m available for a quick chat. Pick a time that works best for
          you below.
        </p>
      </div>

      <Cal
        namespace="sagar-yenkure"
        calLink="sagar-yenkure/sagar-yenkure"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </section>
  );
}
