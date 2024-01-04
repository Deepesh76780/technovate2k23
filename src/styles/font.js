import { Inter } from "next/font/google";
import { Michroma } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
import { Orbitron } from "next/font/google";
import {Black_Ops_One} from "next/font/google"
import localFont from "next/font/local";

export const cyberway = localFont({
  src: "./cyberway.ttf",
  display: "swap",
  weight: "300",
  variable: "--my-cyberway",
});

export const cyberstar = localFont({
  src: "./cyberstar.ttf",
  display: "swap",
  variable: "--my-cyberstar",
});

export const glitch = localFont({
  src: "./glitch.ttf",
  display: "swap",
  weight: "300",
  variable: "--my-glitch",
});

export const cyberblack = localFont({
  src: "./cyberblack.ttf",
  display: "swap",
  weight: "300",
  variable: "--my-cyberblack",
});

export const greek = localFont({
  src: "./greek.ttf",
  display: "swap",
  weight: "300",
  variable: "--my-greek",
});

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
export const BlackOps = Black_Ops_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-Blackops",
});

export const Chakra_PetchFont = Chakra_Petch({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-Chakra_Petch",
});

export const inter = Inter({ subsets: ["latin"] });
