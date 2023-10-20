import Image from "next/image";
import React from "react";
import BackgroundVideo from "../components/backgroundVideo";

const IntroVideo = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <BackgroundVideo src={"/background_videos/intro_video.mp4"} speed={1} />
        <Image
          src="/png_images/cityP.png"
          width={800}
          height={500}
          alt="City"
          className="object-cover absolute bottom-0  right-0"
          priority={true}
        />
          <section class="h-fit overflow-hidden">
          <p
            className=" text-center font-Chakra font-extrabold tracking-widest text-6xl text-black "
          >
            ARE YOU READY
          </p>
        </section>
    </div>
  );
};

export default IntroVideo;
