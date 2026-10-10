"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import sendmail from "@/actions/sendmail";
import { toast } from "sonner";

/* ============================================================
   ANIMATION VARIANTS
============================================================ */

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const leftVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const formVariants = {
  hidden: {
    opacity: 0,
    x: 50,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


export default function Contact() {
  const t = useTranslations("Contact");

  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t("form.name.required"),
    }),

    email: z.string().email({
      message: t("form.email.invalid"),
    }),

    message: z.string().min(10, {
      message: t("form.message.required"),
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  /* ============================================================
     SUBMIT
  ============================================================ */

  async function onSubmit(
    values: z.infer<typeof formSchema>
  ) {
    setLoading(true);

    try {
      /* Send email to user */

      await sendmail(
        values,
        values.email,
        "Thanks for contacting me!",
        "contactUs"
      );

      /* Send email to admin */

      await sendmail(
        values,
        "yenkuresagar2104@gmail.com",
        "New message from contact form",
        "contactUsAdmin"
      );

      /* Success toast */

      toast(t("toast.successTitle"), {
        description: t("toast.successDescription"),
      });

      /* Reset form */

      form.reset();
    } catch {
      /* Error toast */

      toast(t("toast.errorTitle"), {
        description: t("toast.errorDescription"),

        style: {
          background: "red",
          color: "white",
        },
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="
        relative
        w-full
        overflow-hidden
        bg-[var(--section-bg)]
        px-4
        section-container
        md:px-8
      "
    >
      {/* ====================================================
          BACKGROUND EFFECTS
      ==================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main glow */}

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.06, 0.1, 0.06],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[15%]
            top-1/2
            h-[450px]
            w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.06]
            blur-[140px]
          "
        />

        {/* Secondary glow */}

        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[10%]
            top-[25%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-purple-500/[0.05]
            blur-[120px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,.2) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,.2) 1px,
                transparent 1px
              )
            `,

            backgroundSize: "70px 70px",

            maskImage:
              "radial-gradient(circle at center, black, transparent 75%)",

            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 75%)",
          }}
        />
      </div>

      {/* ====================================================
          MAIN CONTAINER
      ==================================================== */}

      <motion.div
        variants={containerVariants}
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          items-center
          gap-14
          md:grid-cols-2
          md:gap-20
        "
      >
        {/* ==================================================
            LEFT SIDE
        ================================================== */}

        <motion.div
          variants={leftVariants}
          className="max-w-xl"
        >
          {/* Main heading */}

          <h2
            className="
              text-4xl
              font-bold
              leading-[0.95]
              tracking-[-0.055em]
              text-foreground

              md:text-5xl

              lg:text-6xl
            "
          >
            {t("heading")}
            <br />

            <span className="text-muted-foreground/40">
              {t("headingHighlight")}
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-7
              max-w-lg
              text-sm
              leading-7
              text-muted-foreground

              md:text-base
            "
          >
            {t("description")}
          </p>
        </motion.div>

        {/* ==================================================
            RIGHT SIDE — FORM
        ================================================== */}

        <motion.div
          variants={formVariants}
          whileHover={{
            y: -2,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="relative"
        >
          {/* Form glow */}

          <div
            className="
              pointer-events-none
              absolute
              -inset-1
              rounded-[26px]
              bg-gradient-to-r
              from-primary/[0.08]
              via-transparent
              to-purple-500/[0.06]
              blur-xl
            "
          />

          {/* Form container */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-border
              bg-card
              text-card-foreground
              p-6
              shadow-2xl

              md:p-8
            "
          >
            {/* ==================================================
                FORM HEADER
            ================================================== */}

            <div className="mb-7 flex items-center justify-between">
              <div>
                <p
                  className="
                    text-[14px]
                    uppercase
                    tracking-[0.2em]
                    text-muted-foreground
                  "
                >
                  {t("form.eyebrow")}
                </p>

                <h3
                  className="
                    mt-1
                    text-lg
                    font-medium
                    tracking-tight
                    text-foreground
                  "
                >
                  {t("form.title")}
                </h3>
              </div>
            </div>

            {/* ==================================================
                FORM
            ================================================== */}

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* ==================================================
                    NAME
                ================================================== */}

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className="
                          text-xs
                          font-medium
                          text-foreground
                        "
                      >
                        {t("form.name.label")}
                      </FormLabel>

                      <FormControl>
                        <Input
                          placeholder={t(
                            "form.name.placeholder"
                          )}
                          {...field}
                          className="
                            mt-1
                            h-11
                            border-border
                            bg-background
                            text-foreground
                            placeholder:text-muted-foreground/60
                            transition-all
                            duration-300
                            focus-visible:border-primary
                            focus-visible:ring-primary/20
                          "
                        />
                      </FormControl>

                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* ==================================================
                    EMAIL
                ================================================== */}

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className="
                          text-xs
                          font-medium
                          text-foreground
                        "
                      >
                        {t("form.email.label")}
                      </FormLabel>

                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t(
                            "form.email.placeholder"
                          )}
                          {...field}
                          className="
                            mt-1
                            h-11
                            border-border
                            bg-background
                            text-foreground
                            placeholder:text-muted-foreground/60
                            transition-all
                            duration-300
                            focus-visible:border-primary
                            focus-visible:ring-primary/20
                          "
                        />
                      </FormControl>

                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* ==================================================
                    MESSAGE
                ================================================== */}

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className="
                          text-xs
                          font-medium
                          text-foreground
                        "
                      >
                        {t("form.message.label")}
                      </FormLabel>

                      <FormControl>
                        <Textarea
                          placeholder={t(
                            "form.message.placeholder"
                          )}
                          {...field}
                          className="
                            mt-1
                            min-h-[130px]
                            resize-none
                            border-border
                            bg-background
                            text-foreground
                            placeholder:text-muted-foreground/60
                            transition-all
                            duration-300
                            focus-visible:border-primary
                            focus-visible:ring-primary/20
                          "
                        />
                      </FormControl>

                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* ==================================================
                    SUBMIT BUTTON
                ================================================== */}

                <motion.div
                  whileHover={{
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <Button
                    aria-label={t("form.submit")}
                    type="submit"
                    disabled={loading}
                    className="
                      group
                      mt-2
                      h-11
                      w-full
                      rounded-xl
                      bg-primary
                      font-semibold
                      text-primary-foreground
                      shadow-md
                      transition-all
                      duration-300
                      hover:bg-primary/90
                    "
                  >
                    <span className="mr-2">
                      {loading
                        ? t("form.sending")
                        : t("form.submit")}
                    </span>

                    <Send
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </Button>
                </motion.div>
              </form>
            </Form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}