"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import LandingPage from '../app/pages/landingPage';
import AboutUsPage from '../app/pages/aboutUsPage';
import IntroVideo from '../app/pages/introVideo';
import AboutEvent from '../app/pages/aboutEvent';
import Footer from '../app/components/footer';
import Loading from '../app/pages/animateLoader';
import Blog from '../app/pages/blog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Home() {
  const [loading, setLoading] = useState(true);
  const [toastShown, setToastShown] = useState(false);

  useEffect(() => {
    if (loading && !toastShown) {
      const timeoutId = setTimeout(() => {
        setLoading(false);
        toast('Secure your passes today', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setToastShown(true);
      }, 6000);

      return () => clearTimeout(timeoutId);
    }
  }, [loading, toastShown]);


  return (
    <main className="flex flex-col min-h-screen  items-center justify-between overflow-x-hidden">
      {loading ? (
        <Loading />
      ) : (
        <>
          <LandingPage />
          <AboutUsPage />
          <section className="cyberpunk w-full">
          </section>
          <IntroVideo />
          <section className="cyberpunk w-full">
          </section>
          <AboutEvent />
          <section className="cyberpunk w-full">
          </section>
          <Blog />
          <Footer />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </>
      )}
    </main>

  );
}
