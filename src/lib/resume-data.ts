/**
 * Resume data for Spencer Craigie
 * Based on portfolio information and professional experience
 */

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url?: string;
  technologies: string[];
  highlights: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string | null;
  credentialId?: string;
}

export interface Profile {
  id: string;
  name: string;
  title: string;
  email: string;
  location: string;
  summary: string;
  website: string;
  github: string;
  linkedin: string;
}

export const profile: Profile = {
  id: "profile-1",
  name: "Spencer Craigie",
  title: "Full Stack Software Engineer",
  email: "contact@spencercraigie.com",
  location: "Moscow, Idaho",
  summary:
    "Full Stack Software Engineer with expertise in API development, web applications, and developer tooling. Passionate about creating efficient solutions and excellent developer experiences.",
  website: "https://www.spencercraigie.com",
  github: "https://github.com/sscraigie",
  linkedin: "https://www.linkedin.com/in/spencercraigie/",
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "Software Engineer",
    company: "Lightcast",
    location: "Moscow, Idaho",
    startDate: "2022-07",
    endDate: null,
    description:
      "Developing and maintaining full-stack applications and API solutions for labor market analytics platform.",
    highlights: [
      "Built and maintained scalable web applications using modern frameworks",
      "Designed and implemented RESTful APIs following OpenAPI standards",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
    ],
  },
  {
    id: "exp-2",
    title: "API Solutions Architect",
    company: "Lightcast",
    location: "Moscow, Idaho",
    startDate: "2021-11",
    endDate: "2022-07",
    description:
      "Architected and designed API solutions for enterprise clients, focusing on developer experience and API standards.",
    highlights: [
      "Designed comprehensive API solutions for enterprise clients",
      "Created technical documentation and API specifications",
      "Provided technical guidance on API best practices and implementation",
    ],
  },
  {
    id: "exp-3",
    title: "Technical Assistant",
    company: "Washington State University",
    location: "Pullman, Washington",
    startDate: "2019-09",
    endDate: "2020-04",
    description:
      "Work with the Psychology Department to ensure all technology is in working order and develop resources for experiments.",
    highlights: [
      "Saved the department over $14,000 in computer upgrades in the first semester of implementation from developing a TPM alternative.",
      "Managed technology infrastructure for research experiments",
      "Developed custom software solutions for department needs",
    ],
  },
  {
    id: "exp-4",
    title: "Network Administrator",
    company: "Rodeo Internet",
    location: "Clarkston, Washington",
    startDate: "2018-05",
    endDate: "2018-08",
    description:
      "Managed the ISP network for the Lewiston Clarkston valley and developed customer accounts.",
    highlights: [
      "Took on a local network installation project that brought in over $12,000 in revenue.",
      "Maintained network infrastructure and customer systems",
      "Provided technical support and troubleshooting",
    ],
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Science",
    field: "Computer Science",
    institution: "Washington State University",
    location: "Pullman, Washington",
    startDate: "2017-08",
    endDate: "2021-05",
  },
];

export const skills: Skill[] = [
  {
    id: "skill-1",
    name: "TypeScript",
    category: "Programming Languages",
    proficiency: "Advanced",
  },
  {
    id: "skill-2",
    name: "JavaScript",
    category: "Programming Languages",
    proficiency: "Advanced",
  },
  {
    id: "skill-3",
    name: "Python",
    category: "Programming Languages",
    proficiency: "Intermediate",
  },
  {
    id: "skill-4",
    name: "React",
    category: "Frameworks & Libraries",
    proficiency: "Advanced",
  },
  {
    id: "skill-5",
    name: "Next.js",
    category: "Frameworks & Libraries",
    proficiency: "Advanced",
  },
  {
    id: "skill-6",
    name: "Node.js",
    category: "Frameworks & Libraries",
    proficiency: "Advanced",
  },
  {
    id: "skill-7",
    name: "RESTful APIs",
    category: "API Development",
    proficiency: "Advanced",
  },
  {
    id: "skill-8",
    name: "OpenAPI/Swagger",
    category: "API Development",
    proficiency: "Advanced",
  },
  {
    id: "skill-9",
    name: "Git",
    category: "Tools & Technologies",
    proficiency: "Advanced",
  },
  {
    id: "skill-10",
    name: "Tailwind CSS",
    category: "Frameworks & Libraries",
    proficiency: "Advanced",
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "Daily UI Challenge",
    description:
      "100-day challenge to practice frontend development with daily UI components and designs.",
    url: "https://dailyui.spencercraigie.com",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    highlights: [
      "Completed 100 days of UI design challenges",
      "Built responsive and interactive components",
      "Demonstrated proficiency in modern web technologies",
    ],
  },
  {
    id: "proj-2",
    name: "Speed Square",
    description: "Interactive web application for construction calculations.",
    url: "https://speedsquare.spencercraigie.com",
    technologies: ["React", "TypeScript", "Web APIs"],
    highlights: [
      "Built practical tool for construction professionals",
      "Implemented complex mathematical calculations",
    ],
  },
  {
    id: "proj-3",
    name: "Todo Application",
    description: "Modern task management application with clean UI.",
    url: "https://todo.spencercraigie.com",
    technologies: ["React", "Next.js", "TypeScript"],
    highlights: [
      "Implemented full CRUD operations",
      "Created intuitive user interface",
    ],
  },
  {
    id: "proj-4",
    name: "Ask Spencer",
    description: "Interactive Q&A application powered by AI.",
    url: "https://ask.spencercraigie.com",
    technologies: ["Next.js", "AI/ML APIs", "TypeScript"],
    highlights: [
      "Integrated AI capabilities",
      "Built conversational interface",
    ],
  },
];

export const certifications: Certification[] = [];
