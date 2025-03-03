import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects • Samuel Adekunle",
  description: "A collection of all my projects",
  openGraph: {
    title: "Adekunle Samuel Fiyinfoluwa",
    description:
      "This here is my portfolio You are lucky to see this because you get to see who I am in the tech space and explore all my projects for free",
    images:
      "https://i.pinimg.com/736x/b8/25/29/b825290411f0ca77c8c51e8440748da7.jpg",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
