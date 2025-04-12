"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "./ui/button";

const BookingCal = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "sagar-yenkure" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <section className="w-fit h-full">
      <Button
        className="hover:cursor-pointer"
        variant="default"
        data-cal-namespace="sagar-yenkure"
        data-cal-link="sagar-yenkure/sagar-yenkure"
        data-cal-config='{"layout":"month_view"}'
      >
        Book a Meeting
      </Button>
    </section>
  );
};

export default BookingCal;
