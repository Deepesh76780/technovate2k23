import "../styles/globals.css";
import Audio from "./components/backgroundAudio";
import { Chakra_PetchFont } from "../styles/font"
import { MichromaFont } from "../styles/font"
import { OrbitronFont } from "../styles/font"
import { inter } from "../styles/font"
import localFont from "next/font/local"

const cyberway = localFont({
  src: "./cyberway.ttf",
  display: "swap",
  weight: "300",
  variable: "--my-cyberway"
})

const cyberstar = localFont({
  src: "./cyberstar.ttf",
  display: "swap",
  variable: "--my-cyberstar"
})

const glitch = localFont({
  src: "./glitch.ttf",
  display: "swap",
  weight: "300",
  variable: "--my-glitch"
})

const cyberblack = localFont({
  src: "./cyberblack.ttf",
  display: "swap",
  weight: "300",
  variable: "--my-cyberblack"
})

const greek = localFont({
  src: "./greek.ttf",
  display: "swap",
  weight: "300",
  variable: "--my-greek"
})


export const metadata = {
  title: "Technovate | 2024",
  description: "",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${MichromaFont.variable} ${OrbitronFont.variable} ${Chakra_PetchFont.variable}       
      ${cyberway.variable} ${cyberstar.variable} ${cyberblack.variable} ${glitch.variable} ${greek.variable} `}>
        {props.children}
        <Audio />
      </body>
    </html>
  );
}
