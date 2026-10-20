# Nkenfa Brandon — Portfolio

Personal portfolio for web, mobile, API, and cloud engineering work.

**Live site:** [nkenfa-brandon.vercel.app](https://nkenfa-brandon.vercel.app/)

Built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, and next-themes.

## Page structure

1. Portrait introduction and links to selected work and contact.
2. Personal projects and company/contract contributions, with separate attribution and original dates.
3. Compact skill categories with five-star experience ratings and keyboard navigation.
4. Career timeline with expandable contributions and earlier internships.
5. About, engineering focus, and education.
6. Email, copy-address action, and professional links.

The design includes light/dark themes, animated button treatments, section reveals, a scroll progress indicator, and a mobile navigation menu. Each section has a distinct royal blue background: connected particles, drifting geometry, a circuit grid, rising signals, orbital dots, or expanding rings. The pause button beside the theme toggle remembers your background-motion preference. Backgrounds pause off-screen and in hidden tabs, release inactive canvas buffers, and cap drawing at 30fps. Motion respects `prefers-reduced-motion`. Core content renders without JavaScript; category switching and the mobile menu require JavaScript.

## Local development

Use Node.js 20.19+ and npm. No environment variables are required for the portfolio.

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). To choose another port:

```bash
npm run dev -- --port 3002
```

Production build and local preview:

```bash
npm run build
npm start
```

## Editing content

| Content | Source |
| --- | --- |
| Projects, ownership, original dates, links | `data/projects.ts` |
| Skill categories and ratings | `data/skills.ts` |
| Professional experience | `data/experience.ts` |
| Introduction and portrait | `components/Hero.tsx`, `public/assets/me2.jpg` |
| About and education | `components/About.tsx` |
| Email and social links | `components/Contact.tsx` |
| Colors, layout, transitions, responsive styles | `app/globals.css` |
| Section backgrounds and pause preference | `components/SectionAtmosphere.tsx` |
| Shared motion, reveals, action links | `components/PortfolioUI.tsx` |
| SEO and social metadata | `app/layout.tsx` |

Keep personal project dates separate from later maintenance dates. Professional dates describe the engagement with an organization, not the lifetime of its products. Date evidence is recorded in [docs/project-history.md](docs/project-history.md).

The root `components/` directory is used by `app/page.tsx`.

## Deployment

Vercel is connected to this repository. Pushes to `main` deploy the production site; other branches receive preview deployments. The production URL is the link above.

## Verification

The redesign passed a production build and Chromium checks in light and dark themes at 1440, 1024, 768, 390, 360, and 320px. Checks covered all 24 ratings, both project categories, original date and link preservation, expandable content, keyboard tabs, mobile navigation, theme switching, email copying, reduced motion, and visible core content without JavaScript. Background checks also verified real frame changes, pause/resume, off-screen buffer release, hidden-tab stopping, saved preferences, and static artwork with reduced motion. Other browser engines have not been checked in this pass.

## Contact

- [Email](mailto:nkenfabrandon71@gmail.com)
- [GitHub](https://github.com/NkenfaB)
- [LinkedIn](https://www.linkedin.com/in/nkenfa-brandon-30064b178)
