import { Code2 } from "lucide-react";
import { Footer } from "./ui/footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import info from "@/constants/info";
import link from "@/constants/links";

const FooterSection = () => {
  return (
    <div className="w-full">
      <Footer
        logo={<Code2 className="h-10 w-10" />}
        brandName="Sagar Yenkure's Portfolio"
        socialLinks={[
          {
            icon: <FaSquareXTwitter className="h-5 w-5" />,
            href: info.twitter,
            label: "Twitter",
          },
          {
            icon: <FaGithub className="h-5 w-5" />,
            href: info.github,
            label: "GitHub",
          },
          {
            icon: <FaLinkedin className="h-5 w-5" />,
            href: info.linkedin,
            label: "GitHub",
          },
        ]}
        mainLinks={link}
        copyright={{
          text: `© ${new Date().getFullYear()} Sagar Yenkure`,
          license: "All rights reserved",
        }}
      />
    </div>
  );
};
export default FooterSection;
