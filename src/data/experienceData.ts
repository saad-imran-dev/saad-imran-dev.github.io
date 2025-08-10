export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  color: string;
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Arbisoft",
    location: "Karachi, Pakistan (Hybrid)",
    period: "July 2024 - Present",
    description:
      "Working on an adaptive insurance solution leveraging AI and geospatial data. Developing, testing, and maintaining backend, frontend, and end-to-end testing.",
    achievements: [
      "Created a proof of concept that became the foundation for the frontend system by designing scalable components and reusable UI patterns.",
      "Improved test coverage and deployment confidence by setting up Cypress to validate essential frontend flows.",
      "Built and maintained systems across back-end services, frontend features, and the end-to-end testing framework by writing production-grade code and integrating automated tests.",
    ],
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Trainee Software Developer",
    company: "Contour Software",
    location: "Karachi, Pakistan (On-site)",
    period: "Jan 2024 - April 2024",
    description:
      "Trained in clean code principles, architecture, and REST API design. Worked on both frontend and backend development.",
    achievements: [
      "Developed REST APIs during training exercises using .NET and Entity Framework Core to implement basic CRUD operations and data access.",
      "Created responsive frontend interfaces with HTML, CSS, and jQuery to reinforce UI design and cross-device compatibility skills.",
    ],
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Software Developer Intern",
    company: "Syslabs.ai",
    location: "Karachi, Pakistan (On-site)",
    period: "June 2023 - Aug 2023",
    description:
      "Built a POC to showcase a product to investors. Developed an AI-powered test proctoring and interview platform.",
    achievements: [
      "Developed an AI-powered proctoring system using Express.js and MySQL to automate exam monitoring and data management",
      "Built a responsive frontend with Vite and Redux to manage application state and deliver a smooth user experience",
    ],
    color: "from-purple-500 to-pink-600",
  },
];
