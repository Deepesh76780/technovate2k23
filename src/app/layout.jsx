import "../styles/globals.css";
import { Chakra_PetchFont, MichromaFont, OrbitronFont, BlackOps,inter, cyberway, cyberstar, greek, glitch, cyberblack } from "../styles/font"
import Providers from './providers';
import {AudioWrappperDesktop} from "./audioWrapperDesktop";



export const metadata = {
  title: "Technovate | 2024",
  description: "Technovate is the annual technical fest of IIIT Naya Raipur.",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${MichromaFont.variable} ${BlackOps.variable} ${OrbitronFont.variable} ${Chakra_PetchFont.variable}       
      ${cyberway.variable} ${cyberstar.variable} ${cyberblack.variable} ${glitch.variable} ${greek.variable} `}>
        <Providers>
      {props.children}
        <AudioWrappperDesktop />
        </Providers>
      </body>
    </html>
  );
}
