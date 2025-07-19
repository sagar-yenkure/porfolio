"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useAnimate } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";

import {
  HighlighterItem,
  HighlightGroup,
  Particles,
} from "@/components/ui/highlighter";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import React, { useEffect } from "react";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import info from "@/constants/info";
import BookingCal from "./BookingCal";
import { FaXTwitter } from "react-icons/fa6";

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
    <section className="relative max-w-9xl px-4 md:px-8 py-8 rounded-2xl">
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

                  <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[410px]">
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
                        aria-label="Connect via Mail"
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
                        aria-label="Connect via WhatsApp"
                        href={`https://wa.me/${info.whatsApp}`}
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          })
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <FaWhatsapp className="h-6 w-6" />
                        </span>
                      </Link>
                      <Link
                        aria-label="Connect via X"
                        href={info.twitter}
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          })
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <FaXTwitter className="h-6 w-6" />
                        </span>
                      </Link>
                      <Link
                        aria-label="Connect via LinkedIn"
                        href={info.linkedin}
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          })
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <FaLinkedin className="h-6 w-6" />
                        </span>
                      </Link>
                      <Link
                        aria-label="Connect via GitHub"
                        href={info.github}
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          })
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <FaGithub className="h-6 w-6" />
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

export default SkeletonFour;
