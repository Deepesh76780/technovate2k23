import LandingPage from "./pages/landingPage";
import AboutUsPage from "./pages/aboutUsPage";
import IntroVideo from "./pages/introVideo";
import AboutEvent from "./pages/aboutEvent"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between overflow-x-hidden">
        <LandingPage />
        <AboutUsPage />
        <IntroVideo />
        <AboutEvent/>
    </main>
  );
}
