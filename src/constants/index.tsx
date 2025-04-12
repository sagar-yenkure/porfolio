import { cloudinaryUrl } from "@/lib/cloudinary";
import Image from "next/image";

export const workData = [
  {
    title: "Jul 2024",
    content: (
      <div>
        <h3 className="text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
          Team of the Quarter Award - Vionsys IT Solutions India Pvt. Ltd
        </h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          This recognition was given for our exceptional performance, strong
          collaboration, and the achievement of important project milestones,
          which greatly contributed to the company&apos;s success.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={cloudinaryUrl("v1743940843/office/1719672018935_hvt5m8.jpg")}
            alt="Champion Team of the Quarter"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <Image
            src={cloudinaryUrl(
              "v1743940842/office/WhatsApp_Image_2025-04-06_at_5.01.25_PM_odbosc.jpg"
            )}
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
    title: "Mar 2024 - Current",
    content: (
      <div>
        <h3 className=" text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
          Software Engineer - Vionsys IT Solutions India Pvt. Ltd
        </h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          As a Software Engineer, I played a crucial role in software
          development, mentoring interns, and ensuring project success through
          collaboration and leadership.
        </p>
        <ul className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 pl-5">
          <li>
            Led cross-functional teams, ensuring effective collaboration between
            frontend, backend, and DevOps.
          </li>
          <li>
            Assisted in project planning, scheduling, and coordination to ensure
            timely delivery of high-quality solutions.
          </li>
          <li>
            Kept up with the latest technologies and methodologies, driving
            innovation and adaptability within the team.
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={cloudinaryUrl(
              "v1743940844/office/WhatsApp_Image_2025-04-06_at_5.05.57_PM_otfut4.jpg"
            )}
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
        <h3 className="text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
          Champion of the Quarter Award - Vionsys IT Solutions India Pvt. Ltd
        </h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          This achievement demonstrates my commitment to excellence and my
          desire to surpass expectations in all tasks.
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
            src={cloudinaryUrl(
              "v1743940842/office/WhatsApp_Image_2025-04-06_at_4.56.21_PM_lkogxo.jpg"
            )}
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
    title: "Feb 2024 - Apr 2024",
    content: (
      <div>
        <h3 className="text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
          Web Developer Intern - Vionsys IT Solutions India Pvt. Ltd
        </h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Contributed as a Web Developer Intern by assisting in designing and
          implementing responsive web layouts to improve user experience across
          multiple devices.
        </p>
        <ul className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 pl-5">
          <li>
            Collaborated with the development team to troubleshoot and debug
            issues.
          </li>
          <li>
            Worked on frontend development, focusing on responsive UI design and
            cross-browser compatibility.
          </li>
          <li>
            Participated in team meetings and knowledge-sharing sessions to
            improve workflow efficiency.
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-20 md:h-44 lg:h-60 w-full">
            <Image
              src={cloudinaryUrl(
                "v1743942909/office/WhatsApp_Image_2025-04-06_at_5.53.44_PM_vywn3x.jpg"
              )}
              alt="Internship Photo 1"
              width={500}
              height={500}
              className="rounded-lg w-full h-full object-cover object-[center_30%]"
            />
          </div>
          <div className="h-20 md:h-44 lg:h-60 w-full">
            <Image
              src={cloudinaryUrl(
                "v1743942909/office/WhatsApp_Image_2025-04-06_at_5.51.24_PM_fpzrzl.jpg"
              )}
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
