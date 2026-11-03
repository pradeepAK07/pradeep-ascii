export type Project = {
  name: string;
  tagline: string;
  year: string;
  tags: string[];
  href: string;
  preview: string;
  status: "shipped" | "wip" | "archived";
};

export type Role = {
  company: string;
  role: string;
  period: string;
  client?: string;
  points: string[];
};

export type Education = {
  degree: string;
  school: string;
  period: string;
};

export const site = {
  name: "Pradeep A",
  handle: "pradeep",
  role: "Frontend Engineer",
  tagline:
    "Frontend engineer with 4.5+ years building performant React and Next.js products — real-time platforms, AI document tooling, and Web3 marketplaces.",
  status: "available for work",
  email: "pradeep.arunachalamani@gmail.com",
  location: "Chennai, IN",
  now: "building real-time meeting experiences at Tringapps Research Labs.",
  bio: [
    "I build high-performance, accessible, and visually striking frontend experiences. My approach blends the rigour of modern frontend architecture with a meticulous eye for editorial typography and brutalist aesthetics.",
    "Beyond code, I care about the craft — every interaction intentional, every transition snappy, every interface human-centric. These days I work mostly in React, Next.js, and TypeScript, with a detour into Web3 whenever the problem calls for it.",
  ],
  links: [
    { label: "linkedin", href: "https://www.linkedin.com/in/pradeep-a-549601210" },
    { label: "resume", href: "https://drive.google.com/drive/folders/1j7876_HHMK2MRW8cecqJj_jzPQzrEwKQ" },
    { label: "email", href: "mailto:pradeep.arunachalamani@gmail.com" },
  ],
  projects: [
    {
      name: "KatonMeet",
      tagline:
        "Real-time meeting and streaming platform with AWS Chime chat, polls, live reactions, and low-latency IVS playback for up to 250 participants.",
      year: "2026",
      tags: ["next.js", "aws chime", "aws ivs", "websockets"],
      href: "https://pradeep-dev-portfolio-self.vercel.app/experience",
      preview: "equalizer",
      status: "shipped",
    },
    {
      name: "DocGen AI",
      tagline:
        "AI-assisted document generation platform with template mapping, MedicalLens Q&A, and automated OnlyOffice table-of-contents updates.",
      year: "2025",
      tags: ["react", "micro-frontend", "onlyoffice"],
      href: "https://pradeep-dev-portfolio-self.vercel.app/experience",
      preview: "file-tree",
      status: "shipped",
    },
    {
      name: "RFLXT",
      tagline:
        "Cardano-based NFT marketplace and Web3 gaming platform with in-game purchases, role-based access control, and influencer streaming.",
      year: "2024",
      tags: ["next.js", "cardano", "web3"],
      href: "https://pradeep-dev-portfolio-self.vercel.app/experience",
      preview: "icosahedron",
      status: "shipped",
    },
    {
      name: "Network Rail CRM",
      tagline:
        "Enterprise CRM used by Network Rail to manage customer data and business workflows across five-plus modules, built at Atos.",
      year: "2023",
      tags: ["react", "ant design", "rest"],
      href: "https://pradeep-dev-portfolio-self.vercel.app/experience",
      preview: "split-flap",
      status: "archived",
    },
  ] satisfies Project[],
  stack: {
    logos: ["typescript", "javascript", "node", "html", "css", "vercel", "supabase"],
    skills: [
      "react", "next.js", "typescript", "javascript (es6+)", "graphql", "apollo",
      "rest apis", "node.js", "redux toolkit", "react query", "ant design",
      "tailwindcss", "styled components", "postgres", "webpack", "jest", "playwright",
      "aws", "firebase", "github", "bitbucket",
    ],
  },
  timeline: [
    {
      company: "Tringapps Research Labs",
      role: "Frontend Engineer",
      period: "Mar 2026 — Nov 2026",
      client: "KatonMeet · Real-time meeting & streaming",
      points: [
        "Built AWS Chime meeting modules — chat, polls, live reactions, file sharing — for up to 250 concurrent participants.",
        "Integrated AWS IVS Player for low-latency streaming and built admin analytics dashboards for 5+ org metrics.",
        "Cut virtualized chat render time by 95% (364ms → 18ms) with react-virtuoso and React.memo.",
      ],
    },
    {
      company: "Tringapps Research Labs",
      role: "Frontend Engineer",
      period: "Oct 2024 — Mar 2026",
      client: "DocGen AI · Document generation platform",
      points: [
        "Architected a multi-step document generation workflow inside a micro-frontend architecture.",
        "Shipped the MedicalLens AI module end to end — document selection, questions, instant answers.",
        "Added WebSockets for live generation status, cutting redundant API calls by 20%.",
      ],
    },
    {
      company: "Tringapps Research Labs",
      role: "Frontend Engineer",
      period: "Aug 2023 — Oct 2024",
      client: "RFLXT · Web3 gaming & NFT marketplace",
      points: [
        "Developed Cardano NFT and e-commerce modules, including marketplace, minting, and purchase flows.",
        "Implemented RBAC, influencer subscriptions, and separate SSO flows for the main platform and games portal.",
        "Set up Husky pre-commit hooks enforcing ESLint, Prettier, and line-length limits across the team.",
      ],
    },
    {
      company: "Atos",
      role: "Frontend Engineer",
      period: "Dec 2021 — Jun 2023",
      client: "Network Rail · Enterprise CRM",
      points: [
        "Built responsive React CRM features across 5+ customer data and workflow modules.",
        "Implemented Ant Design tables with sorting, dynamic filters, and server-side pagination for 5000+ records.",
        "Built interactive analytics dashboards supporting data-driven decisions.",
      ],
    },
  ] satisfies Role[],
  education: [
    {
      degree: "Master of Computer Applications",
      school: "Alagappa University",
      period: "2022 — 2024",
    },
    {
      degree: "B.Sc. Computer Science",
      school: "Sri Ramasamy Naidu Memorial College",
      period: "2018 — 2021",
    },
  ] satisfies Education[],
};

export type Site = typeof site;
