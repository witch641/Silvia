import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dataMining from "@/public/datamining.png";
import femicide from "@/public/femicide.png";
import cuteKitty from "@/public/cutekitty.png";
import scriptKilling from "@/public/scriptkilling.png"

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
    {
        name: "Hobbies",
        hash: "#hobbies",
    },
] as const;


export const headerLanguageMap = {
    Home: '主页',
    About: '关于我',
    Projects: '项目',
    Skills: '技能',
    Experience: '经历',
    Hobbies:'兴趣',
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
        title:"Data Science intern",
        location:"Hainan YiQi Real Estate Company",
        description:"Utilized ML techniques for modeling and model engineering to solve data science problems. Uncovered relationships between data and business, employing data for business modeling and quantitative reasoning, which led to a 28.5% increase in consultations. ",
        icon:React.createElement(FaVuejs),
        date: "2024 May - 2024 Sep",

    },
    {
        title: "the Head of Organization Department ",
        location: "the Reading Club of NEAU",

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
        "description": "在获取应用数学系统计学学士的过程中，我深入学习大数据、计算机编程和自我成长等领域。培养了以数学逻辑为主和以用户体验为中心的思维，对成为一名工程师或项目与用户之间的桥梁充满了兴趣。",
        icon: React.createElement(LuGraduationCap),
        "date": "2021年9月 - 2025年7月"
    },
    {
        "title":"数据科学实习生",
        "location":"海南亿启房地产公司",
        "description":"运用机器学习技术进行建模、模型工程解决数据科学中的问题。揭示数据与业务之间的关联，利用数据进行业务建模和定量推理，为公司增加了28.5%的咨询量。数据的获取、清洗、建模和探索，涉及技术工具主要为SQL、Excel和Python，并制作可视化图表和报告。",
        icon: React.createElement(FaVuejs),
        "date": "2024年5月 - 2024年9月"

    },
    {
        "title": "组织部部长",
        "location": "东农读书社",
        "description": "主要运用的软件有PPT、Excel（熟练运用各种函数）、Word和数据透视表。岗位职责：规划活动、记录项目进展、协调活动执行，同时团队协作能力突出，能与团队成员高效协作并清晰流畅地表达自身观点和想法。",
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
        imageUrl: cuteKitty,
        projectUrl: 'https://github.com/witch641/CuteKitty',
        demoUrl: 'https://witch641.github.io/CuteKitty/',
        detailRoute: '/projects/cutekitty',
    },
    {
        title: "Automated Rev",
        title_zh: "论文自动化评阅",
        description:
            "As the team leader and coder, I developed automated review model using Python, utilizing data mining, NLP and ML. this automatic scripts scored 810 papers in batches, ultimately earning a national third prize.",
        des_zh:"我作为队长兼编程手，负责用Python开发论文自动化评阅脚本，该模型通过综合使用数据挖掘、自然语言处理、文本分析、机器学习，从五个维度为论文评分，该模型共计为810篇论文批量式打分，最后获得全国三等奖。",
        tags: ["R", "Python", "Feature Engineering", "LDA" ,'K-means', "SPSS"],
        imageUrl: dataMining,
        projectUrl: '',
        demoUrl: '/程序.zip',
        detailRoute: '/projects/datamining'

    },
    {
        title: "Script Killing(ING)",
        title_zh: '剧本杀记录APP(研发中）',
        description:
            "Target Functions: define the core functions, such as recording the name of the game, the mood, the time of the game, how many books and participants, key clues, review summaries, etc. Let's look forward to my app going live soon.",
        desc_zh: "目标功能：定义核心功能，例如记录游戏名称、心情、游戏时间、几人本及参与者、关键线索、复盘总结等。应该过年前完成，尽情期待。",
        tags: ["Kotlin", "Figma", 'Room', "RecyclerView", "UI"],
        imageUrl: scriptKilling,
        projectUrl: '',
        demoUrl: '',
        detailRoute: '/projects/scriptkilling',
    }
    ,
    {
        title: "Femicide Visual",
        title_zh: 'Femicide 可视化',
        description: "Applied Numpy and Pandas for thorough data cleaning and preprocessing, ensuring accuracy and consistency, including handling missing values, outliers, and data format conversions. ",
        desc_zh: "数据清洗和预处理：运用Numpy、Pandas对原始数据进行全面的清洗和预处理，确保数据的准确性和一致性，包括处理缺失值、异常值以及数据格式转换。数据可视化：使用例如Matplotlib、Seaborn等库，直观地展示其关键趋势和特点。",
        tags: ["Pyhon", "Numpy", "Pandas", "Flourish", 'PPT', 'Excel'],
        imageUrl: femicide,
        projectUrl:'',
        demoUrl: './消失的她.pdf',
        detailRoute: '/projects/femicide'
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
    "Ajax","Flourish","Driving license","A Good Game Partner"
] 
