import BackgroundVideo from "../components/backgroundVideo";

const LandingPage = () => {
  return (
    <>
      <BackgroundVideo
        src={"/background_videos/landing_page.mp4"}
        speed={0.7}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-50  z-10 overlay">
        <h1>deepesh agrawal</h1>
      </div>
    </>
  );
};

export default LandingPage;
