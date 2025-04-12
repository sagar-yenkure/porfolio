import * as React from "react";

export interface AdminContactUsEmailProps {
  data: {
    email: string;
    name: string;
    message: string;
  };
}

const AdminContactUsEmail: React.FC<AdminContactUsEmailProps> = ({ data }) => {
  const { email, message, name } = data;
  return (
    <div className="max-w-xl mx-auto p-6 border border-gray-200 rounded-lg bg-white font-sans">
      <h1 className="text-xl font-bold text-gray-900">
        New Contact Form Submission
      </h1>

      <div className="mt-4 space-y-2 text-gray-700 text-sm">
        <p>
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p>
          <span className="font-semibold">Message:</span>
        </p>
        <div className="bg-gray-50 border border-gray-200 p-3 rounded text-gray-800 whitespace-pre-line">
          {message}
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-6">— Sagar Yenkure Portfolio</p>
    </div>
  );
};

export default AdminContactUsEmail;
