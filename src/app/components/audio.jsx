import React, { useRef, useState, useEffect } from "react";
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";
import { SpeakerXMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

function Audio() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(true);

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
      className="fixed bottom-1 left-2"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <button onClick={toggleAudio}>
        {isPlaying ? (
          <SpeakerWaveIcon className="text-slate-300 h-10 w-10" />
        ) : (
          <SpeakerXMarkIcon className="text-slate-300 h-10 w-10" />
        )}
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
