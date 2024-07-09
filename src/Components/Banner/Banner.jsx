import React from "react";
import BannerImg from "../../Images/Banner.svg";
import Slider from "../Slider/Slider";

export default function Banner() {
  return (
    <>
      <div className="md:mt-[94px]">
        <Slider />
        <img src={BannerImg} className="" alt="banner" />
      </div>
    </>
  );
}
