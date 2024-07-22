import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { emergingDetails } from "../../Utils/Constant";

export default function Emerging() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div
      id="emergingSector"
      className="px-4 md:px-20 my-4 md:my-10 bg-[#5BCCFA] overflow-hidden"
    >
      {/* <div className=" md:px-20 my-4 md:my-10 bg-[#b40048e7]  overflow-hidden"> */}
      <h1 className="text-base md:text-2xl font-semibold mt-3 text-center">
        DosePlus offers the most Emerging Sectors
      </h1>

      <Slider {...settings}>
        {emergingDetails.map((item, index) => (
          <div className="px-5 pt-2" key={index}>
            <img
              src={item.url}
              alt={item.title}
              className="lg:w-[900px] rounded-lg md:w-[600px] sm:w-[350px] lg:h-[410px] md:h-[325px] sm:h-[175px] object-cover mx-auto"
            />
            <p className="text-center font-bold md:text-xl text-base mb-3">
              {item.title}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
