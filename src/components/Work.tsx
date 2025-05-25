"use client";

import { Timeline } from "./ui/timeline";
import { workData } from "@/constants";

const Work = () => {
  return (
    <section className="min-h-screen py-8 px-8 ">
      <Timeline data={workData} />
    </section>
  );
};

export default Work;
