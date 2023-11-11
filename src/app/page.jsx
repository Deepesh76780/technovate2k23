"use client"
import React from "react";
import LandingPage from "./pages/landingPage";
import AboutUsPage from "./pages/aboutUsPage";
import IntroVideo from "./pages/introVideo";
import AboutEvent from "./pages/aboutEvent"
import Footer from "./components/footer";
import Loading from "./pages/animateLoader";


export default function Home() {

  const [loading, setLoading] = React.useState(true);
  const [isPortrait, setIsPortrait] = React.useState(false);

  React.useEffect(() => {
    const handleOrientationChange = (event) => {
      setIsPortrait(event.matches);
    };

    // Check if window is defined (runs only in a browser environment)
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(orientation: portrait)');

      // Initial check
      setIsPortrait(mediaQuery.matches);

      // Attach a listener for changes
      mediaQuery.addEventListener('change', handleOrientationChange);

      // Cleanup the listener on component unmount
      return () => {
        mediaQuery.removeEventListener('change', handleOrientationChange);
      };
    }
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 6000);

  return (

    !isPortrait ?
      <main className="flex flex-col min-h-screen items-center justify-between overflow-x-hidden">
        {
          loading ?
            <Loading /> :
            <>
              <LandingPage />
              <AboutUsPage />
              <IntroVideo />
              <AboutEvent />
              <Footer />
            </>
        }
      </main>
      :
      <h1 className="text-slate-100 flex justify-center min-h-screen flex-row items-center">  please rotate your phone </h1>
  );
}
