"use server";

import { redis } from "@/lib/redis";
import sendmail from "./sendmail";

const subscribe = async (email: string) => {
  try {
    const isAlreadySubscribed = await redis.sismember(
      "subscribed_emails",
      email
    );

    // to get all subscribed members email
    // const emails = await redis.smembers("subscribed_emails");

    if (isAlreadySubscribed) throw new Error("Email is already subscribed");

    await redis.sadd("subscribed_emails", email);
    await sendmail({}, email, "Thanks for subscribing", "subscription");
  } catch (error: any) {
    throw new Error(
      "Failed to subscribe. Please try again later.",
      error?.message
    );
  }
};

export default subscribe;
