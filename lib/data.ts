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

] as const;


export const headerLanguageMap = {
    Home: '主页',
    About: '关于我',
    Projects: '项目',
    Skills: '技能',
    Experience: '经历',
}

export const experiencesData = [
    {
        title: "Bachelor of Science in Statistics",
        location: "Northeast Agricultural University",
        description:
            "I acquired in-depth knowledge in areas such as Data Engineering, IT technology, and self-development. Developed strong capabilities in computational thinking, user-centred design, and machine learning, preparing for effective application in technology-driven environments",
        icon: React.createElement(LuGraduationCap),
        date: "2021 Sep - 2025 Jul",
    },
    {
        title: "th Head of Reading Club",
        location: "NEAU",

        description:
            "I have gained valuable skills such as Microsoft Office. My Responsibilities: planning activities,recording projects' process and coordinating activity execution.I can have Effective collaboration with team members and clear articulation of ideas and perspectives",
        icon: React.createElement(FaVuejs),
        date: "2021 Oct - 2024 Jun",
    }
]

export const experiencesDataZn = [
    {
        "title": "统计学全日制本科",
        "location": "东北农业大学(211)",
        "description": "在获取应用数学系统计学学士的过程中，我深入学习大数据、计算机编程和自我成长等领域。培养了计算思维、以用户为中心的设计和数据可视化方面的强大能力，为在科技驱动的环境中有效应用做好了准备。",
        icon: React.createElement(LuGraduationCap),
        "date": "2021年9月 - 2025年7月"
    },
    {
        "title": "组织部部长",
        "location": "东农读书社",
        "description": "主要运用的软件有PPT、Excel（熟练运用各种函数）、Word和数据透视表。岗位职责：规划活动、记录项目进展、协调活动执行，同时团队协作能力突出，能与团队成员高效协作并清晰流畅地表达自身观点和想法。     ",
        "icon": React.createElement(FaVuejs),
        "date": "2021年10月 - 2024年6月"
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        title: "CuteKitty",
        title_zh: '可爱小猫交互界面',
        description:
            "It aims to assist cat-users in finding the perfect feline companion. Featuring responsive design, it includes a navigation bar, a carousel of user testimonials and price tables.",
        desc_zh: "一个旨在协助猫猫用户找到合适的猫友，该网站实现响应式设计，功能有导航栏指引、轮播用户评价和价格表格，以方便用户快速查找信息。",
        tags: ["Bootstrap", "HTML5", 'CSS3', "UX" ,'CAT'],
        imageUrl: typingSpeedImage,
        projectUrl: 'https://github.com/witch641/CuteKitty',
        demoUrl: 'https://witch641.github.io/CuteKitty/',
        detailRoute: '/projects/typing-speed',
    },
    {
        title: "Paper Evaluation System",
        title_zh: "论文质量评价系统",
        description:
            "Use LDA for competition-related topics, assess key term relevance. Calculate summary coverage with bag-of-words model. Evaluate text fluency, chart standardization, and logical analysis with keyword co-occurrence and reasoning.",
        desc_zh: "我作为队长兼编程手，负责用Python和R语言开发论文质量评价系统，该大语言模型通过综合使用数据挖掘、自然语言处理、文本分析、机器学习，从五个维度为论文评分，最后获得全国三等奖。成果：该模型共计为810篇论文批量式打分，并且实际拟合效果的匹配度高达91.3%，效率提高近300%。具体步骤：遍历pdf，用正则找（正文和摘要）、预处理、定义评价函数、设置异常时的条件函数和评分梯度。再详细些：应用 LDA 主题建模来识别与竞争相关的主题，确定关键词与主题的相关性。创建词袋模型来计算所需摘要词汇的覆盖率，衡量摘要与内容之间的相关性。利用关键词共现分析和逻辑推理评估文本流畅性、图表标准化、论证逻辑分析。",
        tags: ["R", "Python", "Feature Engineering", "LDA" ,'K-means', "SPSS"],
        imageUrl: rubicGameImage,
        projectUrl: '',
        demoUrl: '/程序.zip',
        detailRoute: '/projects/typing-speed'

    },
    {
        title: "Script killing（ing)",
        title_zh: '剧本杀记录app(研发中）',
        description:
            "Let's look forward to my app going live soon.",
        desc_zh: "目标功能：定义核心功能，例如记录游戏名称、心情、游戏时间、几人本及参与者、关键线索、复盘总结等。",
        tags: ["Kotlin", "Figma", 'Room', "RecyclerView", "UI"],
        imageUrl: typingSpeedImage,
        projectUrl: '',
        demoUrl: '',
        detailRoute: '/projects/2048-game',
    }
    ,
    {
        title: "Femicide Visualization",
        title_zh: 'Femicide 可视化',
        description: "Data Cleaning and Preprocessing: Applied Numpy and Pandas for thorough data cleaning and preprocessing, ensuring accuracy and consistency, including handling missing values, outliers, and data format conversions. Data Visualization: Utilized libraries like Matplotlib, Seaborn, and Plotly to visually display key trends and characteristics in the Femicide data.",
        desc_zh: "• 数据清洗和预处理：运用Numpy、Pandas对原始数据进行全面的清洗和预处理，确保数据的准确性和一致性，包括处理缺失值、异常值以及数据格式转换。• 数据可视化：使用例如Matplotlib、Seaborn、Polly等库，直观地展示Femicide数据中的关键趋势和特点。通过这些可视化，用户可以深入了解数据背后的故事。",
        tags: ["Pyhon", "Numpy", "Pandas", "Flourish", 'PPT', 'Excel'],
        imageUrl: gameHubImage,
        projectUrl:'',
        demoUrl: './消失的她.pdf',
        detailRoute: '/projects/typing-speed'
    }
]

export const skillsData = [
    "Tableau",
    "C","MySQL","Power Query","Pivot Tables","Machine Learning",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "Git",
    "Github",
    "Claude",
    "Devops",
    "Linux/Unix","NLP",
    "Fluent in English",
    "Data Visualization",
    "data Mining",
    "Microsoft Office",
    "Python",
    "R","SPSS","jQuery",
    "Next.js",
    "Ajax","Flourish","Driving license"
] 
