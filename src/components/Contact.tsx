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

export default function Contact() {
  const [loading, setLoading] = useState<boolean>(false);

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
      // Send email to the user
      await sendmail(
        values,
        values.email,
        "Thanks for contacting me!",
        "contactUs"
      );

      toast("Message Sent", {
        description:
          "Thanks for reaching out! I've received your message and will get back to you shortly.",
      });

      form.reset();
    } catch (error) {
      console.error(error);
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
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center py-24 px-4 bg-gradient-to-b from-background to-background/80"
    >
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6 ml-2"
          >
            <div className="inline-block">
              <div className="h-1 w-12 bg-primary mb-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Let&apos;s connect
            </h2>
            <p className="text-muted-foreground max-w-md text-base">
              Have questions or ideas? I&apos;m always open to discussing new
              projects, creative ideas, or opportunities to be part of your
              vision.
            </p>

            <div className="pt-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center space-x-2 text-muted-foreground"
              >
                <div className="h-1 w-5 bg-primary/50" />
                <span>Quick response, always</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="dark:bg-zinc-900 border border-border/40 rounded-lg p-8 shadow-sm"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          {...field}
                          className="bg-background/50 border-border/50 focus-visible:ring-primary/20"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your.email@example.com"
                          {...field}
                          className="bg-background/50 border-border/50 focus-visible:ring-primary/20"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What would you like to discuss?"
                          className="min-h-[120px] bg-background/50 border-border/50 focus-visible:ring-primary/20 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full mt-2 group transition-all duration-300"
                  disabled={loading}
                >
                  <span className="mr-2">
                    {loading ? "Sending..." : "Send Message"}
                  </span>
                  <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
