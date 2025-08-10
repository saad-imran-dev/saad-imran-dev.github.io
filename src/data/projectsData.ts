export interface Project {
  title: string;
  description: string;

  technologies: string[];
  features: string[];

  github: string;
  color: string;
}

export const projects: Project[] = [
  {
    title: "Document Based Rag",
    description:
      "A system that uses Google GenAI LLM with Retrieval-Augmented Generation to answer questions using context from uploaded PDF documents.",
    technologies: ["Python", "LangChain", "ChromaDB", "Google GenAI LLM"],
    features: [
      "Upload any document in PDF format",
      "Use ChromaDB for efficient document storage and retrieval",
      "Use ChromaDB retrieve relevant context from documents",
      "Use Google GenAI LLM to generate responses based on the context",
      "Supports multiple documents",
      "Provides accurate and context-aware responses",
    ],
    github: "https://github.com/muhammadsaad/document-based-rag",
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Jarvis",
    description:
      "An AI assistant with voice interaction, powered by Google GenAI LLM, that can browse the web for information and be extended with additional functionalities",
    technologies: [
      "Python",
      "LangChain",
      "pyttsx3",
      "SpeechRecognition",
      "Google GenAI LLM",
    ],
    features: [
      "Voice-based interaction with the AI assistant",
      "Use Google GenAI LLM for natural language understanding and response generation",
      "Can brose the web for information",
      "Can be extended with additional functionalities",
    ],
    github: "https://github.com/muhammadsaad/jarvis",
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Proxy Server",
    description:
      "A Proxy server extension for any browser. This proxy server includes http caching and blocking of undesirable websites.",
    technologies: ["Python", "Socket Programming"],
    features: [
      "HTTP caching for faster access to frequently visited sites",
      "HTTP blocking to restrict access to undesirable websites",
    ],
    github: "https://github.com/saad-imran-dev/Proxy-server",
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Blood Donation Management System",
    description:
      "A web application to find nearby blood donation centers and book appointments with calendar integration.",
    technologies: [
      "ASP.NET",
      "SQL Server",
      "Bootstrap",
      "C#",
      "Entity Framework",
    ],
    features: [
      "Find nearby blood donation centers with location filtering",
      "Calendar-based appointment booking system",
      "Form validation and user input handling",
      "Center filtering by blood type and availability",
      "Reduced wait times for donors",
      "Improved coordination between donors and centers",
    ],
    github: "https://github.com/muhammadsaad/blood-donation",
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Sorting Algorithm Visualizer",
    description: "A web application to Visualize sorting algorithms.",
    technologies: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap"],
    features: [
      "Upload Custom Dataset",
      "Select from a range of sorting algorithms",
      "Powerful visualization of sorting algorithms",
    ],
    github: "https://github.com/saad-imran-dev/sorting-algorithms-visualizer",
    color: "from-green-500 to-teal-600",
  },
];
