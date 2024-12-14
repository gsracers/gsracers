import React from "react";
import data from "../utils/acheivement";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Glowcard2 from "./Glowcard2";
import { useState , useEffect } from "react";

function Acheivement() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
window.addEventListener("resize", () => { setWindowWidth(window.innerWidth) });
  
console.log(windowWidth);

  
 
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,

   
  };

  return (
    <>
      <div className="py-10 w-full h-full roboto-regular">
        <div className="w-full overflow-hidden">
          <div className="w-11/12 mx-auto">
            <div className="w-full">
              <h1 className="md:text-4xl text-2xl text-blue-300 font-bold text-center font-proracing">
                Our Achievements
              </h1>
              <hr className="bg-blue-900 md:w-1/6 w-1/2 mx-auto border-none my-2 h-1" />
            </div>
            {(windowWidth> 1400) && (
            <div className=" my-5">
              <div className="w-full mx-auto">
                <Slider className="  " {...settings}>
                  {data.map((item) => (
                    <Glowcard2
                      key={item.id}
                      img={item.img}
                      tittle={item.tittle}
                      content={item.content}
                    />
                  ))}
                </Slider>
              </div>
            </div>)}
            
            {(windowWidth <= 1400  ) &&  (<div className="flex flex-wrap gap-10 justify-center my-10">
              {data.map((item) => (
                <Glowcard2
                  key={item.id}
                  img={item.img}
                  tittle={item.tittle}
                  content={item.content}
                />
              ))}
            </div>)}

            
          </div>
        </div>
      </div>
    </>
  );
}

export default Acheivement;
