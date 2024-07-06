import React from "react";
import Banner from "../Banner/Banner";
import Toppers from "../Toppers/Toppers";
import About from "../About/About";
import LoginBanner from "../Login/LoginBanner";
import Prizes from "../Prizes/Prizes";
import PreviousPapers from "../PreviousPapers/PreviousPapers";
import Gallery from "../Gallery/Gallery";
import Partners from "../Partners/Partners";
import Blogs from "../Blogs/Blogs";
import Goal from "../Goal/Goal";
import Burgeoning from "../EmergingSectors/Emerging";

import Slider from "../Slider/Slider";
import Emerging from "../EmergingSectors/Emerging";

export default function Home() {
  return (
    <div>
      {/* <Slider /> */}
      <Banner />
      <Toppers />
      <About />
      <LoginBanner />
      <Prizes />
      {/* <PreviousPapers /> */}
      <Goal />
      <Emerging />

      {/* <Gallery /> */}
      {/* <Partners /> */}

      <Blogs />
    </div>
  );
}
