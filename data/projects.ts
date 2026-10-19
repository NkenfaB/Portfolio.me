export type Project = {
  title: string;
  attribution: string;
  period: string;
  status: string;
  description: string;
  tech: string[];
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
      "Selected contributions delivered through employment, contracts, and internships. Dates show my engagement with the organization, rather than the full lifetime of its products.",
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
        title: "weems.dev, atestly.com & tryscramble.com",
        attribution: "Stied Research · Senior Software Engineer (Contract)",
        period: "Engagement: December 2024 – Present",
        status: "Contract contributions · Web, API and cloud delivery",
        description:
          "Delivered features across React / Next.js interfaces, Node.js / NestJS APIs, and Google Cloud services. Contributions include AI service integration and billing displays for weems.dev, authentication fixes and deployment reliability, and payment integration and two-factor authentication for tryscramble.com. Worked on Docker, Kubernetes, database migrations, and CI/CD across the engagement.",
        tech: [
          "TypeScript",
          "Next.js",
          "NestJS",
          "FastAPI",
          "PostgreSQL",
          "GCP",
          "Docker",
          "Kubernetes",
        ],
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
