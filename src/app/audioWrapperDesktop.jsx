"use client"
import Image from "next/image";
import Link from "next/link";
import Audio from "./components/backgroundAudio";
import { motion } from "framer-motion";

export const AudioWrappperDesktop = () => {
  return (
    <motion.div
      className="flex flex-row gap-2 fixed top-4 lg:bottom-1 lg:top-auto left-2 lg:left-3 z-20 "
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Audio />
      <Link href="/" >
        <Image src="/logo/logo.png" height={26} width={26} alt="logo" className="h-5  w-5 lg:h-6 lg:w-6" />
      </Link>
    </motion.div>
  );
};
