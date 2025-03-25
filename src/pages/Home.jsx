import React from 'react'

import Abouthome from "../component/Abouthome";
import "../index.css";
import Acheivement from "../component/Acheivement";
import Contactform from '../component/Contactform';
import Hero from "../component/Hero";

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