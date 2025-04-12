import AdminContactUs from "./AdminContactUs";
import BlogNotificationEmail from "./BlogNotificationEmail";
import { ContactUsEmail } from "./ContactUsEmail";
import { SubscriptionEmail } from "./SubscriptionEmail";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getEmailComponent = (type: string, email: string, data: any) => {
  switch (type) {
    case "subscription":
      return <SubscriptionEmail email={email} />;
    case "contactUs":
      return <ContactUsEmail email={email} />;
    case "contactUsAdmin":
      return <AdminContactUs data={data} />;
    case "blogNotification":
      return <BlogNotificationEmail data={data} />;

    default:
      throw new Error("Invalid email type");
  }
};
