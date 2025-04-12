import { BASE } from "@/lib/cloudinary";
import { IconType } from "react-icons/lib";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRazorpay,
  SiDocker,
  SiVercel,
  SiPrisma,
  SiMongodb,
  SiRedis,
  SiExpo,
  SiOpenai,
} from "react-icons/si";
import { SiAuth0 } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiSupabase } from "react-icons/si";

export type ProjectCategory =
  | "Web Application"
  | "Mobile Application"
  | "Desktop Application";

export interface Project {
  title: string;
  description: string;
  images: string[];
  liveUrl: string;
  category: ProjectCategory;
  githubUrl: string;
  skills: IconType[];
}

export const projectsList: Project[] = [
  {
    title: "Portfolio",
    description:
      "A personal portfolio website showcasing my skills, featured projects, and experience. Built to demonstrate my expertise in modern frontend development with seamless deployment and fast performance using Vercel.",
    images: [
      `${BASE}/v1744466691/projects/Screenshot_2025-04-12_193105_odljfe.png`,
      `${BASE}/v1744466691/projects/Screenshot_2025-04-12_193137_xcup7k.png`,
      `${BASE}/v1744466693/projects/Screenshot_2025-04-12_193256_db63ck.png`,
      `${BASE}/v1744466693/projects/Screenshot_2025-04-12_193226_bxh7o0.png`,
    ],
    category: "Web Application",
    liveUrl: "https://sagaryenkure.pro",
    githubUrl: "https://github.com/sagar-yenkure/porfolio",
    skills: [
      SiNextdotjs,
      SiReact,
      SiTypescript,
      SiTailwindcss,
      SiRedis,
      SiVercel,
    ],
  },
  {
    title: "Lightroom",
    description:
      "A comprehensive image licensing and purchasing platform featuring secure authentication, image uploads, payment gateway integration, and email notifications. Built with a modern tech stack and containerized using Docker.",
    images: [
      `${BASE}/v1743841196/projects/Screenshot_2025-03-01_183450_dmsdn3.png`,
      `${BASE}/v1743841195/projects/Screenshot_2025-03-01_183515_xveneb.png`,
      `${BASE}/v1743841164/projects/Screenshot_2025-03-01_183537_alkfn5.png`,
      `${BASE}/v1743841140/projects/Screenshot_2025-03-01_183929_ecrsdc.png`,
      `${BASE}/v1743841126/projects/Screenshot_2025-03-01_183652_p9t23v.png`,
    ],
    category: "Web Application",
    liveUrl: "https://lightroom-seven.vercel.app/",
    githubUrl: "https://github.com/sagar-yenkure/Lightroom",
    skills: [
      SiNextdotjs,
      SiReact,
      SiTypescript,
      SiTailwindcss,
      SiPrisma,
      SiMongodb,
      SiAuth0,
      SiRazorpay,
      SiDocker,
      SiVercel,
    ],
  },
  {
    title: "IntelliicPDF",
    description:
      "An AI-powered PDF extractor that intelligently pulls structured insights from documents using OpenAI. This tool helps users extract content with ease, making document analysis faster and more efficient.",
    images: [
      `${BASE}/v1744003437/projects/ujvktjqwhcbblyjnq3wl.png`,
      `${BASE}/v1744003437/projects/emhk2swubzvbhzwpgwhn.png`,
      `${BASE}/v1744003437/projects/a7rdzzc8xu36tyr6gimi.png`,
      `${BASE}/v1744003436/projects/djoapblz9n0qqwrfuri6.png`,
    ],
    category: "Web Application",
    liveUrl: "https://intellic-pdf.vercel.app/",
    githubUrl: "https://github.com/sagar-yenkure/intellicPDF",
    skills: [
      SiNextdotjs,
      SiReact,
      SiTypescript,
      SiTailwindcss,
      SiShadcnui,
      SiOpenai,
      SiAuth0,
      SiPrisma,
      SiMongodb,
      SiRazorpay,
      SiVercel,
    ],
  },
  {
    title: "MeTube",
    description:
      "A YouTube-inspired mobile video streaming app built using Expo and Supabase. Supports real-time content delivery and dynamic video rendering with Tailwind styling for a polished UI.",
    images: [
      `${BASE}/v1743940691/projects/WhatsApp_Image_2025-04-06_at_5.01.02_PM_1_gzyhu5.jpg`,
      `${BASE}/v1743940691/projects/WhatsApp_Image_2025-04-06_at_5.01.01_PM_igtwvz.jpg`,
      `${BASE}/v1743940691/projects/WhatsApp_Image_2025-04-06_at_5.01.03_PM_q7ys4p.jpg`,
      `${BASE}/v1743940691/projects/WhatsApp_Image_2025-04-06_at_5.01.02_PM_nrcl8s.jpg`,
    ],
    category: "Mobile Application",
    liveUrl: "",
    githubUrl: "https://github.com/sagar-yenkure/expo_meTube",
    skills: [SiExpo, SiTailwindcss, SiSupabase],
  },
  {
    title: "SnapWalls",
    description:
      "A sleek wallpaper discovery and download mobile app designed with Expo and powered by Supabase. Offers a minimal UI for browsing high-quality wallpapers with fast load times.",
    images: [
      `${BASE}/v1744001926/projects/Screenshot_20250407-101847_btiz1l.png`,
      `${BASE}/v1744001927/projects/Screenshot_20250407-101957_fhmtoa.png`,
      `${BASE}/v1744001926/projects/Screenshot_20250407-102002_crh58f.png`,
      `${BASE}/v1744001925/projects/Screenshot_20250407-101952_sp51vc.png`,
      `${BASE}/v1744001925/projects/Screenshot_20250407-101926_r83h4g.png`,
    ],
    category: "Mobile Application",
    liveUrl: "",
    githubUrl: "https://github.com/sagar-yenkure/expo_meTube",
    skills: [SiExpo, SiTailwindcss, SiSupabase],
  },
];
