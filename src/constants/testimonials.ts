import { cloudinaryUrl } from "@/lib/cloudinary";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  url: string;
  message: string;
}

export const testimonials = [
  {
    id: 9,
    name: "Subhasish Karmakar",
    role: "Data Scientist",
    company: "CloudLab",
    url: cloudinaryUrl(
      "v1743840913/users/WhatsApp_Image_2025-04-05_at_10.48.52_AM_k472ob.jpg"
    ),
    message:
      "Back in college, we tackled a lot of projects together, and I saw both sides of Sagar — a reliable leader and a supportive team member. He leads by example and always gives his best with complete dedication.",
  },
  {
    id: 2,
    name: "Aniket Salukhe",
    role: "Full Stack Developer",
    company: "Kvell Dynamic Pvt. Ltd",
    url: cloudinaryUrl(
      "v1743847746/users/WhatsApp_Image_2025-04-05_at_2.57.09_PM_e4xbmn.jpg"
    ),
    message:
      "Sagar picks up new concepts incredibly fast. During our collaboration, he consistently delivered more than expected, often surprising us with his attention to detail and proactive mindset that drives results.",
  },
  {
    id: 3,
    name: "Shantanu Pandit",
    role: "Customer Experience Lead",
    company: "Sangya Project Pvt. Ltd",
    url: cloudinaryUrl(
      "v1743847745/users/WhatsApp_Image_2025-04-05_at_2.44.55_PM_xsk7ak.jpg"
    ),
    message:
      "Calm under pressure and clear in communication — that's what stood out about Sagar. Whether working across teams or solving critical issues, he always brought a sense of confidence, maturity, and clarity.",
  },
  {
    id: 4,
    name: "Omkar Torne",
    role: "Digital Marketing Executive",
    company: "Vionsys IT Solution India Pvt. Ltd",
    url: cloudinaryUrl("v1743841303/users/1728895563351_mxf3mj.jpg"),
    message:
      "It's been great seeing how effortlessly Sagar adapts to new roles and responsibilities. His humility, combined with confidence and consistency, makes him a real standout in any professional environment.",
  },
  {
    id: 1,
    name: "Prem Khadekar",
    role: "Talent Acquisition Specialist",
    company: "Mphatek Systems",
    url: cloudinaryUrl("v1743847746/users/1742407797217_zmgsua.jpg"),
    message:
      "Working with Sagar has been inspiring. His dedication to learning and constant growth really sets a positive tone for everyone around him. He's never afraid to take the lead when a challenge arises or something new needs to be explored.",
  },
  {
    id: 5,
    name: "Aniket Mane",
    role: "System Engineer (CSW)",
    company: "Honeywell Automation India Ltd",
    url: cloudinaryUrl(
      "v1743840936/users/WhatsApp_Image_2025-04-05_at_11.55.46_AM_gao3yq.jpg"
    ),
    message:
      "What impressed me most about Sagar was his logical thinking and hands-on coding approach. He's dependable and always brings energy to the team — a true problem solver and great colleague to work with.",
  },
  {
    id: 7,
    name: "Balaji Birajdar",
    role: "DevOps Engineer",
    company: "Capgemini",
    url: cloudinaryUrl(
      "v1743840917/users/WhatsApp_Image_2025-04-05_at_1.19.53_PM_aadfi1.jpg"
    ),
    message:
      "It's rare to work with someone who not only completes tasks with precision but also pushes to exceed expectations. That's what Sagar consistently does — he raises the bar quietly and effectively, with excellence.",
  },
  {
    id: 8,
    name: "Akhilesh Mohto",
    role: "Senior Associate - US Insurance",
    company: "TCS",
    url: cloudinaryUrl(
      "v1743840916/users/WhatsApp_Image_2025-04-05_at_1.37.36_PM_asifhs.jpg"
    ),
    message:
      "I've seen how his positivity lifts the entire team. Sagar naturally motivates people around him and constantly looks for better ways to build and innovate, even when under pressure or deadlines.",
  },
  {
    id: 10,
    name: "Ravikant Waghmare",
    role: "Senior Software Engineer",
    company: "Vionsys IT Solution India Pvt. Ltd",
    url: cloudinaryUrl("v1743840911/users/1742714591018_rsyhtj.jpg"),
    message:
      "Whether it's building a product or solving a tricky bug, Sagar approaches each task with purpose. His professionalism and hunger to learn never go unnoticed — it's refreshing to see.",
  },
  {
    id: 11,
    name: "Suhas Barangule",
    role: "Assistant System Engineer",
    company: "TCS",
    url: cloudinaryUrl(
      "v1743840905/users/484741587_1002208191324419_8380152975578976193_n_tqa4f8.jpg"
    ),
    message:
      "In team discussions, Sagar brings thoughtful ideas and follows through with excellent execution. He's a quiet achiever — always letting his work do the talking, and his work speaks volumes.",
  },
  {
    id: 12,
    name: "Vijaya Gavhane",
    role: ".NET Developer",
    company: "Paramount Healthcare Management System",
    url: cloudinaryUrl(
      "v1743840900/users/WhatsApp_Image_2025-04-05_at_10.07.22_AM_jmjoai.jpg"
    ),
    message:
      "His blend of intelligence and humility is rare. Whether facing a complex technical challenge or mentoring peers, Sagar always delivers with grace, insight, and patience.",
  },
  {
    id: 13,
    name: "Karan Patil",
    role: "Software Developer",
    company: "Rafai Technologies",
    url: cloudinaryUrl(
      "v1743840902/users/WhatsApp_Image_2025-04-05_at_1.35.26_PM_wbi5ef.jpg"
    ),
    message:
      "You can always count on Sagar to help and uplift those around him. His natural curiosity and willingness to explore new ideas drive real impact and meaningful conversations.",
  },
  {
    id: 14,
    name: "Yash Zore",
    role: "HR Executive",
    company: "Vionsys IT Solution India Pvt. Ltd",
    url: cloudinaryUrl("v1743840879/users/1639198887919_e4sims.jpg"),
    message:
      "What I've always admired about Sagar is how open he is to feedback. He's committed to personal and professional growth, and it clearly shows in his continuous evolution.",
  },
  {
    id: 15,
    name: "Prasad Hole",
    role: "DevOps Engineer",
    company: "AB Web InfoTech",
    url: cloudinaryUrl(
      "v1744030857/users/Screenshot_20250407-183001_2_m1wfmm.png"
    ),
    message:
      "Watching Sagar's growth has been nothing short of motivating. He's consistent, focused, and never settles — always chasing improvement with genuine intent and passion.",
  },
  {
    id: 166,
    name: "Adity Raskar",
    role: "Python Developer",
    company: "Code Techie",
    url: cloudinaryUrl(
      "v1743940576/users/WhatsApp_Image_2025-04-05_at_11.13.49_PM_jnmuwo.jpg"
    ),
    message:
      "Sagar's combination of technical skills and empathy makes him a standout. He uplifts others while climbing himself — a rare and admirable quality in today's fast-paced world of tech.",
  },
];
