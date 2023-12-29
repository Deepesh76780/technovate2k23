import "../styles/globals.css";
import Audio from "./components/backgroundAudio";
import { Chakra_PetchFont, MichromaFont, OrbitronFont, inter, cyberway, cyberstar, greek, glitch, cyberblack } from "../styles/font"


export const metadata = {
  title: "Technovate | 2024",
  description: "Technovate is the annual technical fest of IIIT Naya Raipur.",
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
