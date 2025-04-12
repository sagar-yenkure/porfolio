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
  SiFirebase,
  SiExpress,
  SiJsonwebtokens,
  SiExpo,
  SiReactrouter,
  SiOpenai,
  SiRedux,
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
    title: "Lightroom",
    description: "A platform for licensing and purchasing professional images.",
    images: [
      `${BASE}/v1743841196/projects/Screenshot_2025-03-01_183450_dmsdn3.png`,
      `${BASE}/v1743841195/projects/Screenshot_2025-03-01_183515_xveneb.png`,
      `${BASE}/v1743841164/projects/Screenshot_2025-03-01_183537_alkfn5.png`,
      `${BASE}/v1743841140/projects/Screenshot_2025-03-01_183929_ecrsdc.png`,
      `${BASE}/v1743841126/projects/Screenshot_2025-03-01_183652_p9t23v.png`,
    ],
    liveUrl: "https://lighteroom.com",
    category: "Web Application",
    githubUrl: "https://github.com/your-repo/lighteroom",
    skills: [
      SiNextdotjs,
      SiTailwindcss,
      SiTypescript,
      SiRazorpay,
      SiDocker,
      SiVercel,
      SiAuth0,
      SiPrisma,
      SiMongodb,
    ],
  },
  {
    title: "IntelliicPDF",
    description: "Smart PDF extraction tool for structured document insights.",
    images: [
      `${BASE}/v1744003437/projects/ujvktjqwhcbblyjnq3wl.png`,
      `${BASE}/v1744003437/projects/emhk2swubzvbhzwpgwhn.png`,
      `${BASE}/v1744003437/projects/a7rdzzc8xu36tyr6gimi.png`,
      `${BASE}/v1744003436/projects/djoapblz9n0qqwrfuri6.png`,
    ],
    liveUrl: "https://intelliicpdf.com",
    category: "Web Application",
    githubUrl: "https://github.com/your-repo/intelliicpdf",
    skills: [
      SiTypescript,
      SiNextdotjs,
      SiShadcnui,
      SiAuth0,
      SiVercel,
      SiRazorpay,
      SiPrisma,
      SiMongodb,
    ],
  },
  {
    title: "Netflix Clone",
    description: "A full-featured Netflix clone with UI and responsive design.",
    images: [
      `${BASE}/v1743842209/projects/287425065-730bb5ec-25c4-4bf1-900f-598d5126c41b_kbfuwx.png`,
      `${BASE}/v1743842337/projects/287425476-40ce053b-c7df-497c-8c2b-c8a28c78c653_eeji7x.png`,
      `${BASE}/v1743842327/projects/287425114-954b7292-a91f-4ce9-96e0-1c2bfe9a9f01_zv7guo.png`,
      `${BASE}/v1743842215/projects/287425452-aa6075a8-c729-4535-9f0e-165a1e91bbe2_jy0zv1.png`,
      `${BASE}/v1743842188/projects/287425465-cbee6805-fbe4-44b5-94b9-170717af7a9f_stck5c.png`,
    ],
    liveUrl: "https://netflix-clone.com",
    category: "Web Application",
    githubUrl: "https://github.com/your-repo/netflix",
    skills: [SiReact, SiRedux, SiFirebase, SiExpress, SiTailwindcss],
  },
  {
    title: "ChatGPT Clone",
    description:
      "A conversational AI interface similar to ChatGPT with modern UI.",
    images: [
      `${BASE}/v1743842081/projects/287424494-fcfe1277-320e-41b8-ae80-7f98648076f2_a4bc4b.png`,
      `${BASE}/v1743842241/projects/287424529-10788362-0306-4db6-b262-67f34fce7558_ceuted.png`,
      `${BASE}/v1743842048/projects/287424509-c630deab-d279-4cbd-9bfa-16b31bc0e1b7_jz7zrt.png`,
      `${BASE}/v1743842045/projects/287424521-a873b3d3-9976-4412-ac5c-c8be1e761383_l4y4my.png`,
    ],
    liveUrl: "https://chatgpt-clone.com",
    category: "Web Application",
    githubUrl: "https://github.com/your-repo/chatgpt-clone",
    skills: [
      SiReact,
      SiRedux,
      SiFirebase,
      SiExpress,
      SiTailwindcss,
      SiOpenai,
      SiJsonwebtokens,
      SiReactrouter,
    ],
  },
  {
    title: "MeTube",
    description: "A YouTube-inspired video streaming web application.",
    images: [
      `${BASE}/v1743940691/projects/WhatsApp_Image_2025-04-06_at_5.01.02_PM_1_gzyhu5.jpg`,
      `${BASE}/v1743940691/projects/WhatsApp_Image_2025-04-06_at_5.01.01_PM_igtwvz.jpg`,
      `${BASE}/v1743940691/projects/WhatsApp_Image_2025-04-06_at_5.01.03_PM_q7ys4p.jpg`,
      `${BASE}/v1743940691/projects/WhatsApp_Image_2025-04-06_at_5.01.02_PM_nrcl8s.jpg`,
    ],
    liveUrl: "https://metube-app.com",
    category: "Mobile Application",
    githubUrl: "https://github.com/your-repo/metube",
    skills: [SiExpo, SiTailwindcss, SiSupabase],
  },
  {
    title: "SnapWalls",
    description:
      "A beautiful wallpaper app built with Expo, Tailwind, and Supabase.",
    images: [
      `${BASE}/v1744001927/projects/Screenshot_20250407-101957_fhmtoa.png`,
      `${BASE}/v1744001926/projects/Screenshot_20250407-102002_crh58f.png`,
      `${BASE}/v1744001926/projects/Screenshot_20250407-101847_btiz1l.png`,
      `${BASE}/v1744001925/projects/Screenshot_20250407-101952_sp51vc.png`,
      `${BASE}/v1744001925/projects/Screenshot_20250407-101926_r83h4g.png`,
    ],
    liveUrl: "https://snapwalls.com",
    category: "Mobile Application",
    githubUrl: "https://github.com/your-repo/snapwalls",
    skills: [SiExpo, SiTailwindcss, SiSupabase],
  },
];
