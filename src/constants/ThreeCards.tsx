export type CardData = {
    number: string;
    label: string;
    title: string;
    description: string;
    background: string;
    color: string;
    icon: React.ReactNode;
};

const cardIcons = {
    hire: (
        <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
        >
            <path d="M5 19L19 5" />
            <path d="M10 5H19V14" />
        </svg>
    ),

    collaborate: (
        <svg
            width="30"
            height="30"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
        >
            <circle cx="10" cy="10" r="3" />
            <circle cx="22" cy="10" r="3" />
            <circle cx="10" cy="22" r="3" />
            <path d="M13 10H19" />
            <path d="M10 13V19" />
        </svg>
    ),

    anime: (
        <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
        >
            <path d="M12 3L14 9L21 12L14 14L12 21L10 14L3 12L10 9L12 3Z" />
        </svg>
    ),
};

export const cardsEN: CardData[] = [
    {
        number: "01",
        label: "HIRE ME",
        title: "Build it\nwith Me",
        description:
            "Looking for a software engineer to turn your idea into a reliable, scalable and polished digital product?",
        background:
            "linear-gradient(145deg, #f4f4f4 0%, #dddddd 100%)",
        color: "#111111",
        icon: cardIcons.hire,
    },
    {
        number: "02",
        label: "COLLABORATE",
        title: "Let's build\nTogether",
        description:
            "Have an interesting idea, project or team? Let's collaborate and create something meaningful together.",
        background:
            "linear-gradient(145deg, #286ce0 0%, #1243a5 100%)",
        color: "#ffffff",
        icon: cardIcons.collaborate,
    },
    {
        number: "03",
        label: "ANIME & CHILL",
        title: "Into anime?\nLet's talk.",
        description:
            "I'm always up for talking about anime, sharing recommendations, or finding the next series worth watching.",
        background:
            "linear-gradient(145deg, #292929 0%, #101010 100%)",
        color: "#ffffff",
        icon: cardIcons.anime,
    },
];

export const cardsJP: CardData[] = [
    {
        number: "01",
        label: "ご依頼ください",
        title: "一緒に\n作りましょう",
        description:
            "あなたのアイデアを、信頼性が高く、スケーラブルで洗練されたデジタルプロダクトに変えるソフトウェアエンジニアをお探しですか？",
        background:
            "linear-gradient(145deg, #f4f4f4 0%, #dddddd 100%)",
        color: "#111111",
        icon: cardIcons.hire,
    },
    {
        number: "02",
        label: "コラボレーション",
        title: "一緒に\n作りましょう",
        description:
            "面白いアイデアやプロジェクト、チームがありますか？一緒に協力して、意味のあるものを作りましょう。",
        background:
            "linear-gradient(145deg, #286ce0 0%, #1243a5 100%)",
        color: "#ffffff",
        icon: cardIcons.collaborate,
    },
    {
        number: "03",
        label: "アニメ＆チル",
        title: "アニメ好き？\n話しましょう。",
        description:
            "アニメについて話したり、おすすめを共有したり、次に見るべき作品を一緒に探したりするのが大好きです。",
        background:
            "linear-gradient(145deg, #292929 0%, #101010 100%)",
        color: "#ffffff",
        icon: cardIcons.anime,
    },
];