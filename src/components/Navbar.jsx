import React from "react";
import { useState } from "react";
import LOGO from "../assets/logo-1.png";
import { AnimatePresence, motion } from "framer-motion";

const Hamburgercomponent = () => {

    return (

        <motion.div 
        animate={{ y: 0, opacity: 1}}
              initial={{ y: -30 , opacity: 0}}
              transition={{ delay: 0, duration: 0.5 }}
              exit={{ y: -100, opacity: 0}}
              className="h-full   w-full">
            <ul className="grid justify-items-center grid-cols-1 racing-sans-one-regular  gap-1 border-6">
            <li className="px-4 menu-item  w-40 text-center hover:text-blue-600  text-blue-300 duration-300">
                About us
              </li>
              <li className="px-4 menu-item  w-40 text-center hover:text-blue-600  text-blue-300 duration-300">
                Home
              </li>
              <li className="px-4 menu-item  w-40  text-center hover:text-blue-600  text-blue-300 duration-300">
                our team
              </li>
              <li className="px-4 menu-item  w-40 text-center hover:text-blue-600  text-blue-300 duration-300">
                Sponsorship
              </li>
              <li className="px-4menu-item  w-40 text-center hover:text-blue-600  text-blue-300 duration-300">
                Contact
              </li>
            </ul>

        </motion.div >
    

    )
}


function Navbar() {
  const [hamburger, sethamburger] = useState(false);
  // handleclick = () => {
  //     sethamburger(!hamburger)
  //     {hamburger ? hamburgercomponent() : null}
  // }

  return (
    <div>
     
      {/* --------------------------------------------------nav bar------------------------------------- */}
      <div className="nav-bar h-36  w-full  px-1/6 ">
        <div className=" out-container w-10/12 mx-auto flex justify-between items-center h-full">
          <div className="logo-container max-h-28   max-w-28  p-1">
            <img src={LOGO} alt="LOGO" className="bg-" />
          </div>
          <div className="lg:hidden">
      
            <button
              onClick={() => {
                sethamburger(!hamburger);
                
              }}
            >
              hambuger
            </button>
          </div >
          <div className="menu-container  lg:inline hidden rounded-3xl px-2  backdrop-blur-3xl  ">
            <ul className=" flex  flex-1 justify-between text-2xl  capitalize   racing-sans-one-regular p-1 px-3">
              <li className="px-4 menu-item hover:text-blue-600  text-blue-300   duration-300">
                About us
              </li>
              <li className="px-4 menu-item hover:text-blue-600  text-blue-300 duration-300">
                Home
              </li>
              <li className="px-4 menu-item hover:text-blue-600  text-blue-300 duration-300">
                our team
              </li>
              <li className="px-4 menu-item hover:text-blue-600  text-blue-300 duration-300">
                Sponsorship
              </li>
              <li className="px-4menu-item hover:text-blue-600  text-blue-300 duration-300">
                Contact
              </li>
            </ul>
          </div>

          {/* hamburger drop  */}
        </div>
      </div>
      {/* navbar end  */}

        {hamburger ? <Hamburgercomponent/> : null}
    </div>
  );
}

export default Navbar;
