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
  const [isHovered, setIsHovered] = useState(false);
  const totalSteps = project.images.length;
  const hasMultipleImages = totalSteps > 1;

  useEffect(() => {
    project.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [project.images]);

  const handleNext = () => {
    setStep((prevStep) =>
      prevStep + 1 < totalSteps ? prevStep + 1 : prevStep
    );
  };

  const handlePrev = () => {
    setStep((prevStep) => (prevStep - 1 >= 0 ? prevStep - 1 : prevStep));
  };

  const skillIcons = () =>
    project.skills?.map((SkillIcon: IconType, index: number) => {
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="group relative"
        >
          <div className="flex items-center p-2.5 bg-gray-100/10 dark:bg-zinc-900/50 rounded-lg hover:bg-gray-200/20 dark:hover:bg-zinc-800/70 transition-colors duration-300">
            <SkillIcon
              size={22}
              className={`transition-all duration-300 group-hover:scale-110`}
            />
          </div>
        </motion.div>
      );
    });

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card
        className="shadow-lg relative bg-white/5 overflow-hidden border border-gray-200/20 dark:border-zinc-800/50 backdrop-blur-sm h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className="space-y-2">
          <div className="space-y-2">
            <CardTitle className="flex items-center justify-between">
              <span>{project.title}</span>
              <div className="flex gap-2">
                {project.liveUrl && (
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Link href={project.liveUrl} target="_blank">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                      >
                        <ExternalLink size={16} />
                      </Button>
                    </Link>
                  </motion.div>
                )}
                {project.githubUrl && (
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Link href={project.githubUrl} target="_blank">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                      >
                        <FaGithub size={16} />
                      </Button>
                    </Link>
                  </motion.div>
                )}
              </div>
            </CardTitle>
            <CardDescription className="line-clamp-2 min-h-[40px]">
              {project.description}
            </CardDescription>
            <Badge variant="secondary" className="w-fit text-xs font-medium">
              {project.category}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 flex-1 flex flex-col">
          <motion.div
            className={`relative w-full ${
              project.category === "Mobile Application"
                ? "aspect-[9/16]"
                : "aspect-[16/9]"
            } overflow-hidden rounded-lg bg-gradient-to-br from-gray-100/5 to-gray-200/10 dark:from-zinc-800/50 dark:to-zinc-900/50`}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={project.images[step]}
                src={project.images[step]}
                alt={`${project.title} preview ${step + 1}`}
                className={`absolute w-full h-full rounded-lg transition-transform duration-300 ${
                  project.category === "Mobile Application"
                    ? "object-contain"
                    : "object-cover"
                } ${isHovered ? "scale-105" : "scale-100"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </motion.div>

          {hasMultipleImages && (
            <div className="flex justify-between items-center mt-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrev}
                disabled={step === 0}
                className="transition-all duration-200"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Prev
              </Button>

              <div className="flex space-x-1.5">
                {project.images.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                      index === step
                        ? "bg-primary"
                        : "bg-gray-300 dark:bg-zinc-700"
                    }`}
                    animate={{
                      scale: index === step ? 1.3 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={handleNext}
                disabled={step === totalSteps - 1}
                className="transition-all duration-200"
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          <div className="flex flex-wrap gap-2.5 pt-4">{skillIcons()}</div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
