import * as React from "react";

interface SubscriptionEmailProps {
  email: string;
}

export const ContactUsEmail: React.FC<SubscriptionEmailProps> = ({ email }) => (
  <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl p-6 font-sans">
    <h1 className="text-2xl font-bold text-gray-800">
      Thanks for reaching out!
    </h1>

    <p className="text-base text-gray-700 mt-4">Hi {email},</p>

    <p className="text-base text-gray-700 mt-2">
      Thanks for contacting me! I&apos;ve received your message and will get
      back to you shortly.
    </p>

    <p className="text-base text-gray-700 mt-2">
      In the meantime, if you&apos;d like to connect directly, you can book a
      meeting using the link below:
    </p>

    <div className="mt-6 mb-4">
      <a
        href={`${process.env.HOST_URL}/meet`}
        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors"
      >
        Book a Meeting
      </a>
    </div>

    <p className="text-sm text-gray-500 mt-6">— Sagar Yenkure</p>
  </div>
);
