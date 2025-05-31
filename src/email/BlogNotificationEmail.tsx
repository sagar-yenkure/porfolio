import React from "react";

const BlogNotificationEmail = ({ data }: { data: unknown }) => {
  return <div>{data ? "BlogNotificationEmail" : "blog"}</div>;
};

export default BlogNotificationEmail;
