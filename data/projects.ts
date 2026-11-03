export type Project = {
  title: string;
  attribution: string;
  period: string;
  status: string;
  description: string;
  tech: string[];
  contribution?: string;
  highlights?: string[];
  github?: string;
  website?: string;
};

// Date evidence and attribution notes: docs/project-history.md.
// Original project dates are independent of maintenance and portfolio updates.
export const projectGroups: {
  id: string;
  title: string;
  description: string;
  projects: Project[];
}[] = [
  {
    id: "personal-projects",
    title: "Personal projects",
    description:
      "Independent builds and research. Dates mark the earliest recorded project work; development and maintenance may continue afterward.",
    projects: [
      {
        title: "Lively — Cough Screening Research",
        attribution: "Personal research · Mobile and ML development",
        period: "Original research: April 2026 · Android app: May 2026",
        status: "Research prototype · Google Play approval pending",
        description:
          "Built an Android research prototype that records cough samples, runs an on-device TensorFlow Lite model, and supports optional history sync. The project spans a Python ML pipeline, an Expo / React Native app, and a Next.js website with an Android download. Research use only; not a medical diagnosis.",
        tech: [
          "React Native",
          "Expo",
          "TypeScript",
          "TensorFlow Lite",
          "Python",
          "Supabase",
          "Next.js",
        ],
        github: "https://github.com/NkenfaB/lively_app",
        website: "https://lively-website-five.vercel.app/",
      },
      {
        title: "Secure Messenger",
        attribution: "Personal project · Python and cryptography",
        period: "Original project: February 2024",
        status: "Cryptography demo · Continued improvements",
        description:
          "Built a Flask and SQLite messaging prototype exploring RSA encryption and digital signatures. The refreshed interface supports account creation, contact selection, message exchange, and signature verification. Keys are managed by the server; this is a learning demo, not an end-to-end encrypted production messenger.",
        tech: ["Python", "Flask", "SQLite", "RSA", "HTML/CSS"],
        github: "https://github.com/NkenfaB/Secure-Messaging",
      },
    ],
  },
  {
    id: "professional-projects",
    title: "Company & contract work",
    description:
      "Selected contributions delivered through employment, contracts, and internships. Dates show my engagement with the organization, rather than the full lifetime of its products. Contribution percentages are my estimates of the work delivered in each area, not ownership shares or independently audited measures.",
    projects: [
      {
        title: "Yoba & YobaHome",
        attribution:
          "Afriknetworks Sarl · Full-Stack Developer and Mobile Engineer",
        period: "Engagement: March 2025 – Present",
        status: "Company products · Yoba live on Android and iOS",
        description:
          "Develop and maintain Yoba mobile and web features, including responsive interfaces, Redux state management, payments, notifications, and release delivery. For YobaHome, implemented mobile and web workflows for authentication, property browsing, reservations, messaging, and host publishing, with backend integration continuing. These are contributions to Afriknetworks products.",
        tech: [
          "React Native",
          "React",
          "Next.js",
          "Redux",
          "API Integration",
          "Mobile Payments",
        ],
        website: "https://yoba.app",
      },
      {
        title: "WEEMS — Scientific Workflow Workspace",
        attribution: "Stied Research · Senior Software Engineer (Contract)",
        period: "Engagement: December 2024 – Present",
        status: "Contract contribution · Public product site available",
        contribution: "Estimated contribution: 30% frontend · 80% backend",
        description:
          "An AI-assisted workspace for scientific computing, reproducible notebook workflows, and team collaboration. Through Stied Research, contributed frontend features and substantial backend engineering across agent execution, collaborative notebooks, compute sessions, billing, and cloud delivery.",
        highlights: [
          "AI agents: built and maintained FastAPI integration with LangGraph and LangChain Deep Agents, including streaming, persistent checkpoints, subagents, approvals, and permission-aware tool execution through a canonical registry and MCP integrations.",
          "Collaboration and data: developed Socket.IO / Yjs notebook synchronization, durable snapshots and recovery workflows, with PostgreSQL, SQLAlchemy / Alembic, Redis, and cloud storage services.",
          "Cloud and compute: contributed Cloud Run and GKE session workflows, Cloud SQL migrations through deployment jobs, GCS storage, workload identity, and scheduled dispatch using Cloud Tasks / Cloud Scheduler.",
          "Product services: implemented quota and wallet controls, Stripe subscription webhooks, JWT / Google OAuth flows, and Resend notification preferences and delivery workflows.",
        ],
        tech: [
          "Python",
          "FastAPI",
          "Next.js",
          "TypeScript",
          "LangGraph",
          "LangChain Deep Agents",
          "PostgreSQL",
          "Redis",
          "Yjs",
          "Google Cloud",
          "Kubernetes",
        ],
        website: "https://www.weems.dev/",
      },
      {
        title: "Greft — Messaging for AI Agents",
        attribution: "Stied Research · Senior Software Engineer (Contract)",
        period: "Engagement: December 2024 – Present",
        status: "Contract contribution · Public preview",
        contribution: "Estimated contribution: 80% frontend · 80% backend",
        description:
          "A communication platform that gives AI agents persistent addresses and mailboxes across sessions, machines, and runtimes. Contributed extensively to both the frontend and backend as part of the Stied Research engagement.",
        tech: [
          "Frontend Engineering",
          "Backend Engineering",
          "AI Agent Communication",
        ],
        website: "https://www.greft.ai/",
      },
      {
        title: "Attestly — Verifiable Proof of Presence",
        attribution: "Stied Research · Senior Software Engineer (Contract)",
        period: "Engagement: December 2024 – Present",
        status: "Contract contribution · Public product site available",
        contribution: "Estimated contribution: 80% frontend · 80% backend",
        description:
          "The product at atestly.com, currently branded Attestly, issues portable, tamper-evident proof-of-presence records for attendance verification. Contributed extensively to frontend and backend delivery through Stied Research.",
        tech: [
          "Frontend Engineering",
          "Backend Engineering",
          "Attendance Verification",
        ],
        website: "https://www.atestly.com/",
      },
      {
        title: "Scramble — tryscramble.com",
        attribution: "Stied Research · Senior Software Engineer (Contract)",
        period: "Engagement: December 2024 – Present",
        status:
          "Contract contribution · Public site unavailable at last check",
        contribution: "Estimated contribution: 80% backend",
        description:
          "Contributed substantial backend engineering through Stied Research, including payment-provider integration and two-factor authentication. The project is retained as professional work; its former public website returned 404 during the November 2026 review.",
        tech: [
          "Backend Engineering",
          "Payment Integration",
          "Two-Factor Authentication",
        ],
      },
      {
        title: "CommonLedge",
        attribution: "Stied Research · Senior Software Engineer (Contract)",
        period: "Engagement: December 2024 – Present",
        status: "Contract contribution · Public product site available",
        contribution: "Estimated contribution: 30% overall",
        description:
          "A shared workspace where people and AI agents open problems, contribute submissions, and review results. Contributed to the product as part of the Stied Research team.",
        tech: ["Product Engineering", "Team Delivery"],
        website: "https://www.commonledge.com/",
      },
      {
        title: "Payment Services & Client Websites",
        attribution: "Camsol Technologies · Full-Stack Developer",
        period: "Engagement: June 2022 – August 2023",
        status: "Company and client delivery",
        description:
          "Built payment gateway services with Python / Flask, containerized microservices with Docker, and documented APIs with Swagger. Developed responsive websites and backend services while collaborating with colleagues and clients on requirements and delivery.",
        tech: ["React", "Python", "Flask", "Docker", "Swagger"],
      },
      {
        title: "E-Learning, Jobs & Commerce Platform",
        attribution: "AICS Cameroon · Software Development Intern",
        period: "Internship: August – September 2020",
        status: "Internship project",
        description:
          "Developed a Java web platform for e-learning, job listings, and e-commerce within the school, with MySQL persistence. Implemented client and server features as part of an internship at the African Institute of Computer Sciences in Yaounde.",
        tech: ["Java", "MySQL", "JavaScript", "HTML/CSS"],
      },
    ],
  },
];
