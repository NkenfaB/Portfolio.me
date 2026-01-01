# Professional Portfolio - Nkenfa Brice

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Tech Stack**: Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS
- **Stunning Animations**: Smooth animations powered by Framer Motion
- **Dark/Light Mode**: System-aware theme toggle with next-themes
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop, 4K)
- **SEO Optimized**: Comprehensive metadata and Open Graph tags
- **Type-Safe**: Full TypeScript support with strict type checking
- **Accessibility**: ARIA labels, keyboard navigation, and high contrast
- **Performance**: Optimized bundle size and loading performance

## Sections

1. **Hero Section**: Eye-catching introduction with animated typing effect
2. **About**: Professional summary with 5 years of experience
3. **Skills**: Categorized tech stack showcase (Frontend, Backend, Database, Cloud)
4. **Experience**: Interactive timeline of professional experience
5. **Projects**: Featured projects with tech stack and links
6. **Contact**: Social links and contact information

## Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **React 19**: Latest React features
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **next-themes**: Dark mode support

### Key Technologies Highlighted
- React Native & Redux for mobile development
- Node.js & Express for backend APIs
- FastAPI & Python for high-performance APIs
- GCP (Cloud Run, Cloud SQL, Cloud Storage)
- Kubernetes for orchestration
- MySQL & PostgreSQL databases

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd nextjs-portfolio
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3002](http://localhost:3002) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
nextjs-portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── About.tsx             # About section
│   ├── Contact.tsx           # Contact section
│   ├── Experience.tsx        # Experience timeline
│   ├── Hero.tsx              # Hero section
│   ├── Navbar.tsx            # Navigation with theme toggle
│   ├── Projects.tsx          # Projects showcase
│   ├── Skills.tsx            # Skills grid
│   └── ThemeProvider.tsx     # Theme provider wrapper
├── public/
│   └── assets/               # Images and static files
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, title, and description
   - Modify social links (GitHub, LinkedIn, Email)

2. **About Section** (`components/About.tsx`):
   - Edit professional summary
   - Update education and experience details

3. **Experience** (`components/Experience.tsx`):
   - Add/edit work experience entries
   - Update company names, positions, and highlights

4. **Projects** (`components/Projects.tsx`):
   - Add your projects
   - Update GitHub links and demo URLs

5. **Contact** (`components/Contact.tsx`):
   - Update email address
   - Modify social media links

### Update Metadata

Edit `app/layout.tsx` to update:
- Site title and description
- Open Graph metadata
- Twitter card information

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

### Other Platforms

Build the project and deploy the `.next` directory:

```bash
npm run build
```

## Performance Optimizations

- Next.js Image component for optimized images
- Framer Motion animations with GPU acceleration
- Code splitting and lazy loading
- Tailwind CSS purging for minimal bundle size
- Experimental package imports optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

- **Email**: nkenfa@example.com
- **GitHub**: [NkenfaB](https://github.com/NkenfaB)
- **LinkedIn**: [nkenfa](https://linkedin.com/in/nkenfa)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
