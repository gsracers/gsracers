import React from "react";
import hero2 from "../assets/herosectionstrech.png";
import "../index.css"

function Contactform() {
  return (
    <>
      <div className=" ">
        <div className="my-20 mx-auto">
            <h1 className="md:text-6xl text-4xl text-blue-300 font-bold text-center racing-sans-one-regular " > sponsorship</h1>
            <hr className="bg-blue-900  md:w-1/5 w-1/2 mx-auto border-none my-3 h-1" />
        </div>    
            <div className="grid md:grid-cols-5 grid-cols-1  bg-blue-950/10">
                <div className=" p-2 col-span-2 mx-auto w-3/5 h-full flex flex-col justify-center items-center">

                    <form className="w-full grid grid-cols-1 gap-1   items-center justify-center col-span-1  my-2 ">
                        <div className="mb-10" ><h1 className=" text-center text-2xl capitalize font-extrabold">lets partner up</h1>
                        <p className="text-lg text-center">Lorem ipsum dolor sit amet.</p></div> 
                        <input type="text" placeholder="Name" className="  bg-blue-800/10  focus:border-2 focus:ring-2 ring-blue-500 rounded-lg border-blue-500 w-full p-2 my-2" />
                        <input type="email" placeholder="Email" className=" bg-blue-800/10  focus:border-2 focus:ring-2 ring-blue-500 rounded-lg border-blue-500 w-full p-2 my-2" />
                        <input type="tel" placeholder="Phone" className="bg-blue-800/10  focus:border-2 focus:ring-2 ring-blue-500 rounded-lg border-blue-500 w-full p-2 my-2" />
                        <input type="submit" value="submit" className="bg-blue-800/10  focus:border-2 focus:ring-2 ring-blue-500 rounded-lg border-blue-500 w-full p-2 my-2" />          
                     </form> 

                     <h1 className="text-center my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, facere.</h1>

                </div>

                <div className=" relative  h-full col-span-3 flex flex-col justify-center items-center">
                    <img src={hero2} alt="" className=" md:w-full px-2 md:h-[34rem]  " />
                    
                </div>
            </div>
      </div>
    </>
  );
}

export default Contactform;
