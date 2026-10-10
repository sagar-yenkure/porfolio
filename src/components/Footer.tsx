"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { Footer } from "./ui/footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import info from "@/constants/info";
import link from "@/constants/links";
import { useTranslations } from "next-intl";

const FooterSection = () => {
  const t = useTranslations("Footer");
  const Nt = useTranslations("Navbar");

  const navItems = link.map((item) => ({
    ...item,
    label: Nt(item.label as string) || item.label,
  }));

  return (
    <motion.div
      className="w-full bg-[var(--section-bg)]"
    >
      <Footer
        logo={
          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.08,
            }}
          >
            <Code2 className="h-10 w-10" />
          </motion.div>
        }

        brandName={t("brandName")}

        socialLinks={[
          {
            icon: (
              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.12,
                  rotate: -5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <FaSquareXTwitter className="h-5 w-5" />
              </motion.div>
            ),
            href: info.twitter,
            label: t("social.twitter"),
          },

          {
            icon: (
              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.12,
                  rotate: 5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <FaGithub className="h-5 w-5" />
              </motion.div>
            ),
            href: info.github,
            label: t("social.github"),
          },

          {
            icon: (
              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.12,
                  rotate: -5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <FaLinkedin className="h-5 w-5" />
              </motion.div>
            ),
            href: info.linkedin,
            label: t("social.linkedin"),
          },
        ]}

        mainLinks={navItems}

        copyright={{
          text: `© ${new Date().getFullYear()} Sagar Yenkure`,
          license: t("copyright.license"),
        }}
      />
    </motion.div>
  );
};

export default FooterSection;