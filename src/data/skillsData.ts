import {
  Code,
  Database,
  Server,
  Cloud,
  GitBranch,
  TestTube,
  Zap,
  LucideIcon,
  Bot,
} from "lucide-react";

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code,
    color: "from-blue-500 to-purple-600",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Redux/Zustand" },
      { name: "Vite" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-teal-600",
    skills: [
      { name: "Node.js" },
      { name: "Nest.js" },
      { name: "Express.js" },
      { name: ".NET Core" },
      { name: "REST APIs" },
      { name: "Sequelize" },
    ],
  },
  {
    title: "AI",
    icon: Bot,
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "LLMs" },
      { name: "Deep Lerarning" },
      { name: "Langchain" },
      { name: "Langgraph" },
      { name: "Ollama" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "SQL Server" },
    ],
  },
  {
    title: "Testing",
    icon: TestTube,
    color: "from-emerald-500 to-green-600",
    skills: [
      { name: "Jest" },
      { name: "Cypress" },
      { name: "React Testing Library" },
      { name: "Unit Testing" },
      { name: "E2E Testing" },
      { name: "TDD" },
    ],
  },
  {
    title: "Cloud",
    icon: Cloud,
    color: "from-indigo-500 to-blue-600",
    skills: [
      { name: "Docker" },
      { name: "Supabase" },
      { name: "Firebase" },
    ],
  },
  {
    title: "Tools",
    icon: GitBranch,
    color: "from-yellow-500 to-orange-600",
    skills: [
      { name: "VSCode" },
      { name: "WebStorm" },
      { name: "Terminal" },
      { name: "Postman" },
      { name: "Git/GitHub" },
      { name: "Linux/MacOS" },
    ],
  },
  {
    title: "Soft Skills",
    icon: Zap,
    color: "from-pink-500 to-rose-600",
    skills: [
      { name: "Problem Solving" },
      { name: "Self-learning" },
      { name: "Adaptability" },
      { name: "Presentation" },
      { name: "Team Collaboration" },
    ],
  },
];

export const achievements = [
  {
    number: "1+",
    label: "Years of Experience",
  },
  {
    number: "10+",
    label: "Projects Completed",
  },
  {
    number: "15+",
    label: "Technologies Mastered",
  },
];
