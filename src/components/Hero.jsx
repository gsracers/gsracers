import React from "react";
import HERO_IMG_PATH from "../assets/hero2.png";
import { motion } from "framer-motion";
import herovideo from "../assets/07222-1.mp4"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "",
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    // Hero Section

    <div className="herosection  py-10 bg-blue-950/10 rounded-2xl flex items-center flex-wrap lg:flex-nowrap  w-full overflow-hidden">
      <div className="hero-right w-full h-full justify-items-center content-center gap-3 grid grid-cols-1 p-2 ">
        <div className="p-2 w-full  font-trinos">
          <motion.h1
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="gradient-text text-transparent text-4xl py-2 animate-gradienthero xl:text-7xl "
          >
            TEAM
          </motion.h1>

          <motion.h1
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="gradient-text text-transparent text-3xl md:text-4xl animate-gradienthero lg:text-5xl 2xl:text-6xl "
          >
            G.S.RACERS
          </motion.h1>
        </div>

        <div>
          <motion.p
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className=" p-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            illum, enim magni accusantium nostrum rem quidem Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Earum repudiandae cumque
            accusantium tempora illo rem expedita explicabo fugit similique?
            Ratione.
          </motion.p>
        </div>
      </div>
      <div className="hero-left rounded-lg overflow-hidden   md:order-2 w-full h-full  justify-items-center content-center p-2 ">
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="  w-full h overflow-hidden flex justify-center items-center object-cover"
        >
             <video
            autoPlay
            loop
            muted
            className="  w-full object-cover"
          >
            <source src={herovideo} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
