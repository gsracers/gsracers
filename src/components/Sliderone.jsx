import React from "react";
import data from "../utils/data";
import Glowcard from "./Glowcard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Sliderone() {
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

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };

  
  return (
    <>
      <div className="out=container flex flex-col justify-center items-center py-2 lg:pt-40 ">
       <div>
        <h1 className="md:text-6xl text-4xl text-center text-blue-300 racing-sans-one-regular py-2">Our achivements</h1>
        <hr className="bg-blue-900  md:w-5/6 w-3/4 mx-auto border-none my-2 h-1" />
       </div>
      <div className=" md:w-4/5 w-full mx-auto h-[60vh] py-20 px-5   ">
        <Slider {...settings}>
          {data.map((item) => (
            <Glowcard
              img={item.img}
              tittle={item.tittle}
              content={item.content}
            />
          ))}
        </Slider>
      </div>
      </div>
    </>
  );
}

export default Sliderone;
