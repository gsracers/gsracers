import React from "react";
import HERO_IMG_PATH from "../assets/hero2.png";
import { motion } from "framer-motion";
import herovideo from "../assets/07222-1.mp4"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Hero() {
  return (
    <div className="herosection my-10 py-10 bg-blue-950/10 backdrop-blur-sm rounded-2xl flex items-center flex-wrap lg:flex-nowrap w-full overflow-hidden relative">
      {/* Background geometric shapes for edgy look */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/5 rotate-12 transform scale-150" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12" />
      </div>

      <div className="hero-right w-full h-full justify-items-center content-center gap-3 grid grid-cols-1 p-2 relative z-10">
        <div className="p-2 w-full font-trinos">
          <motion.h1
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
            className="gradient-text text-transparent text-4xl py-2 animate-gradienthero xl:text-7xl tracking-wider"
          >
            TEAM
          </motion.h1>

          <motion.h1
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.5, type: "spring", stiffness: 100 }}
            className="gradient-text text-transparent text-3xl md:text-4xl animate-gradienthero lg:text-5xl 2xl:text-6xl tracking-wider"
          >
            G.S.RACERS
          </motion.h1>
        </div>

        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -left-4 top-0 w-1 h-full bg-blue-500/50 rounded-full" />
          <p className="p-4 text-gray-300 leading-relaxed backdrop-blur-sm bg-black/20 rounded-r-lg border-l font-racing  border-blue-500/50">
            Team GSRacers, founded in 2007 at SGSITS College, is a passion-driven team with a rich history of excellence
            in automotive engineering. Specializing in creating physical vehicles, particularly ATVs..
          </p>
        </motion.div>
      </div>

      <div className="hero-left rounded-lg overflow-hidden md:order-2 w-full h-full justify-items-center content-center relative z-10">
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="w-full overflow-hidden flex justify-center items-center relative group"
        >
          {/* Decorative border */}
          <div className="absolute inset-0 border-2 border-blue-500/30 rounded-lg transform -skew-x-3" />

          <video
            autoPlay
            loop
            muted
            className="w-full rounded-lg transform transition-transform duration-700 group-hover:scale-105"
          >
            <source
              src="https://res.cloudinary.com/dtcbbzlix/video/upload/v1725175353/07222-1_e1fjpm.mp4"
              type="video/mp4"
            />
          </video>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500/30 rounded-tl-lg" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-500/30 rounded-br-lg" />
    </div>
  )
}


