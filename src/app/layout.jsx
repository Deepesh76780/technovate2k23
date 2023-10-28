import "../styles/globals.css";
import Audio from "./components/backgroundAudio";
import { Chakra_PetchFont } from "../styles/font"
import { MichromaFont } from "../styles/font"
import { OrbitronFont } from "../styles/font"
import { inter } from "../styles/font"


export const metadata = {
  title: "Technovate | 2024",
  description: "",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${MichromaFont.variable} ${OrbitronFont.variable} ${Chakra_PetchFont.variable}`}>
        {props.children}
        <Audio />
      </body>
    </html>
  );
}
