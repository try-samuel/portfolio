import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Header from "@/components/common/Header";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fiyin - Developer",
  description: "Freelance Full Stack Developer",
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
        </SmoothScroll>
      </body>
    </html>
  );
}
