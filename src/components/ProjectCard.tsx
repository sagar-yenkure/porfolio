"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/constants/Projects";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { IconType } from "react-icons/lib";

const ProjectCard = ({ project }: { project: Project }) => {
  const [step, setStep] = useState(0);
  const totalSteps = project.images.length;
  const hasMultipleImages = totalSteps > 1;

  // Preload all images
  useEffect(() => {
    project.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [project.images]);

  const handleNext = () => {
    setStep((prevStep) => {
      const nextStep = prevStep + 1;
      if (nextStep < totalSteps) {
        return nextStep;
      }
      return prevStep;
    });
  };

  const handlePrev = () => {
    setStep((prevStep) => {
      const prev = prevStep - 1;
      if (prev >= 0) {
        return prev;
      }
      return prevStep;
    });
  };

  const skillIcons = () =>
    project.skills?.map((SkillIcon: IconType, index: number) => (
      <div
        key={index}
        className="flex items-center p-2 bg-gray-100 dark:bg-zinc-900 rounded-md"
      >
        <SkillIcon size={20} className="text-primary" />
      </div>
    ));

  return (
    <Card className="shadow-lg relative dark:bg-zinc-900">
      <CardHeader className="flex gap-2 justify-between items-center">
        <div className="space-y-2">
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
          <Badge className="text-xs px-3 py-1 mt-3">{project.category}</Badge>
        </div>
        <div className="flex gap-2 items-center">
          {project.liveUrl && (
            <Link href={project.liveUrl} className="hover:cursor-pointer">
              <ExternalLink size={18} />
            </Link>
          )}
          {project.githubUrl && (
            <Link href={project.githubUrl} className="hover:cursor-pointer">
              <FaGithub size={18} />
            </Link>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div
          className={`relative w-full ${
            project.category === "Mobile Application"
              ? "aspect-[9/16]"
              : "aspect-[16/9]"
          } overflow-hidden flex justify-center items-center bg-zinc-100 dark:bg-zinc-800 rounded-lg`}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={project.images[step]}
              src={project.images[step]}
              alt={`Step ${step + 1}`}
              className={`absolute w-full h-full rounded-lg transition duration-200 ${
                project.category === "Mobile Application"
                  ? "object-contain"
                  : "object-fit"
              }`}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                transition: "filter 0.3s ease",
              }}
            />
          </AnimatePresence>
        </div>

        {/* Navigation buttons and dots */}
        {hasMultipleImages && (
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={step === 0}
            >
              <ArrowLeft className="mr-2" size={16} /> Prev
            </Button>

            <div className="flex space-x-1.5">
              {project.images.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === step ? "bg-primary" : "bg-gray-300"
                  }`}
                  animate={{ scale: index === step ? 1.3 : 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={handleNext}
              disabled={step === totalSteps - 1}
            >
              Next <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        )}

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-4">{skillIcons()}</div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
