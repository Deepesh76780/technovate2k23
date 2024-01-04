import React from "react";
import LandingPageContent from "./landingPageContent";
import { cn } from "../../../@/lib/utils";

const LandingPage = () => {
  return (
    <div>
      <div className={cn("relative h-[100vh] w-screen overflow-hidden")}>
        <video autoPlay loop muted className={cn("w-full h-full object-cover")}>
          <source
            src={"/background_videos/landing_page.mp4"}
            type="video/mp4"
          />
        </video>
      </div>
      <LandingPageContent />
    </div>
  );
};

export default LandingPage;
