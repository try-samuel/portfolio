import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Header from "@/components/common/Header";
import JsonLd from "@/components/JsonLd";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fiyin.ng"),
  title: {
    default: "Adekunle Samuel Fiyinfoluwa",
    template: "%s | Adekunle Samuel Fiyinfoluwa",
  },
  description:
    "Samuel, A Full-stack Software Engineer, Full Stack Web Developer, and Open Source Enthusiast. Building products that scale in the modern web.",
  keywords: [
    "Adekunle Samuel",
    "Adekunle Fiyinfoluwa",
    "Samuel Adekunle",
    "Fiyinfoluwa Samuel",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "NestJS Developer",
    "GraphQL Developer",
    "API Developer",
    "Web App Developer",
    "Progressive Web Apps (PWA)",
    "UI/UX Developer",
    "Tailwind CSS Developer",
    "Headless CMS Developer",
    "JAMstack Developer",
    "Software Architect",
    "Mobile App Developer",
    "React Native Developer",
    "Expo Developer",
    "Cross-Platform Developer",
    "Web Performance Optimization",
    "Server-Side Rendering (SSR)",
    "Static Site Generation (SSG)",
    "Cloud Developer",
    "Firebase Developer",
    "Supabase Developer",
    "Vite Developer",
    "ESBuild Expert",
    "T3 Stack Developer",
    "Prisma ORM Developer",
    "Web Security Engineer",
    "Open Source Contributor",
    "Remote Software Engineer",
    "Tech Enthusiast",
    "Freelance Web Developer",
    "Software Consultant",
    "DevOps for Developers",
    "CI/CD for Web Development",
    "Vercel Deployment Expert",
    "Netlify Developer",
    "AWS for Web Developers",
    "Docker for Web Apps",
    "Microservices Developer",
    "REST API Developer",
    "Full Stack TypeScript Developer",
    "React Query Expert",
    "Zustand State Management",
    "TanStack Developer",
    "Software Scalability",
    "State Management Expert",
    "Monorepo Development",
    "Turborepo Developer",
    "Bun.js Developer",
    "Edge Computing Engineer",
  ],
  authors: [{ name: "Adekunle Samuel Fiyinfoluwa", url: "https://fiyin.ng" }],
  creator: "Adekunle Samuel Fiyinfoluwa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fiyin.ng",
    title: "Adekunle Samuel Fiyinfoluwa",
    description: "This is my portfolio website guys, check it out!",
    siteName: "Adekunle Samuel Fiyinfoluwa",
    images: [
      {
        url: "https://i.pinimg.com/736x/b7/c6/50/b7c65051b225e4bcee2a961ee5eebe67.jpg",
        width: 459,
        height: 820,
        alt: "Samuel Adekunle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adekunle Samuel Fiyinfoluwa",
    description: "This is my portfolio website guys, check it out!",
    images: [
      "https://i.pinimg.com/736x/b7/c6/50/b7c65051b225e4bcee2a961ee5eebe67.jpg",
    ],
    creator: "@try_samuell",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.className} antialiased bg-background text-foreground`}>
        <SmoothScroll>
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <JsonLd />
        </SmoothScroll>
      </body>
    </html>
  );
}
