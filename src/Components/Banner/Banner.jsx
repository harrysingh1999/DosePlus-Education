import React from "react";
import BannerImg from "../../Images/Banner.jpg";
import Slider from "../Slider/Slider";

export default function Banner() {
  return (
    <>
      <Slider />
      <div className="pt-[10px] md:pt-20 ">
        <img src={BannerImg} className="" alt="banner" />
      </div>
    </>
  );
}
