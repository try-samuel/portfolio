

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Adekunle Samuel Fiyinfoluwa for collaborations, job opportunities, or just to say hi.",
};

import ContactContent from "@/components/contact/ContactContent";

export default function ContactPage() {
  return <ContactContent />;
}
