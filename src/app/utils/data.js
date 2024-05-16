import Skills from "../components/Skills"
import javascript from "../../../public/images/skills/javascript.png"
import typescript from "../../../public/images/skills/typescript.png"
import react from "../../../public/images/skills/react.png"
import next from "../../../public/images/skills/next.png"
import node from "../../../public/images/skills/node.png"
import mongodb from "../../../public/images/skills/mongodb.png"
import mysql from "../../../public/images/skills/mysql.png"
import Link from "next/link"
import Experience from "../components/Experience"

export const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <Skills />
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <Experience />
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="text-[#ADB7BE] underline">
                <li><a href="/SAG_Integration_Professional_Certificate.pdf" target="_blank">SAG Integration Professional Certificate</a></li>
                <li><a href="/SAG_API_Professional_Certificate.pdf" target="_blank">SAG API Professional Certificate</a></li>
                <li><a href="/Google_Cloud_Digital_Leader_Certificate.pdf" target="_blank">Cloud Digital Leader - Google Cloud</a></li>
                <li><a href="/Creative_JavaScript_Course.png" target="_blank">Creative JavaScript Course</a></li>
                <li><a href="/TypeScript_for_Beginners.png" target="_blank">TypeScript for Beginners</a></li>
                <li><a href="/React_Testing.png" target="_blank">React Testing with RTL & Jest</a></li>
            </ul>
        )
    }
]

export const PROJECT_DATA = [
    {
        id: 1,
        title: "SnapDev",
        description: "NextJS, ReactJS, Prisma, MongoDB",
        image: "/images/projects/SnapDev.png",
        tags: ['All', 'Fullstack', 'NextJS', 'ReactJS', 'Prisma', 'MongoDB'],
        gitUrl: "https://github.com/AishwaryaParab/SnapDev-Blog",
        previewUrl: "https://snap-dev-blog.vercel.app/"
    },
    {
        id: 2,
        title: "Movix",
        description: "ReactJS, Redux, Infinite Scrolling, TMDB API",
        image: "/images/projects/Movix.png",
        tags: ['All', 'Frontend', 'ReactJS', 'Redux'],
        gitUrl: "https://github.com/AishwaryaParab/movix",
        previewUrl: "https://aishwaryaparab.github.io/movix/"
    },
    {
        id: 3,
        title: "BlueRockTek",
        description: "NextJS, ReactJS",
        image: "/images/projects/BlueRockTek.png",
        tags: ['All', 'Frontend', 'NextJS'],
        gitUrl: "https://github.com/AishwaryaParab/bluerocktek",
        previewUrl: "https://bluerocktek.in/"
    },
    {
        id: 4,
        title: "Advanced Filtering",
        description: "ReactJS, JavaScript filtering methods",
        image: "/images/projects/AdvancedFiltering.png",
        tags: ['All', 'Frontend', 'ReactJS'],
        gitUrl: "https://github.com/AishwaryaParab/advanced-filtering",
        previewUrl: "https://aishwaryaparab.github.io/advanced-filtering/"
    },
    {
        id: 5,
        title: "Aventek",
        description: "ReactJS",
        image: "/images/projects/Aventek.png",
        tags: ['All', 'Frontend', 'ReactJS'],
        gitUrl: "https://github.com/AishwaryaParab/Aventek",
        previewUrl: "https://aventek.in/"
    },
    {
        id: 6,
        title: "Sushiman",
        description: "HTML, CSS, Vanilla JavaScript",
        image: "/images/projects/Sushiman.png",
        tags: ['All', 'Frontend', 'HTML', 'CSS'],
        gitUrl: "https://github.com/AishwaryaParab/sushiman",
        previewUrl: "https://aishwaryaparab.github.io/sushiman/"
    },
    {
        id: 7,
        title: "Coolors",
        description: "HTML, CSS, Vanilla JavaScript",
        image: "/images/projects/Coolors.png",
        tags: ['All', 'Frontend', 'JavaScript'],
        gitUrl: "https://github.com/AishwaryaParab/coolors",
        previewUrl: "https://aishwaryaparab.github.io/coolors/"
    },
    {
        id: 8,
        title: "Book Landing Page",
        description: "HTML, Tailwind CSS, UI Design",
        image: "/images/projects/BookLandingPage.png",
        tags: ['All', 'Frontend', 'Tailwind', 'Design'],
        gitUrl: "https://github.com/AishwaryaParab/book-landing-page",
        previewUrl: "https://aishwaryaparab.github.io/book-landing-page/"
    },
    {
        id: 9,
        title: "HooBank",
        description: "ReactJS, UI Design",
        image: "/images/projects/HooBank.png",
        tags: ['All', 'Frontend', 'ReactJS', 'Design'],
        gitUrl: "https://github.com/AishwaryaParab/HooBank",
        previewUrl: "https://aishwaryaparab.github.io/HooBank/"
    },
    // {
    //     id: 12,
    //     title: "Travel Pin",
    //     description: "ReactJS, NodeJS, MongoDB, Express, Mapbox",
    //     image: "/images/projects/TravelPin.png",
    //     tags: ['All', 'Fullstack', 'ReactJS', 'NodeJS', 'MongoDB', 'Express', 'Mapbox'],
    //     gitUrl: "https://github.com/AishwaryaParab/travel-pin",
    //     previewUrl: "https://travel-pin-client.onrender.com/"
    // },
]

export const skills = [
    {
        id: 1,
        name: "JavaScript",
        img: javascript
    },
    {
        id: 2,
        name: "TypeScript",
        img: typescript
    },
    {
        id: 3,
        name: "React",
        img: react
    },
    {
        id: 4,
        name: "Next",
        img: next
    },
    {
        id: 5,
        name: "Node",
        img: node
    },
    {
        id: 6,
        name: "MongoDB",
        img: mongodb
    },
    {
        id: 7,
        name: "MySql",
        img: mysql
    },
]

export const experiences = [
    {
        id: 1,
        role: "Senior Software Engineer",
        company: "Persistent Systems",
        period: "Apr 2024 - Present"
    },
    {
        id: 2,
        role: "Software Engineer",
        company: "Persistent Systems",
        period: "Aug 2022 - Apr 2024"
    }
]

export const achievements = [
    {
        metric: "Projects",
        value: "30",
        postfix: "+"
    },
    {
        metric: "Community",
        value: "2.3K",
        postfix: "+"
    },
    {
        metric: "Awards",
        value: "5",
        postfix: "+"
    },
    {
        metric: "Years of Experience",
        value: "2",
        postfix: "+"
    }
]