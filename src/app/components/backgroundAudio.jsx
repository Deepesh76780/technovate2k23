"use client"
import React, { useRef, useState } from "react";
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";
import { SpeakerXMarkIcon } from "@heroicons/react/24/solid";

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
    <>
      <button onClick={toggleAudio}>
          <div className="flex flex-row gap-2 items-center justify-center">
            {isPlaying ? (
              <SpeakerWaveIcon className="text-slate-300 h-4 w-4 md:h-6 md:w-6" />
            ) : (
              <SpeakerXMarkIcon className="text-slate-300 h-4 w-4 md:h-6 md:w-6" />
            )}
           
          </div>
        </button>
        <audio
          ref={audioRef}
          defaultValue={true}
          src="/background_audio/get_you_to_moon.mp3"
          loop
          autoPlay
        />
    </>
  );
}

export default Audio;
