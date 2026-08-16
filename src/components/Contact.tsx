"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { useState } from "react";
import sendmail from "@/actions/sendmail";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

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
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    try {
      await sendmail(
        values,
        values.email,
        "Thanks for contacting me!",
        "contactUs"
      );

      await sendmail(
        values,
        "yenkuresagar2104@gmail.com",
        "New message from contact form",
        "contactUsAdmin"
      );

      toast("Message Sent", {
        description:
          "Thanks for reaching out! I've received your message and will get back to you shortly.",
      });

      form.reset();
    } catch {
      toast("Something went wrong", {
        description:
          "Oops! Failed to send your message. Please try again in a moment.",
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
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.08, 0.14, 0.08],
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

        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.04, 0.08, 0.04],
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

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
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

      {/* Main container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
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
        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <motion.div variants={leftVariants} className="max-w-xl">
          {/* Small heading */}


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
            Let&apos;s build
            <br />
            <span className="text-muted-foreground/40">
              something together.
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
            Have a project in mind, an idea you want to explore, or simply
            want to talk about development? Feel free to reach out.
          </p>
        </motion.div>

        {/* =====================================================
            RIGHT SIDE — FORM
        ===================================================== */}

        <motion.div
          variants={formVariants}
          whileHover={{
            y: -4,
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
            {/* Top line */}
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
                  Send a message
                </p>

                <h3 className="mt-1 text-lg font-medium tracking-tight text-foreground">
                  Tell me about your idea
                </h3>
              </div>


            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-medium text-foreground">
                        Name
                      </FormLabel>

                      <FormControl>
                        <Input
                          placeholder="Your name"
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

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-medium text-foreground">
                        Email
                      </FormLabel>

                      <FormControl>
                        <Input
                          placeholder="your.email@example.com"
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

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-medium text-foreground">
                        Message
                      </FormLabel>

                      <FormControl>
                        <Textarea
                          placeholder="What would you like to discuss?"
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

                {/* Submit */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    aria-label="Send Message"
                    type="submit"
                    disabled={loading}
                    className="
                      group
                      mt-2
                      h-11
                      w-full
                      rounded-xl
                      bg-primary
                      text-primary-foreground
                      font-semibold
                      shadow-md
                      hover:bg-primary/90
                      transition-all
                      duration-300
                    "
                  >
                    <span className="mr-2">
                      {loading ? "Sending..." : "Send Message"}
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