import LandingPage from "./pages/landingPage";
import AboutUsPage from "./pages/aboutUsPage";
import IntroVideo from "./pages/introVideo";
import Wrapper from "./wrapper";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between overflow-x-hidden">
      <Wrapper>
        <LandingPage />
        <AboutUsPage />
        <IntroVideo />
      </Wrapper>
    </main>
  );
}
