
import "./index.css";
import Navbar from "./components/Navbar";
import Contactus from "./components/Contactus";
import { Outlet } from "react-router-dom";


function App() {

  return (
    <> <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_10%_50%,rgba(120,119,198,0.15),rgba(255,255,255,0))] 
       w-full h-full text-white">
    <Navbar />
    <Outlet />
    <Contactus />
    </div>
    </>
  );
}

export default App;
