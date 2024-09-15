import React from "react";
import image from "/20240113_185936.jpg"
function Teampage() {
  return (
    <>
      <div className="py-10 w-full h-full roboto-regular ">
        <div className="w-full overflow-hidden">
          <div className="w-11/12 mx-auto">
            <div className="w-full">
              <h1 className="md:text-4xl text-2xl text-blue-300 font-bold text-center font-proracing">
                our team 
              </h1>
              <hr className="bg-blue-900 md:w-1/6 w-1/2 mx-auto border-none my-2 h-1" />
            </div>

            <div className="flex capitalize place-items-center py-5 gap-4 flex-col">
                <div className="team-year font-bold text-3xl"> TEAM 2023-24</div>
                <div className="team-photo flex justify-center"> <img src={ image } className="w-1/2" alt="" /></div>
                <h1 className="font-bold text-xl"> Siddharth Chaudhary 
                (CAPTAIN)</h1>
                <h1 className="font-bold text-xl">shreyansh chaurasia (VICE CAPTAIN)</h1>
                <div className="mentors py-10 text-center font-bold text-3xl "> MENTORS
                    <ul className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-10 text-left text-xl text-slate-300 py-10 md:grid-cols-2">
                        
                            <li>Ashirwad mishra
                            </li>
                            <li>Chaitanya buwade</li>
                            <li>Ashutosh kushwah</li>
                            <li>Muskan gupta
                            </li>
                            <li> Prashi Tamrakar</li>
                            <li>Alok sengar
                            </li>
                            <li>Prateek sagitra</li>
                        
                    </ul>

                </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teampage;
