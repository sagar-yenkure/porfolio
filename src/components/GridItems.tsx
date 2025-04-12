"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useAnimate } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";

import {
  HighlighterItem,
  HighlightGroup,
  Particles,
} from "@/components/ui/highlighter";

import {
  IconBrandAws,
  IconBrandGithub,
  IconRocket,
  IconBrandDocker,
  IconBrandVercel,
} from "@tabler/icons-react";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiReactquery,
  SiMongodb,
  SiPostman,
  SiNodedotjs,
  SiExpress,
  SiMongoose,
  SiPrisma,
  SiGraphql,
  SiPostgresql,
  SiExpo,
} from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";

import { SiNetlify } from "react-icons/si";
import React, { useEffect } from "react";
import { ArrowRightIcon, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import info from "@/constants/info";
import { useRouter } from "next/navigation";
import BookingCal from "./BookingCal";

const SkeletonOne = () => {
  const skills = [
    // Languages
    { id: 1, name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { id: 2, name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },

    { id: 3, name: "React", icon: SiReact, color: "text-blue-500" },
    { id: 4, name: "Redux", icon: SiRedux, color: "text-purple-600" },
    { id: 6, name: "Next.js", icon: SiNextdotjs, color: "text-gray-800" },
    { id: 7, name: "Expo", icon: SiExpo, color: "text-black" },
    { id: 19, name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { id: 8, name: "Express.js", icon: SiExpress, color: "text-gray-700" },
    { id: 9, name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { id: 10, name: "Mongoose", icon: SiMongoose, color: "text-red-600" },
    { id: 11, name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },

    { id: 13, name: "Prisma", icon: SiPrisma, color: "text-indigo-500" },
    {
      id: 14,
      name: "TailwindCSS",
      icon: SiTailwindcss,
      color: "text-cyan-500",
    },
    { id: 5, name: "React Query", icon: SiReactquery, color: "text-pink-500" },
  ];

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <div className="h-full w-full rounded-lg bg-neutral-100 dark:bg-zinc-900 p-3">
        <div className="space-y-2 grid grid-cols-3 gap-3">
          {skills.map(({ id, name, icon: Icon, color }) => (
            <div key={id} className="flex items-center space-x-2">
              <Icon className={`h-4 w-4 ${color}`} />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const skills = [
    { id: 1, name: "AWS", icon: IconBrandAws },
    { id: 2, name: "CI/CD", icon: IconRocket },
    { id: 3, name: "Docker", icon: IconBrandDocker },
    { id: 4, name: "Actions", icon: IconBrandGithub },
    { id: 5, name: "Vercel", icon: IconBrandVercel },
    { id: 6, name: "Netlify", icon: SiNetlify },
    { id: 7, name: "Postman", icon: SiPostman },
    { id: 8, name: "Firebase", icon: SiFirebase },
    { id: 9, name: "Graphql", icon: SiGraphql },
  ];

  return (
    <motion.div className="flex flex-1 w-full h-full min-h-[7rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col">
      <div className="dark:bg-zinc-900 h-full rounded-lg p-3">
        <div className="grid grid-cols-3 gap-2">
          {skills.map(({ id, name, icon: Icon }) => (
            <div
              key={id}
              className="flex items-center space-x-2 bg-black rounded-lg h-full w-full p-3 px-4"
            >
              <Icon className="h-5 w-5 text-white" />
              <span className="text-xs text-white">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const SkeletonThree = () => {
  const router = useRouter();
  return (
    <div className="bg-white w-full flex flex-col justify-center min-h-[280px] dark:bg-black dark:text-white items-start relative group rounded-[20px]">
      <div className="p-6 w-full">
        {/* Blog Icon */}
        <div className="w-10 h-10 flex items-center justify-center absolute inset-x-0 top-0 ml-6 mt-4 text-blue-600 text-4xl">
          <FaRegNewspaper />
        </div>

        {/* Content */}
        <div className="mt-6 text-left w-full">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            See My Latest Blogs
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Check out my latest blogs on web, app development, and trending tech
            — full of tips, how-tos, and resources to level up your dev game.
          </p>
        </div>

        {/* Arrow Button */}

        <Button
          onClick={() => router.push("/blogs")}
          className="mt-4 flex items-center gap-2 hover:cursor-pointer rounded-full"
        >
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
};

const SkeletonFour = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#javascript", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#javascript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#react-js", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 210, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#react-js", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#typescript", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#typescript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#next-js", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#next-js", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      }
    );
  }, [animate]);
  return (
    <section className="relative max-w-7xl">
      <HighlightGroup className="group h-full">
        <div
          className="group/item h-full md:col-span-6 lg:col-span-12"
          data-aos="fade-down"
        >
          <HighlighterItem className="rounded-3xl">
            <div className="relative z-20 h-full overflow-hidden rounded-3xl  bg-white dark:border-slate-800 dark:bg-black">
              <Particles
                className="absolute inset-0 -z-10  transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                quantity={200}
                color={"#555550"}
                vy={-0.2}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                  <div
                    className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]"
                    ref={scope}
                  >
                    <div
                      id="next-js"
                      className="absolute bottom-12 left-14 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      AI Application
                    </div>
                    <div
                      id="react-js"
                      className="absolute left-10 top-20 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      Native Application
                    </div>
                    <div
                      id="typescript"
                      className="absolute bottom-20 right-1 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      Web Application
                    </div>
                    <div
                      id="javascript"
                      className="absolute right-10 top-10 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      Websites
                    </div>

                    <div id="pointer" className="absolute">
                      <svg
                        width="16.8"
                        height="18.2"
                        viewBox="0 0 12 13"
                        className="fill-red-500"
                        stroke="white"
                        strokeWidth="1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                        />
                      </svg>
                      <span className="relative -top-1 left-3 rounded-3xl px-2 py-1 text-xs text-white">
                        Sagar
                      </span>
                    </div>
                  </div>

                  <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                    <div className="flex flex-col items-center">
                      <h3 className="mt-6 pb-1 font-bold ">
                        <span className="text-2xl md:text-4xl">
                          Any questions about Development?
                        </span>
                      </h3>
                    </div>
                    <p className="mb-4 text-slate-400">
                      Feel free to reach out to me!
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <BookingCal />
                      <Link
                        href={`mailto:${info.mail}`}
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          })
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <Mail className="h-6 w-6" />
                        </span>
                      </Link>
                      <Link
                        href={`https://wa.me/${info.mail}`}
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          })
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <FaWhatsapp color="green" className="h-6 w-6" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
};

const SkeletonFive = () => {
  return (
    <motion.div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] p-2">
      <div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg p-6 w-full py-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Link
              href={`${info.github}`}
              target="_blank"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "icon",
                })
              )}
            >
              <span className="flex items-center gap-1">
                <IconBrandGithub className="h-8 w-8 text-neutral-700 dark:text-neutral-300" />
              </span>
            </Link>
            <div>
              <p className="text-sm font-medium">Code Writer</p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-300 dark:border-neutral-700 pt-4 h-full flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-xs">Open Source Contributions</span>
            <span className="text-xs font-semibold">5+</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs">Lines of Code Written</span>
            <span className="text-xs font-semibold">5K+</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs">GitHub Repositories</span>
            <span className="text-xs font-semibold">10+</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs">Currently Working On</span>
            <span className="text-xs font-semibold">SAAS Project</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const items = [
  {
    title: "Technical Expertise",
    description: (
      <span className="text-sm">
        Full-stack development with cutting-edge technologies and frameworks
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
  },
  {
    title: "Infrastructure & DevOps",
    description: (
      <span className="text-sm">
        Expertise in cloud architecture, scalable solutions, and CI/CD pipelines
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
  },
  {
    header: <SkeletonThree />,
    className: "md:col-span-1",
  },
  {
    header: <SkeletonFour />,
    className: "md:col-span-2",
  },
  {
    title: "Passion for Coding",
    description: (
      <span className="text-sm">
        Enthusiastic about writing clean, efficient code and contributing to
        open source
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
  },
];

export default items;
