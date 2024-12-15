import React from "react";
import "../index.css";

function Glowcard2(props) {
  return (
    <div
      className="h-[28rem] w-96 roboto-regular flex flex-col rounded-lg my-2 p-3 overflow-hidden 
        items-center bg-blue-800/10 hover:scale-[1.02] ease-in-out border-2 gap-10 border-blue-600 duration-300"
    >
     <div className="flex justify-center items-center h-1/2 h-max-1/2   w-11/12 ">
        <img className=" h-full  w-full" src={props.img} alt={props.tittle} />
      </div>
      <div className="overflow-hidden flex-col justify-end h-1/2 w-11/12">
        <h1 className="text-center p-2 font-bold text-xl text-yellow-200 uppercase">
          {props.tittle}
        </h1>
        <ul className="text-center text-slate-300 press-start-2p-regular flex flex-col text-sm gap-1 list-disc list-inside">
          {props.content.map((item, index) => (
            <li className="text-left " key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}



export default Glowcard2;
