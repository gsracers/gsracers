import "./index.css";
import Navbar from "./component/Navbar";
import Contactus from "./component/Contactus";
import { Outlet } from "react-router-dom";
import { useRef } from "react";

function App() {
  const contactRef = useRef(null); // Create reference for Contactus section

  return (
    <> 
      <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_10%_50%,rgba(120,119,198,0.15),rgba(255,255,255,0))] 
       w-full h-full text-white">
        <Navbar contactRef={contactRef} /> {/* Pass ref to Navbar */}
        <Outlet />
        <Contactus contactRef={contactRef} /> {/* Pass ref to Contactus */}
      </div>
    </>
  );
}

export default App;
