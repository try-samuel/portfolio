import { Inter_Tight } from "next/font/google";
import localFont from "next/font/local";

export const InterTight = Inter_Tight({ subsets: ["latin"] });

export const OverusedGrotesk = localFont({
  src: [{ path: "./OverusedGrotesk-VF.woff2", style: "normal" }],
});
