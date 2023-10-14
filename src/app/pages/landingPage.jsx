import BackgroundVideo from "../components/backgroundVideo";
import LandingPageContent from "./landingPageContent";

const LandingPage = () => {
  return (
    <>
      <BackgroundVideo
        src={"/background_videos/landing_page.mp4"}
        speed={0.7}
      />
      <LandingPageContent />
    </>
  );
};

export default LandingPage;
