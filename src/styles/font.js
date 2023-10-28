import { Inter } from "next/font/google";
import { Michroma } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
import { Orbitron } from "next/font/google";

export const MichromaFont = Michroma({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-Michroma",
});

export const OrbitronFont = Orbitron({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-Orbitron",
});

export const Chakra_PetchFont = Chakra_Petch({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-Chakra_Petch",
});

export const inter = Inter({ subsets: ["latin"] });
