export const profile = {
  name: "Carlos Tavares",
  title: "Senior Software Engineer",
  tagline: "Building responsive and intuitive web applications for 6+ years",
  email: "carlos.tavcon@gmail.com",
  phone: "(+52) 3323184407",
  github: "github.com/daksen",
  linkedin: "linkedin.com/in/tavares-carlos",
  location: "Guadalajara, Jalisco, Mexico",
  bio: "Senior Software Engineer with 6+ years of experience crafting responsive and intuitive web applications across startups and enterprise environments. Proficient in React, TypeScript, Next.js, and GraphQL, with a fullstack background that spans Python, Django, and Node.js. I care deeply about code quality — from writing unit tests to conducting thorough code reviews. In my free time, I love to vibe code and experiment with whatever idea comes to mind.",
};

export const experience = [
  {
    company: "EPAM Systems",
    role: "Senior Software Engineer",
    period: "Jul 2023 – Present",
    bullets: [
      "Working on enterprise-scale frontend projects for global clients",
      "Applying best practices in React, TypeScript, and component architecture",
    ],
  },
  {
    company: "Pronto Housing",
    role: "Frontend Developer",
    period: "Aug 2021 – Jun 2023",
    bullets: [
      "Developed key features that helped attract investors and grow the customer base",
      "Wrote clean, organized code using HTML, CSS, JavaScript, Redux.js and React.js",
      "Integrated APIs and web services to retrieve data and improve functionality",
      "Debugged and troubleshot issues to ensure a smooth user experience",
      "Performed code reviews and provided feedback to other developers",
      "Wrote unit tests to ensure code quality, reliability and maintainability",
    ],
  },
  {
    company: "SENSO Mx.",
    role: "Frontend Developer",
    period: "May 2020 – Jul 2021",
    bullets: [
      "Developed and maintained web applications using JavaScript, TypeScript, React.js, Next.js, HTML and CSS",
      "Implemented frontend optimization tasks to improve performance",
      "Performed code reviews and suggested improvement opportunities in the codebase",
    ],
  },
  {
    company: "NÉTICA Robótica Editorial",
    role: "Fullstack Developer",
    period: "Aug 2018 – Jul 2021",
    bullets: [
      "Developed and maintained frontend and backend using HTML, CSS, JavaScript, Python and Django",
      "Assisted with deployment using the AWS CLI",
      "Contributed to technical documentation including system requirements",
      "Collaborated with senior developers to understand project requirements and specifications",
    ],
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "HTML", "CSS", "Redux.js", "REST APIs", "GraphQL"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "Django"],
  },
  {
    category: "Tools & Infra",
    skills: ["Git", "Unit Testing", "Jest", "React Testing Library", "Claude Code"],
  },
];


export const education = [
  {
    institution: "Universidad de Guadalajara",
    degree: "Bachelor's in Computer Science",
    field: "Computer and Information Sciences",
    period: "2016 – 2020",
  },
];

export const certifications = [
  "React Hooks",
  "React: Components, Context, and Accessibility",
  "React: State Management",
  "React: Testing and Debugging",
  "JavaScript (Intermediate) Certificate",
];
