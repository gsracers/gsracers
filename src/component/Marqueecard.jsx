import React from 'react'
import images from "../assets/logo-1.png"
function Marqueecard() {
  return (
    <>
     <div className="flex justify-between min-w-80 min-h-52 bg-blue-800/10 p-2 mr-20 items-center">
                 <div className="grid grid-cols-1">
                       <h1 className="text-2xl py-1 capitalize">
                         heading
                       </h1>
                       <ul>
                         <li>l1</li>
                         <li>l2</li>
                         <li>l3 lore</li>
                       </ul>
        
                         </div>
                     <div className="rounded-full bg-white overflow-hidden flex justify-center items-center h-28 w-28 p-3 ">
                       <img src={images} alt="" className=" " />
                     </div>
                 </div>

    </>
  )
}

export default Marqueecard