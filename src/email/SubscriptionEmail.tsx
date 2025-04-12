import * as React from "react";

interface SubscriptionEmailProps {
  email: string;
}

export const SubscriptionEmail: React.FC<SubscriptionEmailProps> = ({
  email,
}) => (
  <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl p-6 font-sans">
    <h1 className="text-2xl font-bold text-gray-800">
      You&apos;re officially on the list! 🎉
    </h1>

    <p className="text-base text-gray-700 mt-4">Hi {email},</p>

    <p className="text-base text-gray-700 mt-2">
      Thanks for subscribing to my blog newsletter! You&apos;ll now get the
      latest blog posts, project updates, and behind-the-scenes content —
      directly to your inbox.
    </p>

    <p className="text-sm text-gray-500 mt-4">
      If you ever wish to unsubscribe or manage your preferences, you&apos;ll
      find the link in the footer of every email.
    </p>

    <hr className="my-6 border-gray-200" />

    <p className="text-sm text-gray-400">— Sagar Yenkure</p>
  </div>
);
