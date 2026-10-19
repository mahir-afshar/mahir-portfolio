import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Mahir Afshar Rohan",
    title: "Building Ideas Into Digital Experiences",
    subtitle: "Aspiring Full-Stack Developer",
    location: "Chattogram, Bangladesh",
    email: "mahirafsher333@gmail.com",
    shortBio:
      "Passionate about crafting responsive web applications, writing clean code, and transforming creative concepts into functional user interfaces.",
    aboutText: [
      "Hello! I'm Mahir Afshar Rohan, an aspiring full-stack developer based in Chattogram, Bangladesh. My journey into web development began with a genuine curiosity about how modern digital products are built and how thoughtful design combined with solid code can solve everyday problems.",
      "I believe the best way to master software development is through deliberate practice and hands-on project building. Rather than just learning concepts in isolation, I continually challenge myself to develop real-world applications that test my problem-solving skills and understanding of full-stack architecture.",
      "My immediate goal is to establish a strong professional foundation as a Full-Stack Developer. I am actively expanding my capabilities across modern frontend frameworks, backend web services, and database integration, with a keen focus on performance, accessibility, and maintainable code.",
    ],
    statusBadge: "Available for junior roles & collaborations",
  },
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/mahir-afshar",
      iconName: "Github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mahir-afshar-rohan/",
      iconName: "Linkedin",
    },
    {
      label: "Email",
      href: "mailto:mahirafsher333@gmail.com",
      iconName: "Mail",
    },
  ],
  skills: [
    {
      name: "Frontend",
      description: "Building responsive, component-driven user interfaces",
      iconName: "Code",
      skills: [
        { name: "HTML5", levelNote: "Semantic & accessible structure" },
        { name: "CSS3", levelNote: "Modern layouts & animations" },
        { name: "JavaScript (ES6+)", levelNote: "Core logic & asynchronous programming" },
        { name: "React", levelNote: "Hooks, state management & component lifecycle" },
        { name: "TypeScript", levelNote: "Type safety & scalable application code" },
      ],
    },
    {
      name: "Styling",
      description: "Crafting polished, consistent visual designs",
      iconName: "Palette",
      skills: [
        { name: "Tailwind CSS", levelNote: "Utility-first design & responsive themes" },
      ],
    },
    {
      name: "Frameworks",
      description: "Full-stack web application development",
      iconName: "Boxes",
      skills: [
        { name: "Next.js", levelNote: "App Router, SSR, SEO & optimized routing" },
      ],
    },
    {
      name: "Backend",
      description: "Server-side logic, REST APIs & data persistence",
      iconName: "Server",
      skills: [
        { name: "Node.js", levelNote: "Runtime environment & package ecosystem" },
        { name: "Express.js", levelNote: "RESTful routing & server middleware" },
        { name: "MongoDB", levelNote: "Document database & schema modeling" },
      ],
    },
    {
      name: "Tools & Workflow",
      description: "Development tooling, version control & build workflows",
      iconName: "Wrench",
      skills: [
        { name: "Git", levelNote: "Version control & branch management" },
        { name: "GitHub", levelNote: "Collaboration, open source & repository hosting" },
        { name: "Vite", levelNote: "Fast modern frontend tooling & HMR" },
      ],
    },
  ],
  projects: [
    {
      id: "devconf-2026",
      title: "DevConf 2026",
      subtitle: "Tech Conference Landing Page",
      description:
        "A responsive event landing platform designed for a modern developer conference, featuring keynote speaker highlights, schedule overviews, and mobile-first layouts.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      repoUrl: "https://github.com/mahir-afshar/B14-A01",
      liveUrl: "https://mahir-afshar.github.io/B14-A01/",
      image: "/projects/devconf-preview.svg",
      status: "Live & Deployed",
    },
    {
      id: "dev-stack-builder",
      title: "Dev Stack Builder",
      subtitle: "Developer Tooling Configuration App",
      description:
        "An interactive web application helping developers explore, select, and organize their ideal modern software engineering stacks and development workflows.",
      tags: ["JavaScript", "React", "Tailwind CSS", "Vite"],
      repoUrl: "https://github.com/mahir-afshar/B14-A05",
      liveUrl: "https://b14-assignment05.netlify.app/",
      image: "/projects/devstack-preview.svg",
      status: "Live & Deployed",
    },
    {
      id: "fit-log",
      title: "Fit Log",
      subtitle: "Workout & Health Routine Tracker",
      description:
        "A full-stack fitness and wellness activity tracker designed to log daily exercise sessions, measure consistency, and track health milestones over time.",
      tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
      repoUrl: null, // Repository and live demo URLs not yet confirmed
      liveUrl: null,
      image: "/projects/fitlog-preview.svg",
      isPlaceholderUrl: true,
      status: "In Development • URLs Pending",
    },
  ],
};
