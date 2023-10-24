import "../styles/globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Technovate|2023",
  description: "",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {props.children}    
        <Footer/>    
      </body>
    </html>
  );
}
