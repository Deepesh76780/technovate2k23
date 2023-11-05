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

  setTimeout(() => {
    setLoading(false);
  }, 6000);

  return (
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
  );
}
