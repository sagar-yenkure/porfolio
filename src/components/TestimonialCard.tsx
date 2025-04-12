"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Testimonial } from "@/constants/testimonials";

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  return (
    <motion.div
      key={testimonial.id}
      initial={{ opacity: 0, y: 50, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="shadow-lg dark:bg-zinc-900 p-6">
        <CardContent className="flex flex-col items-center text-center space-y-4">
          {/* Avatar with Animation */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-24 h-24 rounded-full overflow-hidden"
          >
            <Image
              src={testimonial.url}
              alt={testimonial.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Name & Role */}
          <div className="mt-3">
            <span className="text-md font-semibold text-black dark:text-white">
              {testimonial.name}
            </span>
            <p className="text-sm text-primary">{testimonial.role}</p>
          </div>

          {/* Message / Feedback */}
          <motion.p className="text-sm text-gray-600 dark:text-gray-300 italic px-4">
            &quot;{testimonial.message}&quot;
          </motion.p>

          {/* Company & Designation */}
          <div>
            <span className="text-xs text-neutral-600">
              {testimonial.company}
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
