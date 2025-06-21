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
  SiOpenai,
  SiFramer,
  SiSwr,
  SiResend,
} from "react-icons/si";
import { SiAuth0 } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";

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
    title: "AniPlay",
    description:
      "AniPlay is a modern anime streaming web app that lets users explore and watch anime with an elegant UI.Built using cutting- edge frontend tools, it offers smooth navigation, responsive design, and fast performance.Integrated with APIs for real - time data, AniPlay delivers an immersive and efficient viewing experience for anime enthusiasts",
    images: [

      `${BASE}/v1749997099/projects/Screenshot_2025-06-15_070827_utmxln.png`,
      `${BASE}/v1749997125/projects/Screenshot_2025-06-15_070911_mxkihi.png`,
      `${BASE}/v1749997086/projects/Screenshot_2025-06-15_071016_emedxv.png`,
      `${BASE}/v1749997069/projects/Screenshot_2025-06-15_070946_surj1g.png`,
    ],
    category: "Web Application",
    liveUrl: "https://ani-play-nine.vercel.app/",
    githubUrl: "https://github.com/sagar-yenkure/AniPlay",
    skills: [
      SiNextdotjs,
      SiReact,
      SiTypescript,
      SiSwr,
      SiTailwindcss,
      SiShadcnui,
      SiFramer,
      SiVercel,
    ],
  },
  {
    title: "New Sagar Tailors - Website",
    description:
      "New Sagar Tailors is a modern and responsive business website designed for a professional tailoring service. Built with the latest frontend technologies, it ensures fast performance, intuitive navigation, and elegant design. The site showcases services, customer testimonials, and a contact form, offering a complete digital experience for clients.",
    images: [
      `${BASE}/v1750491959/projects/Screenshot_2025-06-21_131216_b64r06.png`,
      `${BASE}/v1750491978/projects/Screenshot_2025-06-21_131247_uchiso.png`,
      `${BASE}/v1750491975/projects/Screenshot_2025-06-21_131330_q11qw0.png`,
      `${BASE}/v1750491970/projects/Screenshot_2025-06-21_131519_qacppt.png`,
    ],
    category: "Web Application",
    liveUrl: "https://newsagartailors.vercel.app/",
    githubUrl: "https://github.com/sagar-yenkure/sagartailors",
    skills: [
      SiNextdotjs,
      SiReact,
      SiTypescript,
      SiTailwindcss,
      SiShadcnui,
      SiFramer,
      SiVercel,
      SiResend
    ],
  }
];
