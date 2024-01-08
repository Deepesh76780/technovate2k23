"use client";
import React from "react";
import { useState, useEffect } from "react";
import LandingPage from "../app/pages/landingPage";
import AboutUsPage from "../app/pages/aboutUsPage";
import IntroVideo from "../app/pages/introVideo";
import AboutEvent from "../app/pages/aboutEvent";
import Footer from "../app/components/footer";
import Loading from "../app/pages/animateLoader";
import Blog from "../app/pages/blog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SmoothScrolling from "./components/smoothScroll";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [toastShown, setToastShown] = useState(false);

  useEffect(() => {
    if (loading && !toastShown) {
      const timeoutId = setTimeout(() => {
        setLoading(false);
        toast("👈 👀 Secure your passes today 🤝", {
          position: "bottom-right",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setToastShown(true);
      }, 4000);

      return () => clearTimeout(timeoutId);
    }
  }, [loading, toastShown]);

  return (
    <>
      <main className="flex  flex-col min-h-[100dvh]  items-center justify-between overflow-x-hidden">
        {loading ? (
          <Loading />
        ) : (
          <SmoothScrolling>
            <HomePage />
          </SmoothScrolling>
        )}
      </main>
    </>
  );
}

function SeparatorHomePage() {
  return <section className="cyberpunk w-full"></section>;
}

function HomePage() {
  return (
    <>
      <LandingPage />
      <AboutUsPage />
      <SeparatorHomePage />
      <IntroVideo />
      <div className="hidden md:block w-full">
      <SeparatorHomePage />
      </div>
      <AboutEvent />
      <SeparatorHomePage />
      <Blog />
      <SeparatorHomePage />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
