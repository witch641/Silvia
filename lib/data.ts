import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rubicGameImage from "@/public/2048-game.png";
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experience: '我的经历',
}

export const experiencesData = [
    {
        title: "Bachelor of Science Statistics",
        location: "Northeast Agricultural University",
        description:
            "I acquired in-depth knowledge in areas such as Big Data, Computer Science, and GPT. Developed strong capabilities in computational thinking, user-centred design, and data visualisation, preparing for effective application in technology-driven environments",
        icon: React.createElement(LuGraduationCap),
        date: "2021 Sep - 2025 Jun",
    },
    {
        title: "Head of Organizing Committee",
        location: "Reading Club in NEAU",

        description:
            "I have gained some skills such as Excel,PPT and Pivot tables,etc.My Responsibilities: planning activities, coordinating activity execution.I can have Effective collaboration with team members and clear articulation of ideas and perspectives",
        icon: React.createElement(FaVuejs),
        date: "2021 Oct - 2025 May",
    }
]

export const experiencesDataZn = [
    {
        "title": "统计学学士",
        "location": "东北农业大学(211)",
        "description": "在获取应用数学系统计学学士的过程中，我深入学习大数据、计算机编程和GPT等领域。培养了计算思维、以用户为中心的设计和数据可视化方面的强大能力，为在科技驱动的环境中有效应用做好了准备。",
        icon: React.createElement(LuGraduationCap),
        "date": "2021年9月 - 2025年6月"
    },
    {
        "title": "组织部部长",
        "location": "东农读书社",
        "description": "主要运用的软件有PPT、Excel（熟练运用各种函数）、Office和数据透视表。岗位职责：规划活动、记录项目进展、协调活动执行，同时团队协作能力突出，能与团队成员高效协作并清晰流畅地表达自身观点和想法。     ",
        "icon": React.createElement(FaVuejs),
        "date": "2021年10月 - 2025年4月"
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        title: "CuteKittys",
        title_zh: '可爱小猫交互式网站',
        description:
            "It aims to assist users in finding the perfect feline companion. Featuring responsive design, it includes a navigation bar, software downloads, and a carousel of user testimonials.",
        desc_zh: "一个打字速旨在协助用户找到合适的猫猫玩伴，该网站实现响应式设计，功能有导航栏、软件下载和轮播用户评价，以方便用户查找信息。",
        tags: ["Bootstrap", "javaScript", "HTML5", 'CSS3', "UX"],
        imageUrl: typingSpeedImage,
        projectUrl: 'https://github.com/witch641/CuteKitty',
        demoUrl: 'https://witch641.github.io/CuteKitty/',
        detailRoute: '/projects/typing-speed',
    },
    {
        title: "Happy Birthday Music Box",
        title_zh: '生日贺卡八音盒网站',
        description: "This website's main feature is a button that unfolds a birthday card while playing a birthday song. Upon opening, the page displays well wishes and the celebrant's photo, aiming to provide users with a creative and enjoyable birthday greeting experience.",
        desc_zh: "网站主要功能包括点击按钮展开贺卡的同时播放生日歌曲，打开的页面显示祝福语和寿星照片，意在以创意的方式为用户提供生日祝福，为用户带来愉悦的生日祝福体验。",
        tags: ["React", "javaScript", "ajax", "HTML5/CSS3"],
        imageUrl: gameHubImage,
        projectUrl: 'https://github.com/witch641/happy-birthday',
        demoUrl: 'https://witch641.github.io/happy-birthday/',
        detailRoute: '/projects/typing-speed'


    },
    {
        title: "Rating System",
        title_zh: "论文质量评估系统",
        description:
            "Use LDA for competition-related topics, assess key term relevance. Calculate summary coverage with bag-of-words model. Evaluate text fluency, chart standardization, and logical analysis with keyword co-occurrence and reasoning.",
        desc_zh: "应用 LDA 主题建模来识别与竞争相关的主题，确定关键词与主题的相关性。创建词袋模型来计算所需摘要词汇的覆盖率，衡量摘要与内容之间的相关性。利用关键词共现分析和逻辑推理评估文本流畅性、图表标准化、论证逻辑分析。",
        tags: ["R", "Python", "SPSS","LDA"],
        imageUrl: rubicGameImage,
        projectUrl: '',
        demoUrl: '/程序.zip',
        detailRoute: '/projects/typing-speed'

    },
]

export const skillsData = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "jQuery",
    "Vue3",
    "Node.js",
    "Ajax",
    "Git",
    "Github",
    "Next.js",
    "UI/UX",
    "Linux",
    "Fluent in English",
    "data visualization",
    "data mining",
    "Excel",
    "Python",

    "R"
] 
