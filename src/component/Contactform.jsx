import React from "react";
import imagedata from "../utils/imagedata";
import "../index.css"
import toast, { Toaster } from 'react-hot-toast';
import image from "../assets/home/sponsor.jpg"
import { Link } from 'react-router-dom'; // If using react-router
import { Info, ArrowRight , ExternalLink } from 'lucide-react';


function Contactform() {
  return (
    <>
    <Toaster
  position="bottom-left"
  reverseOrder={false}
/>
      <div className=" ">
        <div className="my-20 mx-auto">
            <h1 className="md:text-6xl text-4xl text-blue-300 font-bold text-center font-proracing " > sponsorship</h1>
            <hr className="bg-blue-900  md:w-1/5 w-1/2 mx-auto border-none my-3 h-1" />
        </div>    
            <div className="grid lg:grid-cols-5 grid-cols-1  bg-blue-950/10">
                <div className=" p-2 col-span-2 mx-auto w-9/12 h-full flex flex-col justify-center items-center">

                    <form  className="w-full grid grid-cols-1  gap-1   items-center justify-center  my-2 ">
                        <div className="mb-10" ><h1 className=" text-center text-2xl capitalize font-extrabold">lets partner up</h1>
                        <h3 className= "mt-2 text-slate-300 italic text-center">Join us in pushing the limits of engineering and innovation. Interested in partnering with our college Baja team? </h3>
                        </div> 
                        <input type="text" placeholder="Name" className="  bg-blue-800/10  focus:border-2 focus:ring-2 ring-blue-500 rounded-lg border-blue-500 w-full p-2 my-2" />
                        <input type="email" placeholder="Email" className=" bg-blue-800/10  focus:border-2 focus:ring-2 ring-blue-500 rounded-lg border-blue-500 w-full p-2 my-2" />
                        <input type="tel" placeholder="Phone" className="bg-blue-800/10  focus:border-2 focus:ring-2 ring-blue-500 rounded-lg border-blue-500 w-full p-2 my-2" />
                        <input type="text" placeholder="message" className="bg-blue-800/10 h-20 focus:border-2 focus:ring-2 ring-blue-500 rounded-lg border-blue-500 w-full p-2 my-2" />
                        <input type="submit" onClick={(e) => {e.preventDefault()
                          toast.success("Your message has been sent successfully")
                        }} value="submit" className="bg-blue-800/10  focus:bg-blue-600 hover:bg-blue-950  ring-blue-500 rounded-lg border-blue-500 w-1/2 mx-auto p-2 my-2" /> 
                        
                          
                        <Link to="/sponsorship"><div className="flex flex-nowrap italic text-blue-300 font-bold">  <ExternalLink size={20} /> <h3 className="text-center  ">
       To know more about sponsorship click here to visit our sponsorship page.  
      </h3>    </div> </Link> 
                     </form> 

                

                </div>

                <div className=" relative  h-full col-span-3 flex flex-col justify-center items-center">
                    <img src={image} alt="" className=" md:w-full px-2 md:h-[34rem]  " />
                    
                </div>
                
            </div>
           
      </div>
      
    </>
  );
}

export default Contactform;
