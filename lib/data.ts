export const profile = {
  name: "Carlos Tavares",
  title: "Senior Software Engineer",
  email: "carlos.tavcon@gmail.com",
  phone: "(+52) 3323184407",
  github: "github.com/daksen",
  linkedin: "linkedin.com/in/tavares-carlos",
  location: "Guadalajara, Jalisco, Mexico",
  bio: [
    "I'm a passionate software engineer with 7+ years of experience with a strong focus on building modern, user-friendly web applications. JavaScript is my go-to language, and I'm also skilled in TypeScript, React, Python, and Django. As a self-taught developer, I'm always looking for ways to improve my skills and stay up-to-date with the latest tech trends.",
    "I love Vibe Coding sessions, playing Padel, and listening to music. I believe curiosity, adaptability, and a positive attitude are essential for both personal and professional growth — and I'm excited to bring that energy to new projects and keep learning along the way!",
  ],
};

export const interests = ["Vibe Coding", "Playing Padel", "Listening to music"];

export const experience = [
  {
    company: "EPAM Systems",
    role: "Senior Software Engineer",
    period: "Jul 2023 – Present",
    bullets: [
      "Developed and maintained scalable frontend applications using React, Next.js, TypeScript, and React Native across web and mobile platforms.",
      "Built internal tools, dashboards, and e-commerce-style workflows, improving operational efficiency and user experience.",
      "Implemented responsive and accessible UI using design systems, Tailwind, and reusable component libraries.",
      "Integrated APIs via typed SDKs and proxy layers, handling authentication, loading states, and error management.",
      "Optimized performance using server components, code splitting, and efficient data-fetching strategies.",
      "Worked in monorepo environments (Nx/Yarn), promoting code reuse and consistency across applications.",
      "Contributed to mobile development with React Native (Expo), aligning UX with web platforms.",
      "Led and supported frontend migrations to modern architectures and CMS platforms (e.g., headless cloud-based systems).",
      "Collaborated with cross-functional teams (design, product, backend) to deliver high-quality features on time.",
      "Improved testing practices by migrating and optimizing test suites to modern frameworks (e.g., React Testing Library).",
      "Diagnosed and resolved performance issues, bugs, and integration challenges in complex systems.",
      "Participated in code reviews and best practices enforcement, ensuring maintainable and high-quality code.",
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

export type Skill = {
  name: string;
  slug: string;
  color: string;
};

export type SkillGroup = {
  category: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
      { name: "Python", slug: "python", color: "3776AB" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
      { name: "React Native", slug: "react", color: "61DAFB" },
      { name: "Redux", slug: "redux", color: "764ABC" },
      { name: "GraphQL", slug: "graphql", color: "E10098" },
      { name: "TailwindCSS", slug: "tailwindcss", color: "06B6D4" },
      { name: "Sass", slug: "sass", color: "CC6699" },
      { name: "Bootstrap", slug: "bootstrap", color: "7952B3" },
      { name: "HTML5", slug: "html5", color: "E34F26" },
      { name: "CSS", slug: "css", color: "1572B6" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", slug: "nodedotjs", color: "339933" },
      { name: "Express", slug: "express", color: "FFFFFF" },
      { name: "Django", slug: "django", color: "44B78B" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Claude Code", slug: "anthropic", color: "D97757" },
      { name: "Cursor", slug: "cursor", color: "FFFFFF" },
      { name: "Git", slug: "git", color: "F05032" },
      { name: "Linux", slug: "linux", color: "FCC624" },
    ],
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

export type Certification = {
  name: string;
  issuer: string;
  issuedDate?: string;
  credentialId?: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "Al Fluency Framework & Foundations",
    issuer: "Anthropic",
    issuedDate: "May 2026",
    credentialId: "oaii6hnp737u",
    url: "https://verify.skilljar.com/c/oaii6hnp737u",
  },
  {
    name: "Claude 101",
    issuer: "Anthropic",
    issuedDate: "Mar 2026",
    credentialId: "7ogkf4vfm2c8",
    url: "https://verify.skilljar.com/c/7ogkf4vfm2c8",
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    issuedDate: "Mar 2026",
    credentialId: "ka6x8o7q76n8",
    url: "https://verify.skilljar.com/c/ka6x8o7q76n8",
  },
  {
    name: "React: Software Architecture",
    issuer: "LinkedIn",
    issuedDate: "Feb 2025",
    url: "https://www.linkedin.com/learning/certificates/a092f7668bb8eff7895ff4f0c325485b1717cae12fb3a0e9c93b49a43803edd2",
  },
  {
    name: "React: Securing Applications",
    issuer: "LinkedIn",
    issuedDate: "Feb 2025",
    url: "https://www.linkedin.com/learning/certificates/3884d28883a72b1058c2a657e9c89387568384318bacc6eb8488470ee7eff92b",
  },
  {
    name: "React: Design Patterns",
    issuer: "LinkedIn",
    issuedDate: "Aug 2023",
    url: "https://www.linkedin.com/learning/certificates/ab32b1cda79e7612e1fc4de73f87f0b3f674aaee19a2255a55ac841f881cb33d",
  },
];
