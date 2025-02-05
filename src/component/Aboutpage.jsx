import React, { useEffect } from "react";
import images from "../assets/logo-1.png";
import "../index.css";
import { motion } from "framer-motion";
import Marqueecard from "./Marqueecard";
import img1 from "../assets/img2.jpg";
import img2 from "../assets/img3.jpg";
import img3 from "../assets/ebaja.jpg";
import img4 from "../assets/bajasae.jpg";
import '@fontsource/exo-2';

// Static image imports
import image1 from "../assets/evolution/g1/g1_1.jpg";
import image2 from "../assets/evolution/g2/g2_1.jpg";
import image3 from "../assets/evolution/g3/g3_1.jpg";
import image4 from "../assets/evolution/g4/g4_1.jpg";
import image5 from "../assets/evolution/g5/g5_1.jpg";
import image6 from "../assets/evolution/g6/g6_1.jpg";
import image7 from "../assets/evolution/g7/g7_1.jpg";
import image8 from "../assets/evolution/g8/g8_1.jpg";
import image9 from "../assets/evolution/g9/g9_1.jpg";
import image10 from "../assets/evolution/g10/g10_1.jpg";
import image11 from "../assets/evolution/g11/g11_1.jpg";
import image12 from "../assets/evolution/g12/g12_1.jpg";
import image13 from "../assets/evolution/g13/g13_1.jpg";
import image14 from "../assets/evolution/g14/g14_1.jpg";
import image15 from "../assets/evolution/g15/g15_1.jpg";
import image16 from "../assets/evolution/g16/g16_1.jpg";
import image17 from "../assets/evolution/g17/g17_1.jpg";
import image18 from "../assets/evolution/g18/g18_1.jpg";


// Store imported images in an array
const imagePaths = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
];

function Aboutpage() {
  useEffect(() => {
    // Smoothly scroll to the top of the page when the component is rendered
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // Enables smooth scrolling
    });
  }, []);
  return (
    <>
      <div className="py-10 w-full h-full font-exo-2 ">
        <div className="w-full overflow-hidden">
          <div className="w-11/12 mx-auto">
            <div className="w-full">
              <h1 className="md:text-4xl text-2xl text-blue-300 font-bold text-center font-proracing">
                ABOUT US
              </h1>
              <hr className="bg-blue-900 md:w-1/6 w-1/2 mx-auto border-none my-2 h-1" />
              <div className="py-10 flex flex-col gap-10">
                  <motion.div     animate={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ delay: 0.5, duration: 1 }} className="gsracers bg-blue-900/10  flex-col xl:flex-row flex gap-4 p-5 rounded-xl ">
                    <div className="img xl:w-2/5 w-full p-2  object-cover"> <img className=" rounded-lg  w-full"  src={img1} alt="" /></div>
                    <div className="xl:w-3/5 w-full p-2  text flex-col flex gap-2 justify-center ">
                      <h1 className="text-2xl capitalize font-bold font-proracing">GS RACERS</h1>
                      <p className="text-lg text-slate-300 font-medium  text-justify" >Team GSRacers, founded in 2007 at SGSITS College, is a passion-driven team with a rich history of excellence in automotive engineering. Specializing in creating physical vehicles, particularly ATVs. Over the years, GSRacers has participated in more than 17 national-level events, and an international event , consistently showcasing their dedication, innovation, and technical prowess. Our hard work and commitment were rewarded in 2014 when we secured All India Rank 1, a significant milestone in our journey. The team has a long-standing tradition of competing in M-BAJA, having been a part of this prestigious event for 17 consecutive years. Embracing new technologies and expanding their horizons, GSRacers ventured into the electrical segment last year. Demonstrating their versatility and innovative spirit, they successfully developed two vehicles from different segments, highlighting our ability to adapt and excel in a rapidly evolving field.</p>
                    </div>
                    

                  </motion.div>

                  <motion.div     whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ delay: 0, duration: 1 }} className="sgsits my-10 bg-blue-900/10 flex-col xl:flex-row flex gap-4 p-5 rounded-xl ">
                    <div className="img xl:w-2/5 w-full p-2 xl:order-2  object-cover"> <img className=" rounded-lg  w-full"  src={img2} alt="" /></div>
                    <div className="xl:w-3/5 w-full p-2  text flex-col flex gap-2 ">
                      <h1 className="text-2xl capitalize font-bold font-proracing">SGSITS</h1>
                      <p className="text-lg  text-slate-300 font-medium text-justify" >Shri Govindram Seksaria Institute of Technology and Science (SGSITS) in Indore, established in 1952, has solidified its position as a premier institution in Madhya Pradesh and the western region. Recognized for its academic excellence, SGSITS has consistently ranked among India's top engineering colleges, including IITs and NITs. Granted autonomous status by AICTE and UGC in 1989, the institute continues to be affiliated with the Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal.</p>
                    </div>
                    

                  </motion.div>

                  <motion.div     whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ delay: 0, duration: 1 }} className="gsracers my-10 bg-blue-900/10 flex-col xl:flex-row flex gap-4 p-5 rounded-xl ">
                    <div className="img xl:w-2/5 w-full p-2  object-cover"> <img className=" rounded-lg  w-full"  src={img4} alt="" /></div>
                    <div className="xl:w-3/5 w-full p-2  text flex-col flex gap-2 \ ">
                      <h1 className="text-2xl capitalize font-bold font-proracing">BAJA SAE</h1>
                      <p className="text-lg  text-slate-300 font-medium text-justify" >BAJA SAE INDIA is an inter-collegiate competition in which students from various universities compete to design and build an All Terrain Vehicle. Since it’s introduction, BAJA has grown into one of the biggest and most prestigious engineering event in INDIA in which over 200 teams compete against each other to build the fastest, lightest, most rugged and affordable off-road vehicle.</p>
                    </div>
                    

                  </motion.div>
                  <motion.div     whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ delay: 0, duration: 1 }} className="sgsits my-10 bg-blue-900/10 flex-col xl:flex-row flex gap-4 p-5 rounded-xl ">
                    <div className="img xl:w-2/5 w-full p-2 xl:order-2  object-cover"> <img className=" rounded-lg  w-full h-96"  src={img3} alt="" /></div>
                    <div className="xl:w-3/5 w-full p-2  text flex-col flex gap-2 ">
                      <h1 className="text-2xl capitalize font-bold font-proracing">E-BAJA</h1>
                      <p className="text-lg  text-slate-300 font-medium text-justify" >We're thrilled to be participating in E-BAJA, a premier platform for showcasing cutting-edge electric ATV technology. Our team is eager to unveil our innovative vehicle, designed to push the boundaries of sustainable performance. By engaging with industry leaders and competing against top talent, we aim to contribute to the advancement of electric mobility and inspire future generations of engineers.</p>
                    </div>
                    

                  </motion.div>
              </div>
            </div>

            <div className="bg-blue-950/10 rounded-2xl my-10 px-4 py-10 overflow-x-hidden lg:MyGradient">
            <div className="my-10"><h1 className="md:text-4xl  text-2xl text-blue-300  font-bold text-center font-proracing">
              our Evolution
              </h1>
              <hr className="bg-blue-900 md:w-1/6 w-1/2 mx-auto border-none my-2 h-1" />
              </div>
         
              <div className="flex gap-10 ">
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                    duration: 40,
                    delay: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex items-center flex-shrink-0  gap-10"
                >
                  {imagePaths.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`img-${index}`}
                      className="h-52 w-96 hover:scale-105 ease-in-out duration-300"
                    />
                  ))}
                </motion.div>
                {/* made this copy for infinite scroll as it will restart from initial card */}
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                    duration: 40,
                    delay: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex items-center flex-shrink-0 gap-10"
                >
                  {imagePaths.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`img-${index}`}
                      className="h-52 w-96 hover:scale-105 ease-in-out duration-300"
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutpage;
