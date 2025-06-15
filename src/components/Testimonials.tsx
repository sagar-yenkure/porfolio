"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { Testimonial, testimonials } from "@/constants/testimonials";

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Split testimonials into two groups
  const firstHalf = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondHalf = testimonials.slice(Math.ceil(testimonials.length / 2));

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="py-8 md:px-8 px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 py-6"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          What People Are Saying
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Hear from those who have worked with me and experienced my expertise
          first-hand.
        </p>
      </motion.div>

      {/* First Row - Scrolling Left */}
      <div className="mb-8">
        <motion.div style={{ x }} className="flex gap-6 w-fit">
          {firstHalf.map((testimonial: Testimonial, index: number) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
              variant="primary"
            />
          ))}
          {/* Duplicate first half for infinite scroll effect */}
          {firstHalf.map((testimonial: Testimonial, index: number) => (
            <TestimonialCard
              key={`duplicate-${index}`}
              testimonial={testimonial}
              index={index}
              variant="primary"
            />
          ))}
        </motion.div>
      </div>

      {/* Second Row - Scrolling Right */}
      <div>
        <motion.div
          style={{ x: useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]) }}
          className="flex gap-6 w-fit"
        >
          {secondHalf.map((testimonial: Testimonial, index: number) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
              variant="secondary"
            />
          ))}
          {/* Duplicate second half for infinite scroll effect */}
          {secondHalf.map((testimonial: Testimonial, index: number) => (
            <TestimonialCard
              key={`duplicate-${index}`}
              testimonial={testimonial}
              index={index}
              variant="secondary"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
