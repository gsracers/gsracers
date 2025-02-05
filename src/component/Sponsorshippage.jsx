import React  from "react";
import Glowcard from "./Glowcard";
import data from "../utils/sponsordata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import sponsorpackage from "../utils/sponsorpackage";
import imagedata from "../utils/sponsorimagedata";
import Sponsorgrid from "./Sponsorgrid";
import { useState , useEffect } from "react";



function Sponsorshippage() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => { setWindowWidth(window.innerWidth) });
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
  useEffect(() => {
    // Smoothly scroll to the top of the page when the component is rendered
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // Enables smooth scrolling
    });
  }, []);
  return (
    <>
      <div className="py-10 w-full h-full roboto-regular ">
        <div className="w-full overflow-hidden">
          <div className="w-11/12 mx-auto">
            <div className="w-full">
              <h1 className="md:text-4xl text-2xl text-blue-300 font-bold text-center font-proracing">
                why sponsor us?
              </h1>
              <hr className="bg-blue-900 md:w-1/6 w-1/2 mx-auto border-none my-2 h-1" />
            </div>
{(windowWidth> 1400) && (<div className="">
              <div className="w-full bg-blue-900/10 p-10 rounded-lg :mx-auto h-full ">
                <Slider className=" " {...settings}>
                  {data.map((item) => (
                    <Glowcard
                      key={item.id}
                      img={item.img}
                      tittle={item.tittle}
                      content={item.content}
                    />
                  ))}
                </Slider>
              </div>
            </div>)}

            {(windowWidth <= 1400  ) &&  (<div className="flex flex-wrap gap-1 justify-center">
              {data.map((item) => (
                <Glowcard
                  key={item.id}
                  img={item.img}
                  tittle={item.tittle}
                  content={item.content}
                />
              ))}
            </div>)}
            

            

            <div className="py-20">
  <h1 className="md:text-4xl text-2xl text-blue-300 font-bold text-center font-proracing">
    Sponsorship Packages
  </h1>
  <hr className="bg-blue-900 md:w-1/6 w-1/2 mx-auto border-none my-2 h-1" />
</div>

<div className=" flex gap-10 justify-center flex-wrap bg-blue-900/10 rounded-xl p-8  mx-auto">
  {sponsorpackage.map((item) => (
    <Card
      key={item.category} // Ensure unique key for React reconciliation
      category={item.category}
      price={item.price}
      features={item.features}
    />
  ))}
</div>
            <div className="py-20">
              <h1 className="md:text-4xl text-2xl text-blue-300 font-bold text-center font-proracing">
                our sponsors
              </h1>
              <hr className="bg-blue-900 md:w-1/6 w-1/2 mx-auto border-none my-2 h-1" />
            </div>
                <div>
                  {imagedata.map((item) => (
                    <Sponsorgrid key={item.id} category={item.category} image={item.image} />
                  ))}

                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sponsorshippage;
