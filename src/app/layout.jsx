import "../styles/globals.css";
import { Inter } from "next/font/google";
import Audio from "./components/backgroundAudio";
import {Michroma} from "next/font/google"
import {Chakra_Petch} from "next/font/google"
import {Orbitron} from "next/font/google"

const MichromaFont = Michroma({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
    variable:'--font-Michroma'
})

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Technovate | 2024",
  description: "",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${MichromaFont.variable}`}>
        {props.children}   
        <Audio />
      </body>
    </html>
  );
}
