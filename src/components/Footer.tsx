"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { Footer } from "./ui/footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import info from "@/constants/info";
import link from "@/constants/links";

const FooterSection = () => {
  return (
    <motion.div
      className="w-full bg-[var(--section-bg)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Footer
        logo={
          <motion.div
            initial={{ rotate: -20, scale: 0.8 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 180,
            }}
            whileHover={{
              rotate: 8,
              scale: 1.08,
            }}
          >
            <Code2 className="h-10 w-10" />
          </motion.div>
        }
        brandName="Sagar Yenkure's Portfolio"
        socialLinks={[
          {
            icon: (
              <motion.div
                whileHover={{ y: -3, scale: 1.12, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaSquareXTwitter className="h-5 w-5" />
              </motion.div>
            ),
            href: info.twitter,
            label: "Twitter",
          },
          {
            icon: (
              <motion.div
                whileHover={{ y: -3, scale: 1.12, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaGithub className="h-5 w-5" />
              </motion.div>
            ),
            href: info.github,
            label: "GitHub",
          },
          {
            icon: (
              <motion.div
                whileHover={{ y: -3, scale: 1.12, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLinkedin className="h-5 w-5" />
              </motion.div>
            ),
            href: info.linkedin,
            label: "LinkedIn",
          },
        ]}
        mainLinks={link}
        copyright={{
          text: `© ${new Date().getFullYear()} Sagar Yenkure`,
          license: "All rights reserved",
        }}
      />
    </motion.div>
  );
};

export default FooterSection;