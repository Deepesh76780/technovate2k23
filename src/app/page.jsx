"use client"
import React from 'react';
import useOrientation from '../app/hooks/useOrientation';
import LandingPage from '../app/pages/landingPage';
import AboutUsPage from '../app/pages/aboutUsPage';
import IntroVideo from '../app/pages/introVideo';
import AboutEvent from '../app/pages/aboutEvent';
import Footer from '../app/components/footer';
import Loading from '../app/pages/animateLoader';

export default function Home() {
  const isPortrait = useOrientation();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    !isPortrait ? (
      <main className="flex flex-col min-h-screen items-center justify-between overflow-x-hidden">
        {loading ? (
          <Loading />
        ) : (
          <>
            <LandingPage />
            <AboutUsPage />
            <IntroVideo />
            <AboutEvent />
            <Footer />
          </>
        )}
      </main>
    ) : (
      <h1 className="text-slate-100 flex justify-center min-h-screen flex-row items-center">
        Please rotate your phone
      </h1>
    )
  );
}
