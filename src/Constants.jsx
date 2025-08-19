import {
  BrainCircuit,
  BriefcaseBusiness,
  ClipboardList,
  CodeXml,
  Home,
  Lightbulb,
  Phone,
  User2,
  UserCog2,
} from "lucide-react";

export const words = [
  {
    name: "Ideas",
    image: Lightbulb,
  },
  {
    name: "Inspiration",
    image: BrainCircuit,
  },
  {
    name: "Concepts",
    image: ClipboardList,
  },
  {
    name: "Code",
    image: CodeXml,
  },
];

export const icons = [
  { icon: Home, label: "Home", target: "header" },
  { icon: User2, label: "About", target: "about" },
  { icon: UserCog2, label: "Skills", target: "skills" },
  { icon: ClipboardList, label: "Projects", target: "projects" },
  { icon: BriefcaseBusiness, label: "Work", target: "work" },
  
];

export const skills = {
  "Frontend Development": [
    "HTML",
    "CSS",
    "JavaScript",
    "REACT",
    "Redux",
    "Bootstrap",
    "Tailwind",
    "Framer Motion",
  ],
  "Backend Development": ["Node.js", "Express", "REST API Development"],
  Database: ["MySQL", "PostgreSQL", "MongoDB"],
  Tools: ["Git", "npm"],
};

export const projects = [
  {
    image: "./Project3.png",
    title: "Accessibility Analyzer",
    description:
      "An automated tool that audits webpages for accessibility compliance (WCAG) by scanning live URLs and generating reports.",
    features: [
      <>
        Designed and built with <span className="font-semibold">MERN stack</span> and{" "}
        <span className="font-semibold">client–server architecture</span> for scalability.
      </>,
      <>
        Integrated <span className="font-semibold">axe-core</span> and{" "}
        <span className="font-semibold">Puppeteer</span> to automate WCAG audits and reduce manual testing time.
      </>,
      <>
        Generated <span className="font-semibold">downloadable PDF reports</span> and
        built a <span className="font-semibold">React dashboard</span> with graphs for actionable insights.
      </>,
      <>
        Designed for <span className="font-semibold">developers, QA engineers, and designers</span>{" "}
        to ensure inclusivity and compliance quickly.
      </>,
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "axe-core",
      "Puppeteer",
      "Tailwind CSS",
    ],
    url: "https://accesebility-analyzer.onrender.com/",
    github: "https://github.com/Kashish2402/Accesebility-Analyzer.git",
  },
  {
    image: "./Project2.png",
    title: "ImaZen",
    description:
      "A web application that generates high-quality images from text prompts using an AI-powered external API.",
    features: [
      <>
        Built with <span className="font-semibold">MERN stack</span> for full-stack integration.
      </>,
      <>
        Integrated <span className="font-semibold">Clipdrop API</span> to convert prompts
        into AI-generated images.
      </>,
      <>
        Implemented <span className="font-semibold">JWT authentication</span> and{" "}
        <span className="font-semibold">credit system</span> to manage usage limits.
      </>,
      <>
        Designed a <span className="font-semibold">responsive, mobile-friendly UI</span>{" "}
        with smooth animations using <span className="font-semibold">Framer Motion</span>.
      </>,
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Clipdrop API",
      "Framer Motion",
    ],
    url: "https://imagen-1y5p.onrender.com/",
    github: "https://github.com/Kashish2402/Image-Generator-App.git",
  },
  {
    image: "./Project1.png",
    title: "Travel Story Web App",
    description:
      "A social platform where travelers can share experiences, like posts, and connect globally.",
    features: [
      <>
        Developed with <span className="font-semibold">MERN stack</span> and{" "}
        <span className="font-semibold">RESTful API</span> architecture.
      </>,
      <>
        Implemented <span className="font-semibold">JWT authentication</span>,
        role-based access, and secure image uploads.
      </>,
      <>
        Leveraged <span className="font-semibold">MongoDB</span> for data persistence and{" "}
        <span className="font-semibold">Express.js</span> for backend logic.
      </>,
      <>
        Created a <span className="font-semibold">responsive, mobile-first UI</span> with
        Tailwind CSS for seamless user experience.
      </>,
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Cloudinary",
    ],
    url: "https://travel-story-app-xxsu.onrender.com/dashboard",
    github: "https://github.com/Kashish2402/Travel-Story-App.git",
  },
];


