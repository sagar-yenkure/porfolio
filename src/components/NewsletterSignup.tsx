/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import sendmail from "@/actions/sendmail";
import { Loader } from "lucide-react";
import { toast } from "sonner";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const subscribeHandle = async () => {
    setLoading(true);
    try {
      await sendmail({}, email, "Thanks for subscribing", "subscription");

      toast("Subscription Successful", {
        description:
          "You're now subscribed! Check your inbox for confirmation.",
      });

      setEmail("");
    } catch (error: any) {
      console.error(error);
      toast(error.message, {
        style: {
          background: "red",
          color: "black",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6 dark:bg-zinc-900 rounded-2xl shadow-md text-center">
      <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        Subscribe to Newsletter
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Get the latest blog updates delivered to your inbox.
      </p>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter your email"
        className="w-full px-3 py-2 mt-3 text-sm border rounded-md dark:bg-gray-800 dark:text-gray-200"
      />
      <Button
        disabled={!email || loading}
        onClick={subscribeHandle}
        className="mt-3 w-full flex items-center justify-center gap-2 hover:cursor-pointer"
      >
        {loading ? <Loader size={18} color="#fff" /> : "Subscribe"}
      </Button>
    </Card>
  );
};

export default NewsletterSignup;
