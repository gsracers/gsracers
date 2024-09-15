import React from "react";
import "../index.css";

function Glowcard(props) {
  return (
    <div className="h-96 w-80 roboto-regular flex flex-col rounded-lg my-5  p-2 
      items-center justify-evenly bg-blue-800/10 hover:scale-105 ease-in-out border-2 border-blue-600 duration-300">
        <div className="image-container flex justify-center items-center h-32 w-72 ">
            <img src={props.img} alt={props.title} />
        </div> 

     
       <h1 className=" text-center capitalize font-bold text-xl">{props.tittle}</h1>
       <h1 className=" text-center text-slate-300 text-xs">{props.content}</h1>
                   
      
      

      
    </div>
  );
}

export default Glowcard;
