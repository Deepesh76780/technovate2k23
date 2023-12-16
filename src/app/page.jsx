"use client"
import React from 'react';
import LandingPage from '../app/pages/landingPage';
import AboutUsPage from '../app/pages/aboutUsPage';
import IntroVideo from '../app/pages/introVideo';
import AboutEvent from '../app/pages/aboutEvent';
import Footer from '../app/components/footer';
import Loading from '../app/pages/animateLoader';
import Blog from '../app/pages/blog';

export default function Home() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <main className="flex flex-col min-h-screen  items-center justify-between overflow-x-hidden">
      {loading ? (
        <Loading />
      ) : (
        <>
          <LandingPage />
          <AboutUsPage />
          <IntroVideo />
          <AboutEvent />
          <Blog />
          <Footer />
        </>
      )}
    </main>

  );
}
