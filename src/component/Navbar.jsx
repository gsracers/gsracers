import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imagedata from "../utils/imagedata";

const HamburgerComponent = ({ contactRef, setHamburger }) => {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -30, opacity: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ y: -100, opacity: 0 }}
      className="h-full w-full"
    >
      <ul className="grid text-center justify-items-center grid-cols-1 font-santos text-2xl gap-1 border-6">
        <Link to="/" onClick={() => setHamburger(false)}>
          <li className="menu-item hover:text-blue-600 text-blue-300 duration-300">Home</li>
        </Link>
        <Link to="/aboutus" onClick={() => setHamburger(false)}>
          <li className="menu-item hover:text-blue-600 text-blue-300 duration-300">About us</li>
        </Link>
        <Link to="/team" onClick={() => setHamburger(false)}>
          <li className="menu-item hover:text-blue-600 text-blue-300 duration-300">Our team</li>
        </Link>
        <Link to="/sponsorship" onClick={() => setHamburger(false)}>
          <li className="menu-item hover:text-blue-600 text-blue-300 duration-300">Sponsorship</li>
        </Link>
        <li
          className="menu-item hover:text-blue-600 text-blue-300 duration-300 cursor-pointer"
          onClick={() => {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
            setHamburger(false);
          }}
        >
          Contact
        </li>
      </ul>
    </motion.div>
  );
};

function Navbar({ contactRef }) {
  const [hamburger, setHamburger] = useState(false);

  return (
    <div>
      <div className="nav-bar h-36 w-full px-1/6">
        <div className="out-container w-11/12 mx-auto flex justify-between items-center h-full">
          <div className="logo-container max-h-28 max-w-28 p-1">
            <img src={imagedata.logo} alt="LOGO" />
          </div>
          <div className="lg:hidden">
            <button onClick={() => setHamburger(!hamburger)}>
              {hamburger ? (
                <motion.svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="#275AFE"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              ) : (
                <motion.svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="#275AFE"
                  initial={{ rotate: 180 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              )}
            </button>
          </div>

          <div className="menu-container lg:inline hidden rounded-3xl px-2 backdrop-blur-3xl">
            <ul className="flex flex-1 justify-between capitalize cursor-pointer font-extrabold font-proracing text-2xl p-1 px-3">
              <Link to="/">
                <li className="px-4 menu-item hover:text-blue-600 text-blue-300 duration-300">Home</li>
              </Link>
              <Link to="/aboutus">
                <li className="px-4 menu-item hover:text-blue-600 text-blue-300 duration-300">About us</li>
              </Link>
              <Link to="/team">
                <li className="px-4 menu-item hover:text-blue-600 text-blue-300 duration-300">Our team</li>
              </Link>
              <Link to="/sponsorship">
                <li className="px-4 menu-item hover:text-blue-600 text-blue-300 duration-300">Sponsorship</li>
              </Link>
              <li
                className="px-4 menu-item hover:text-blue-600 text-blue-300 duration-300 cursor-pointer"
                onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>

      {hamburger && <HamburgerComponent contactRef={contactRef} setHamburger={setHamburger} />}
    </div>
  );
}

export default Navbar;
