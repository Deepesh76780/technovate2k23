import React, { useEffect, useState } from "react";
import Navbar from "../components/nav";
import { motion } from "framer-motion";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 60,
      delay: 1,
      duration: 2,
    },
  },
};

const LandingPageContent = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };


    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = 1 + scrollY / 500;

  return (
    <div className={`absolute top-0 left-0 w-full h-full ${hover ? "bg-black" : "bg-opacity-50"} z-10 overlay`}>
      <Navbar bgcolor={"bg-[#e960a5a8]"} resColor={"#e960a5a8"} />
      <motion.div
        className="w-full lg:h-[80%]  h-[83%] flex overflow-x-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="pink_selector font-glitch lg:text-9xl text-5xl tracking-[0.15em] z-1 text-center text-slate-50 place-self-center w-full " style={{ transform: `scale(${scale})` }}>
          {hover ? "IIITNR FEST" : "Technovate"}

          <motion.div
            className="pink_selector lg:text-2xl text-xl mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            4th - 5th Feb
          </motion.div>
        </div>
      </motion.div>
      <div className="w-full h-[2%] md:flex hidden justify-end max-w-[150rem] mx-auto  ">
        <div className="rotate-90 w-fit  text-slate-200 h-fit place-self-end">
          <div className="flex gap-2">
            <p className="place-self-center text-xs lg:text-sm font-cyberstar tracking-widest ">
              scroll down
            </p>
            <div className="place-self-center">
              <ChevronDoubleRightIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="pink_selector h-fit  border-2  hover:border-pink-500 hover:bg-black hover:rounded-xl hover:scale-125 hover:backdrop-hue-rotate-30 hover:text-pink-400 transition-all duration-500 cursor-pointer tracking-[0.3em] flex place-self-center text-center  border-slate-200 lg:text-2xl  text-xl  rounded-2xl font-cyberway  text-slate-50 lg:p-4 p-2 mx-auto w-fit backdrop-hue-rotate-90">
        REGISTER
      </motion.div>
    </div >
  );
};

export default LandingPageContent;
