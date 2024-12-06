import React from 'react'
import HERO_IMG_PATH from "../assets/hero2.png";
import data from "../utils/acheivement";
import Abouthome from "./Abouthome";
import "../index.css";
import Acheivement from "./Acheivement";
import Contactform from './Contactform';


import Glowcard from "./Glowcard";
import Hero from "./Hero";

function Home() {
  return (
    <>
     <div
      className=" bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_10%_50%,rgba(120,119,198,0.15),rgba(255,255,255,0))] 
       w-full h-full text-white roboto-regular">
   

      <div className="h-full w-11/12 roboto-regular mx-auto py-5">
      
      
      <Hero />
      <Abouthome />
      <Acheivement/>
      <Contactform/>   
      </div>
     

     
      
       
     
    </div>
    
    </>
  )
}

export default Home