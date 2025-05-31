"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Testimonial } from "@/constants/testimonials";
import { QuoteIcon } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  variant: "primary" | "secondary";
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="w-[300px] md:w-[390px] flex-shrink-0"
    >
      <Card className="h-full overflow-hidden backdrop-blur-sm bg-white/5 border-border/80">
        <CardContent className="p-6">
          {/* Quote Icon */}
          <QuoteIcon className="w-8 h-8 mb-4 text-primary opacity-20" />

          {/* Message */}
          <p className="text-sm md:text-base mb-6 text-foreground/80">
            &quot;{testimonial.message}&quot;
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-offset-2 ring-offset-background ring-border">
              <Image
                src={testimonial.url}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-semibold text-foreground">
                {testimonial.name}
              </span>
              <div className="flex flex-col text-sm">
                <span>{testimonial.role}</span>
                <span>{testimonial.company}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
