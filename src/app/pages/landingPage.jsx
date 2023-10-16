"use client"
import React from "react";
import BackgroundVideo from "../components/backgroundVideo";
import LandingPageContent from "./landingPageContent";

const LandingPage = () => {

  return (

    <div>
      <BackgroundVideo
        src={"/background_videos/landing_page.mp4"}
        speed={0.7}
      />
      <LandingPageContent />
    </div>

  );
};

export default LandingPage;
