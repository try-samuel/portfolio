import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { InterTight } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Samuel Adekunle - Full Stack Software Engineer",
  description:
    "Software Engineer, Full Stack Web Developer, and Open Source Enthusiast",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adekunlesamuel.me",
    description: "This is my portfolio website guys, check it out!",
    images: [
      {
        url: "https://i.pinimg.com/564x/7a/1c/1e/7a1c1e8ad44aa5a822d3668f8e60ce25.jpg",
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