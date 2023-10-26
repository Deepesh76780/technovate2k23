import "../styles/globals.css";
import { Inter } from "next/font/google";
import Audio from "./components/backgroundAudio";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Technovate | 2024",
  description: "",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {props.children}   
        <Audio />
      </body>
    </html>
  );
}
