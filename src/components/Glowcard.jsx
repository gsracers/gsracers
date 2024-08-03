import React from "react";
import "../index.css";

function Glowcard(props) {
  return (
    <div className="h-80 w-full md:w-80 grid grid-cols-1 rounded-lg
      items-center justify-items-center  bg-blue-800/10 gap-2 hover:scale-105 ease-in-out duration-300">
        <div className="image-container h-40 w-40 ">
            <img src={props.img} alt={props.title} />
        </div> 

       <div className="grid grid-cols-1 items-center justify-items-center gap-1 p-2 w-full"> 
       <h1 className=" text-center">{props.tittle}</h1>
       <h1 className=" text-center">{props.content}</h1>
        
      </div>
           
      
      

      
    </div>
  );
}

export default Glowcard;
