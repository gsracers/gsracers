
import HERO_IMG_PATH from "./assets/hero2.png";
import data from "./utils/data";
import Abouthome from "./components/Abouthome";
import "./index.css";
import Navbar from "./components/Navbar";
import Contactus from "./components/Contactus";


import Sliderone from "./components/Sliderone";


import Glowcard from "./components/Glowcard";
import Hero from "./components/Hero";


function App() {

  return (
    <div
      className=" bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_10%_50%,rgba(120,119,198,0.15),rgba(255,255,255,0))] 
       w-full h-full text-white">
      <Navbar />

      <div className="h-full w-11/12 roboto-regular mx-auto py-5">
      
      
      <Hero />
      <Abouthome />

    
      <Sliderone />
      <Contactus/>
      </div>

     
      
       
     
    </div>
  );
}

export default App;
