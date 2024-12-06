import { motion } from "framer-motion";
import imagedata from "../utils/imagedata";
import { browserName, browserVersion } from "react-device-detect"; 
import { Link } from "react-router-dom";
function Abouthome() {
  console.log(browserName, browserVersion);
  return (
    <div className="out-container w-10/12 mx-auto">
    <div className="lg:pt-32 py-10 aboutus-home">
      <div className="">
        <h1 className="md:text-6xl text-4xl text-blue-300 font-bold text-center font-proracing">
          ABOUT US
        </h1>
        <hr className="bg-blue-900  md:w-1/6 w-1/2 mx-auto border-none my-2 h-1" />
        <p className="text-center">
          
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-14  py-20 overflow-hidden ">

       <Link to ="/aboutus"> <motion.div
        whileInView={{opacity: 1 , x: 0} }
        initial={{opacity: 0 , x: -100 }}
        transition={{duration: 0.5}}
        className="grid grid-cols-1 gap-12 mb-20 xl:my-0 justify-items-center  ">
        <div className=" absolute md:h-96 md:w-[28rem]  w-60 h-52  bg-blue-800 blur-xl"></div>
        <img src={imagedata.legacy} alt="" className=" hover:scale-105 ease-in-out duration-500 md:h-96 md:w-[28rem]  w-60 h-52 rounded-xl  z-10" />
           <div className="h-24"><h1 className="text-4xl py-1  text-blue-300 text-center capitalize font-proracing ">our legacy</h1>
           <p className="text-center mx-auto w-3/4 ">GSRacers, established in 2007, boasts a rich history of automotive engineering excellence, highlighted by a consistent M-BAJA participation spanning 17 years and a remarkable achievement of securing All India Rank 1 in 2014.</p></div> 

        </motion.div> </Link>

        <Link to = "/team"><motion.div
        whileInView={{opacity: 1 , x: 0} }
        initial={{opacity: 0 , x: -100 }}
        transition={{duration: 0.5}}
        className="grid grid-cols-1 gap-12 mt-32 mb-16 xl:my-0 justify-items-center  ">
        <div className=" absolute md:h-96 md:w-[28rem]  w-60 h-52  bg-blue-800 blur-xl"></div>
        <img src={imagedata.team_2324} alt="" className=" hover:scale-105 ease-in-out duration-500 md:h-96 md:w-[28rem]  w-60 h-52 rounded-xl  z-10" />
           <div className=" h-24"><h1 className="text-4xl py-1  text-blue-300 text-center capitalize font-proracing ">our team</h1>
           <p className="text-center mx-auto w-3/4 ">A dynamic and highly motivated group of SGSITS students, bound together by a profound passion for off-road racing and an unwavering commitment to pushing the boundaries of engineering innovation. </p></div> 

        </motion.div></Link>


      </div>
    </div>
    </div>
  );
}

export default Abouthome;