// Match the primary host configured in Vercel: the apex redirects to www.
export const site = {
  url: "https://www.nkenfa.dev",
  name: "Nkenfa Brandon",
  title: "Nkenfa Brandon | Full-Stack Software Engineer",
  description:
    "Full-stack software engineer in Cameroon building React, Next.js, React Native and Node.js products. Explore mobile, API and Google Cloud work.",
  role: "Full-Stack Software Engineer",
  profiles: [
    "https://github.com/NkenfaB",
    "https://www.linkedin.com/in/nkenfa-brandon-30064b178",
  ],
};

export const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.name,
      alternateName: "nkenfa.dev",
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: `${site.url}/`,
      name: site.title,
      description: site.description,
      inLanguage: "en",
      isPartOf: { "@id": `${site.url}/#website` },
      mainEntity: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: `${site.url}/`,
      jobTitle: site.role,
      description: site.description,
      image: `${site.url}/assets/me2.jpg`,
      homeLocation: { "@type": "Place", name: "Buea, Cameroon" },
      knowsLanguage: ["English", "French"],
      knowsAbout: [
        "Full-stack web development",
        "React",
        "Next.js",
        "TypeScript",
        "React Native mobile development",
        "Node.js",
        "Python",
        "FastAPI",
        "REST APIs",
        "PostgreSQL",
        "Google Cloud Platform",
        "Cloud Run",
        "Docker",
        "Kubernetes",
      ],
      sameAs: site.profiles,
    },
  ],
};
