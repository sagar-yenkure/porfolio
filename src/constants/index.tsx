import { cloudinaryUrl } from "@/lib/cloudinary";
import Image from "next/image";

export const workData = [
  {
    title: "Oct 2025 - Present",
    content: (
      <div>
        <h3 className="text-2xl md:text-4xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
          Technical Consultant – Traveazy Group
        </h3>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          I joined as a Technical Consultant, where I lead the development of scalable web applications,
          collaborate with cross-functional teams, and drive technical innovation to deliver high-quality solutions.
        </p>

        <ul className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 pl-5">
          <li>Collaborated with business teams to enhance product user experience.</li>
          <li>Planned and brainstormed features based on UI/UX best practices.</li>
          <li>Implemented modern technologies and coding patterns to keep products scalable and high-performing.</li>
          <li>Provided innovative solutions to bugs and issues during development and production.</li>
        </ul>

        <div className="grid grid-cols-2 gap-4">
          <Image

            src={cloudinaryUrl("v1763209991/office/WhatsApp_Image_2025-11-15_at_18.00.24_eac7e03b_dalm6l.jpg")}
            alt="Technical Consultant Photo"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <Image

            src={cloudinaryUrl("v1763209991/office/WhatsApp_Image_2025-11-15_at_18.00.24_a25f743f_akhw2m.jpg")}
            alt="Office Setup"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
        </div>
      </div>
    ),
  },

  {
    title: "Jul 2024",
    content: (
      <div>
        <h3 className="text-2xl md:text-4xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
          Team of the Quarter Award – Vionsys IT Solutions India Pvt. Ltd
        </h3>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Awarded for outstanding teamwork, strong collaboration, and achieving key
          project milestones that contributed significantly to organizational success.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src={cloudinaryUrl("v1743940843/office/1719672018935_hvt5m8.jpg")}
            alt="Team of the Quarter Award"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <Image
            src={cloudinaryUrl("v1743940842/office/WhatsApp_Image_2025-04-06_at_5.01.25_PM_odbosc.jpg")}
            alt="Team Celebration"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
        </div>
      </div>
    ),
  },

  {
    title: "Apr 2024 ",
    content: (
      <div>
        <h3 className="text-2xl md:text-4xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
          Software Engineer – Vionsys IT Solutions India Pvt. Ltd
        </h3>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          I joined as a Software Engineer, where I played a key role in developing
          and maintaining web applications, collaborating with cross-functional teams,
          and ensuring the delivery of high-quality software solutions.
        </p>

        <ul className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 pl-5">
          <li>Led cross-functional collaboration across frontend, backend, and DevOps teams.</li>
          <li>Supported project planning, scheduling, and delivery to meet deadlines.</li>
          <li>Stayed updated with modern technologies and encouraged innovation within the team.</li>
        </ul>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src={cloudinaryUrl("v1743940844/office/WhatsApp_Image_2025-04-06_at_5.05.57_PM_otfut4.jpg")}
            alt="Software Engineer Photo"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <Image
            src={cloudinaryUrl("v1743941369/office/1737358854011_gxyzat.jpg")}
            alt="Office Setup"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
        </div>
      </div>
    ),
  },

  {
    title: "Mar 2024",
    content: (
      <div>
        <h3 className="text-2xl md:text-4xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
          Champion of the Quarter Award – Vionsys IT Solutions India Pvt. Ltd
        </h3>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Recognized for consistently delivering high-quality work and exceeding
          performance expectations.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src={cloudinaryUrl("v1743940842/office/1711806601785_ssgicb.jpg")}
            alt="Champion Award Photo"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <Image
            src={cloudinaryUrl("v1743940842/office/WhatsApp_Image_2025-04-06_at_4.56.21_PM_lkogxo.jpg")}
            alt="Award Celebration"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
        </div>
      </div>
    ),
  },

  {
    title: "Feb 2024",
    content: (
      <div>
        <h3 className="text-2xl md:text-4xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
          Web Developer Intern – Vionsys IT Solutions India Pvt. Ltd
        </h3>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          I Joined as a Web Developer Intern where I contributed to frontend development,
          collaborated with the team, and gained practical experience in building web applications.
        </p>

        <ul className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 pl-5">
          <li>Debugged and resolved issues with the development team.</li>
          <li>Built responsive frontend components with a focus on usability.</li>
          <li>Participated in team meetings and knowledge-sharing sessions.</li>
        </ul>

        <div className="grid grid-cols-2 gap-4">
          <div className="h-20 md:h-44 lg:h-60 w-full">
            <Image
              src={cloudinaryUrl("v1743942909/office/WhatsApp_Image_2025-04-06_at_5.53.44_PM_vywn3x.jpg")}
              alt="Internship Photo 1"
              width={500}
              height={500}
              className="rounded-lg w-full h-full object-cover object-[center_30%]"
            />
          </div>

          <div className="h-20 md:h-44 lg:h-60 w-full">
            <Image
              src={cloudinaryUrl("v1743942909/office/WhatsApp_Image_2025-04-06_at_5.51.24_PM_fpzrzl.jpg")}
              alt="Internship Photo 2"
              width={500}
              height={500}
              className="rounded-lg w-full h-full object-cover object-[center_30%]"
            />
          </div>
        </div>
      </div>
    ),
  },
];
