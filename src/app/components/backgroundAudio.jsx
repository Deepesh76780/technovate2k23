"use client"
import React, { useRef, useState } from "react";
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";
import { SpeakerXMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from "next/link";

function Audio() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef();


  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      throw new Error("Audio ref is not set");
    }
  };

  return (
    <motion.div
      className="fixed bottom-1 left-4 z-10 md:flex hidden"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <button onClick={toggleAudio}>
        <div className="flex flex-row gap-2 items-center justify-center">
          {isPlaying ? (
            <SpeakerWaveIcon className="text-slate-300 h-6 w-6" />
          ) : (
            <SpeakerXMarkIcon className="text-slate-300 h-6 w-6" />
          )}
          <Link href="/">
            <Image
              src='/logo/logo.png'
              height={26}
              width={26}
              alt='logo'
            />
          </Link>
        </div>
      </button>
      <audio
        ref={audioRef}
        src="/background_audio/get_you_to_moon.mp3"
        loop
        autoPlay
      />
    </motion.div>
  );
}

export default Audio;
