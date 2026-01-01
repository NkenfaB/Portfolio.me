# Customization Guide

This guide will help you personalize your portfolio to match your identity and preferences.

## Quick Start Checklist

- [ ] Update personal information (name, email, bio)
- [ ] Replace social media links
- [ ] Add your profile picture
- [ ] Update experience timeline
- [ ] Add your projects
- [ ] Customize colors and theme
- [ ] Update metadata for SEO

---

## Personal Information

### 1. Hero Section ([components/Hero.tsx](components/Hero.tsx))

**Lines to update:**

```typescript
// Line 11-13: Update social links
const socialLinks = [
  { icon: FaGithub, href: 'YOUR_GITHUB_URL', label: 'GitHub' },
  { icon: FaLinkedin, href: 'YOUR_LINKEDIN_URL', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:YOUR_EMAIL', label: 'Email' },
];

// Line 34: Update greeting
<span className="...">Hi, my name is</span>

// Line 44: Update your name
<h1>Your Full Name</h1>

// Line 53-62: Update titles
<TypeAnimation
  sequence={[
    'Your Title 1',
    2000,
    'Your Title 2',
    2000,
    // Add more titles...
  ]}
/>

// Line 70: Update description
<p>
  Your professional summary with <span>X years of experience</span>...
</p>
```

---

### 2. About Section ([components/About.tsx](components/About.tsx))

**Update your story:**

```typescript
// Lines 30-70: Edit all paragraphs
<p>
  I'm a <span>Your Role</span> based in Your City, with
  <span>X years of professional experience</span>...
</p>

// Add more paragraphs about:
// - Current work and projects
// - Education and background
// - Technical achievements
// - Personal interests
```

---

### 3. Skills Section ([components/Skills.tsx](components/Skills.tsx))

**Customize your tech stack:**

```typescript
// Lines 23-70: Update skill categories
const skillCategories = [
  {
    title: 'Frontend & Mobile',
    skills: [
      { name: 'Your Skill', icon: SiIcon, color: '#HEX_COLOR' },
      // Add/remove skills
    ],
  },
  // Add/edit categories
];

// Lines 117-119: Update additional skills
{['Skill 1', 'Skill 2', 'Skill 3'].map((skill) => (
  // Your skills appear here
))}
```

**Finding Icons:**
- Browse available icons: [React Icons](https://react-icons.github.io/react-icons/)
- Import needed icons at the top of the file
- Use `Si` prefix for Simple Icons (brand icons)

---

### 4. Experience Section ([components/Experience.tsx](components/Experience.tsx))

**Add your work history:**

```typescript
// Lines 9-78: Define your experiences
const experiences = [
  {
    company: 'Company Name',
    position: 'Your Position',
    period: 'Start Date - End Date',
    location: 'City, Country',
    highlights: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2',
      // Add 4-6 highlights per role
    ],
    tags: ['Tech', 'Stack', 'Used'],
  },
  // Add more experiences
];
```

**Tips for great highlights:**
- Start with action verbs (Built, Architected, Implemented, etc.)
- Include metrics when possible (increased by X%, reduced by Y)
- Highlight technologies and tools used
- Focus on impact and outcomes

---

### 5. Projects Section ([components/Projects.tsx](components/Projects.tsx))

**Showcase your work:**

```typescript
// Lines 10-65: Add your projects
const projects = [
  {
    title: 'Project Name',
    description: 'Detailed description of what the project does...',
    tech: ['React', 'Node.js', 'etc'], // Tech stack used
    github: 'https://github.com/username/repo', // or null if private
    demo: 'https://project-demo.com', // or null if no demo
    featured: true, // Shows "FEATURED" badge
  },
  // Add more projects
];

// Line 121: Update GitHub profile link
href="https://github.com/YOUR_USERNAME"
```

---

### 6. Contact Section ([components/Contact.tsx](components/Contact.tsx))

**Update contact info:**

```typescript
// Lines 12-31: Update social links
const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'YOUR_GITHUB_URL',
    color: 'hover:text-gray-900',
  },
  // Update all links
];

// Line 53: Update contact description
<p>Your message about availability and interests...</p>

// Line 65: Update email
href="mailto:YOUR_EMAIL"
```

---

## Visual Customization

### Colors & Theme

Edit [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  primary: {
    // Update primary color shades
    500: '#YOUR_COLOR',
    600: '#YOUR_DARKER_COLOR',
    // etc...
  },
  dark: {
    bg: '#YOUR_DARK_BG',        // Dark mode background
    card: '#YOUR_DARK_CARD',    // Dark mode cards
    text: '#YOUR_TEXT_COLOR',   // Dark mode text
    heading: '#YOUR_HEADING',   // Dark mode headings
    accent: '#YOUR_ACCENT',     // Dark mode accent
  },
}
```

**Color Tools:**
- [Coolors](https://coolors.co/) - Generate color palettes
- [TailwindColors](https://tailwindcss.com/docs/customizing-colors) - Reference

---

### Logo & Branding

**Update navbar logo** ([components/Navbar.tsx](components/Navbar.tsx)):

```typescript
// Line 48: Change logo text
<motion.a>
  YOUR_INITIALS
</motion.a>

// Or use an image:
<Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
```

---

### Fonts

**Change fonts** ([app/layout.tsx](app/layout.tsx)):

```typescript
// Line 5: Import different Google Font
import { YourFont } from 'next/font/google';

const yourFont = YourFont({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Optional
});

// Line 41: Apply font
<body className={yourFont.className}>
```

**Font Resources:**
- [Google Fonts](https://fonts.google.com/)
- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

---

## SEO & Metadata

Edit [app/layout.tsx](app/layout.tsx):

```typescript
// Lines 8-35: Update metadata
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your compelling description...',
  keywords: ['Keyword1', 'Keyword2'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    url: 'https://your-domain.com',
    title: 'Your Name | Your Title',
    // Update all fields
  },
  twitter: {
    // Update Twitter card info
  },
};
```

---

## Images & Assets

### Add Profile Pictures

1. Place images in `public/assets/`
2. Use in components:

```typescript
import Image from 'next/image';

<Image
  src="/assets/your-photo.jpg"
  alt="Your Name"
  width={400}
  height={400}
  className="rounded-full"
/>
```

### Optimize Images

```bash
# Recommended image formats:
- Profile photos: JPG/WebP (500x500px optimal)
- Project screenshots: PNG/WebP (1200x630px for sharing)
- Icons/logos: SVG (scalable)
```

---

## Animation Customization

### Adjust Animation Speed

Edit individual components:

```typescript
// Slow down animations
transition={{ duration: 1.0 }} // Default is 0.5

// Change delay
transition={{ delay: 0.5 }}

// Disable animations
initial={false}
animate={false}
```

### Custom Animations

Add to [tailwind.config.ts](tailwind.config.ts):

```typescript
animation: {
  'your-animation': 'yourKeyframe 3s ease-in-out infinite',
},
keyframes: {
  yourKeyframe: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  },
}
```

---

## Advanced Customization

### Add New Sections

1. Create new component in `components/`
2. Import in `app/page.tsx`
3. Add to navigation in `components/Navbar.tsx`

Example:

```typescript
// components/NewSection.tsx
export default function NewSection() {
  return (
    <section id="new-section">
      {/* Your content */}
    </section>
  );
}

// app/page.tsx
import NewSection from '@/components/NewSection';

export default function Home() {
  return (
    <>
      {/* Existing sections */}
      <NewSection />
    </>
  );
}
```

### Add Blog/Articles

1. Create `app/blog/page.tsx`
2. Add blog posts in `app/blog/[slug]/page.tsx`
3. Add link in navbar

---

## Testing Your Changes

```bash
# Development mode (hot reload)
npm run dev

# Production build test
npm run build
npm start

# Type checking
npx tsc --noEmit

# Linting
npm run lint
```

---

## Common Issues

### 1. Icons Not Showing
```bash
# Reinstall react-icons
npm install react-icons
```

### 2. Styles Not Updating
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### 3. Images Not Loading
- Check file path is correct
- Ensure image is in `public/` directory
- Use forward slashes `/` in paths

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## Need Help?

If you encounter issues:
1. Check the console for error messages
2. Review the documentation links above
3. Search for similar issues on Stack Overflow
4. Create an issue in your repository

Happy customizing! 🎨
