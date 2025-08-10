export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  honors: string[];
  courses: string[];
  color: string;
}

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "National University of Computing and Emerging Sciences",
    location: "Karachi, Pakistan",
    period: "2020 - 2024",
    gpa: "3.36/4.0",
    honors: ["Computer Science Graduate"],
    courses: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Web Development",
      "Software Engineering",
      "Object Oriented Programming",
      "Operating Systems"
    ],
    color: "from-blue-500 to-purple-600"
  }
];

export const certifications = [
  'IELTS 7.5 (English)',
  'TypeScript Expert',
  'React/Next.js Specialist',
  'Node.js/Nest.js Developer',
  'Clean Architecture',
  'Test-Driven Development'
];