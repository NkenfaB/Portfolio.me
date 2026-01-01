import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nkenfa | Full-Stack Software Engineer',
  description: 'Full-stack software engineer with 5 years of experience building scalable mobile and web applications. Specializing in React Native, Node.js, FastAPI, and GCP.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React Native', 'Node.js', 'FastAPI', 'GCP', 'Cloud Run', 'Kubernetes'],
  authors: [{ name: 'Nkenfa' }],
  creator: 'Nkenfa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Nkenfa | Full-Stack Software Engineer',
    description: 'Full-stack software engineer with 5 years of experience in modern web and mobile development.',
    siteName: 'Nkenfa Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nkenfa | Full-Stack Software Engineer',
    description: 'Full-stack software engineer with 5 years of experience.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
