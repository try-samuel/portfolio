import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { InterTight } from "@/lib/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  verification: {
    google: "LoPQr96cfszDq0ETtZIr5zkfxpAGEK4XV-cbkzNfUpQ",
    other: {
      pinterest: "82cc1e9d13144eec1b82487daa74f595",
    },
  },
  title: "Adekunle Samuel Fiyinfoluwa",
  description:
    "Software Engineer, Full Stack Web Developer, and Open Source Enthusiast",
  keywords: [
    "samuel",
    "Adekunle Samuel",
    "Adekunle Samuel Fiyinfoluwa",
    "adekunle fiyinfoluwa",
    "Fiyinfoluwa",
    "SamuelFiyinfoluwa",
    "Adekunle Fiyinfoluwa",
    "Samuel Adekunle",
    "FiyinfoluwaSamuel Adekunle",
    "Full Stack Developer",
    "Software Engineer",
    "Open Source Enthusiast",
  ],
  robots: "index, follow",
  authors: [
    {
      name: "Adekunle Samuel Fiyinfoluwa",
      url: "https://portfolio-adekunle-samuel.vercel.app/",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-adekunle-samuel.vercel.app/",
    description: "This is my portfolio website guys, check it out!",
    images: [
      {
        url: "https://i.pinimg.com/736x/b7/c6/50/b7c65051b225e4bcee2a961ee5eebe67.jpg",
        width: 459,
        height: 820,
        alt: "Samuel Adekunle",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        suppressHydrationWarning={true}
        className={`${InterTight.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
