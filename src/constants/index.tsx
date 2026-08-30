import { cloudinaryUrl } from "@/lib/cloudinary";
import Image from "next/image";

const CompanyLogo = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => {
  return (
    <div
      className="
        mb-3
        flex h-12 w-fit
        items-center
        rounded-lg
        bg-white
        px-2
        py-1
        shadow-sm
        md:h-14
      "
    >
      <Image
        src={src}
        alt={alt}
        width={140}
        height={60}
        className="
          h-10
          w-auto
          object-contain
          md:h-12
        "
      />
    </div>
  );
};

const WorkImages = ({
  images,
}: {
  images: {
    src: string;
    alt: string;
  }[];
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={500}
          height={500}
          className="
            h-20
            w-full
            rounded-lg
            object-cover
            md:h-44
            lg:h-60
          "
        />
      ))}
    </div>
  );
};



export const workDataEn = [
  // QUALYS
  {
    title: "June 2026 - Present",
    logo: "/qualys.svg",

    content: (
      <div>
        {/* Company Logo */}
        <CompanyLogo
          src="/qualys.svg"
          alt="Qualys logo"
        />

        {/* Job Title */}
        <h3
          className="
            mb-4
            text-left
            text-2xl
            font-bold
            leading-tight
            text-neutral-600
            dark:text-neutral-200
            md:text-4xl
          "
        >
          Web Developer – Qualys Inc.
        </h3>

        {/* Description */}
        <p
          className="
            mb-8
            text-xs
            font-normal
            leading-6
            text-neutral-700
            dark:text-neutral-300
            md:text-sm
          "
        >
          I joined as a Web Developer, where I work on web development and
          marketing initiatives, building new marketing pages and user-focused
          experiences. I also work with CMS platforms, AWS, and Next.js to
          develop, maintain, and optimize scalable web solutions.
        </p>

        {/* Responsibilities */}
        <ul
          className="
            mb-8
            list-disc
            space-y-2
            pl-5
            text-xs
            font-normal
            leading-6
            text-neutral-700
            dark:text-neutral-300
            md:text-sm
          "
        >
          <li>
            Developing and maintaining responsive, high-performance web
            applications using Next.js and modern frontend technologies.
          </li>

          <li>
            Managing CMS-driven content workflows to improve website
            scalability.
          </li>

          <li>
            Optimizing website performance and global content delivery through
            AWS services.
          </li>
        </ul>

        {/* Work Images */}
        <WorkImages
          images={[
            {
              src: cloudinaryUrl(
                "v1786779947/office/1779813134453_f5jdas.jpg"
              ),
              alt: "Qualys workplace",
            },
          ]}
        />
      </div>
    ),
  },

  // TRAVEAZY
  {
    title: "Oct 2025 - June 2026",
    logo: "/traveazy.png",

    content: (
      <div>
        {/* Company Logo */}
        <CompanyLogo
          src="/traveazy.png"
          alt="Traveazy logo"
        />

        {/* Job Title */}
        <h3
          className="
            mb-4
            text-left
            text-2xl
            font-bold
            leading-tight
            text-neutral-600
            dark:text-neutral-200
            md:text-4xl
          "
        >
          Technical Consultant – Traveazy Group
        </h3>

        {/* Description */}
        <p
          className="
            mb-8
            text-xs
            font-normal
            leading-6
            text-neutral-700
            dark:text-neutral-300
            md:text-sm
          "
        >
          I joined as a Technical Consultant, where I worked on scalable web
          applications, collaborated with cross-functional teams, and
          contributed to product and technical improvements across the
          organization.
        </p>

        {/* Responsibilities */}
        <ul
          className="
            mb-8
            list-disc
            space-y-2
            pl-5
            text-xs
            font-normal
            leading-6
            text-neutral-700
            dark:text-neutral-300
            md:text-sm
          "
        >
          <li>
            Collaborated with business teams to enhance product user
            experience.
          </li>

          <li>
            Planned and brainstormed features based on UI/UX best practices.
          </li>

          <li>
            Implemented modern technologies and coding patterns to keep
            products scalable and high-performing.
          </li>
        </ul>

        {/* Work Images */}
        <WorkImages
          images={[
            {
              src: cloudinaryUrl(
                "v1763209991/office/WhatsApp_Image_2025-11-15_at_18.00.24_eac7e03b_dalm6l.jpg"
              ),
              alt: "Traveazy workplace",
            },
            {
              src: cloudinaryUrl(
                "v1763209991/office/WhatsApp_Image_2025-11-15_at_18.00.24_a25f743f_akhw2m.jpg"
              ),
              alt: "Traveazy office setup",
            },
          ]}
        />
      </div>
    ),
  },

  // VIONSYS
  {
    title: "Feb 2024 - Oct 2025",
    logo: "/vionsys.webp",

    content: (
      <div>
        {/* Company Logo */}
        <CompanyLogo
          src="/vionsys.webp"
          alt="Vionsys logo"
        />

        {/* Job Title */}
        <h3
          className="
            mb-4
            text-left
            text-2xl
            font-bold
            leading-tight
            text-neutral-600
            dark:text-neutral-200
            md:text-4xl
          "
        >
          Software Engineer – Vionsys IT Solutions India Pvt. Ltd
        </h3>

        {/* Description */}
        <p
          className="
            mb-8
            text-xs
            font-normal
            leading-6
            text-neutral-700
            dark:text-neutral-300
            md:text-sm
          "
        >
          I joined as a Software Engineer, where I played a key role in
          developing and maintaining web applications, collaborating with
          cross-functional teams, and ensuring the delivery of high-quality
          software solutions.
        </p>

        {/* Responsibilities */}
        <ul
          className="
            mb-8
            list-disc
            space-y-2
            pl-5
            text-xs
            font-normal
            leading-6
            text-neutral-700
            dark:text-neutral-300
            md:text-sm
          "
        >
          <li>
            Led cross-functional collaboration across frontend, backend, and
            DevOps teams.
          </li>

          <li>
            Supported project planning, scheduling, and delivery to meet
            deadlines.
          </li>

          <li>
            Stayed updated with modern technologies and encouraged innovation
            within the team.
          </li>
        </ul>

        {/* Work Images */}
        <WorkImages
          images={[
            {
              src: cloudinaryUrl(
                "v1743940844/office/WhatsApp_Image_2025-04-06_at_5.05.57_PM_otfut4.jpg"
              ),
              alt: "Vionsys team",
            },
            {
              src: cloudinaryUrl(
                "v1743941369/office/1737358854011_gxyzat.jpg"
              ),
              alt: "Vionsys office setup",
            },
          ]}
        />
      </div>
    ),
  },
];


export const workDataJp = [
  // =========================================================
  // QUALYS
  // =========================================================
  {
    title: "2026年6月 - 現在",
    logo: "/qualys.svg",

    content: (
      <div>
        <CompanyLogo
          src="/qualys.svg"
          alt="Qualys logo"
        />
        <h3
          className="
            mb-4
            text-left
            text-2xl
            font-bold
            leading-tight
            text-neutral-600
            dark:text-neutral-200
            md:text-4xl
          "
        >
          Web Developer – Qualys Inc.
        </h3>

        <p
          className="
            mb-8
            text-xs
            font-normal
            leading-6
            text-neutral-700
            dark:text-neutral-300
            md:text-sm
          "
        >
          Web Developerとして、Web開発やマーケティング施策に携わり、
          新しいマーケティングページやユーザー中心のWeb体験を構築しています。
          また、CMS、AWS、Next.jsなどを活用し、スケーラブルなWebソリューションの
          開発、保守、最適化にも取り組んでいます。
        </p>

        <ul
          className="
            mb-8
            list-disc
            space-y-2
            pl-5
            text-xs
            font-normal
            leading-6
            text-neutral-700
            dark:text-neutral-300
            md:text-sm
          "
        >
          <li>
            Next.jsと最新のフロントエンド技術を使用した、
            レスポンシブで高性能なWebアプリケーションの開発・保守。
          </li>

          <li>
            CMSを活用したコンテンツワークフローを管理し、
            Webサイトのスケーラビリティを向上。
          </li>

          <li>
            AWSサービスを活用してWebサイトのパフォーマンスと
            グローバルなコンテンツ配信を最適化。
          </li>
        </ul>

        <WorkImages
          images={[
            {
              src: cloudinaryUrl(
                "v1786779947/office/1779813134453_f5jdas.jpg"
              ),
              alt: "Qualysの職場",
            },
          ]}
        />
      </div>
    ),
  },

  // =========================================================
  // TRAVEAZY
  // =========================================================
  {
    title: "2025年10月 - 2026年6月",
    logo: "/traveazy.png",

    content: (
      <div>
        <CompanyLogo
          src="/traveazy.png"
          alt="Traveazy logo"
        />
        <h3
          className="
            mb-4
            text-left
            text-2xl
            font-bold
            leading-tight
            text-neutral-600
            dark:text-neutral-200
            md:text-4xl
          "
        >
          Technical Consultant – Traveazy Group
        </h3>

        <p
          className="
            mb-8
            text-xs
            font-normal
            leading-6
            text-neutral-700
            dark:text-neutral-300
            md:text-sm
          "
        >
          Technical Consultantとして、スケーラブルなWebアプリケーションの
          開発に携わり、さまざまなチームと連携しながら、組織全体のプロダクト
          および技術面の改善に貢献しました。
        </p>

        <ul
          className="
            mb-8
            list-disc
            space-y-2
            pl-5
            text-xs
            font-normal
            leading-6
            text-neutral-700
            dark:text-neutral-300
            md:text-sm
          "
        >
          <li>
            ビジネスチームと連携し、プロダクトのユーザー体験を向上。
          </li>

          <li>
            UI/UXのベストプラクティスに基づいた機能の企画・ブレインストーミング。
          </li>

          <li>
            最新の技術やコーディングパターンを導入し、
            プロダクトのスケーラビリティとパフォーマンスを維持。
          </li>
        </ul>

        <WorkImages
          images={[
            {
              src: cloudinaryUrl(
                "v1763209991/office/WhatsApp_Image_2025-11-15_at_18.00.24_eac7e03b_dalm6l.jpg"
              ),
              alt: "Traveazyの職場",
            },
            {
              src: cloudinaryUrl(
                "v1763209991/office/WhatsApp_Image_2025-11-15_at_18.00.24_a25f743f_akhw2m.jpg"
              ),
              alt: "Traveazyのオフィス環境",
            },
          ]}
        />
      </div>
    ),
  },

  // =========================================================
  // VIONSYS
  // =========================================================
  {
    title: "2024年2月 - 2025年10月",
    logo: "/vionsys.webp",

    content: (
      <div>
        <CompanyLogo
          src="/vionsys.webp"
          alt="Vionsys logo"
        />
        <h3
          className="
            mb-4
            text-left
            text-2xl
            font-bold
            leading-tight
            text-neutral-600
            dark:text-neutral-200
            md:text-4xl
          "
        >
          Software Engineer – Vionsys IT Solutions India Pvt. Ltd
        </h3>

        <p
          className="
            mb-8
            text-xs
            font-normal
            leading-6
            text-neutral-700
            dark:text-neutral-300
            md:text-sm
          "
        >
          Software Engineerとして、Webアプリケーションの開発・保守を担当し、
          クロスファンクショナルなチームと連携しながら、高品質なソフトウェア
          ソリューションの提供に取り組みました。
        </p>

        <ul
          className="
            mb-8
            list-disc
            space-y-2
            pl-5
            text-xs
            font-normal
            leading-6
            text-neutral-700
            dark:text-neutral-300
            md:text-sm
          "
        >
          <li>
            フロントエンド、バックエンド、DevOpsチーム間の
            クロスファンクショナルな連携をリード。
          </li>

          <li>
            プロジェクトの計画、スケジュール管理、納期に向けた
            開発・提供をサポート。
          </li>

          <li>
            最新技術を継続的に学び、チーム内でのイノベーションを促進。
          </li>
        </ul>

        <WorkImages
          images={[
            {
              src: cloudinaryUrl(
                "v1743940844/office/WhatsApp_Image_2025-04-06_at_5.05.57_PM_otfut4.jpg"
              ),
              alt: "Vionsysチーム",
            },
            {
              src: cloudinaryUrl(
                "v1743941369/office/1737358854011_gxyzat.jpg"
              ),
              alt: "Vionsysのオフィス環境",
            },
          ]}
        />
      </div>
    ),
  },
];