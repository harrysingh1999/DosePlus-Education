import React from "react";
import Heritage from "../../Images/Heritage.svg";
import Students from "../../Images/Students.svg";
import OnlineExam from "../../Images/OnlineExam.svg";
import Examination from "../../Images/Examination.svg";

export default function About() {
  return (
    <div
      id="about"
      className="grid lg:place-items-center lg:grid-cols-2 p-5 md:p-20 gap-5"
    >
      <div className="">
        <h1 className="font-bold text-lg md:text-4xl mb-5 lg:w-[70%]">
          About DosePlus
        </h1>
        <p className="lg:w-[80%]">
          Dose plus education provides Talent Hunt scholarships to children who
          pass the Exam. Along with scholarships, we also organize technical
          tours. Counseling sessions are conducted to develop skills and provide
          career guidance through seminars. Now a days, children often start
          preparing for jobs early and can feel disappointed if they don't
          succeed. Otherwise, they may shift towards engineering or other
          fields. Therefore, all successful students will be guided through
          these seminars on how to plan their path after 10th and 12th grade,
          whether pursuing CA or exploring various sectors, which are rapidly
          growing. We encourage earning while learning, additionally, we inform
          about modern and demanding sectors so that students don't face
          difficulties. The world is changing rapidly, with new technologies
          becoming outdated quickly. Thus, it's important to provide truthful
          guidance to children.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 ">
        <div className="flex flex-col items-center sm:justify-start sm:items-center">
          <img className="w-28" src={Heritage} alt="" />
          <p className="md:ms-8 text-center">Strong heritage of 5 years.</p>
        </div>
        <div className="flex flex-col items-center sm:justify-start sm:items-center">
          <img className="w-28" src={Students} alt="" />
          <p className="md:ms-8 text-center">
            5 Lakh+ students enrolled over the past editions.
          </p>
        </div>
        <div className="flex flex-col items-center sm:justify-start sm:items-center">
          <img className="w-28" src={OnlineExam} alt="" />
          <p className="md:ms-8 text-center">
            Online exam, to be taken from the comfort of your home.
          </p>
        </div>
        <div className="flex flex-col items-center sm:justify-start sm:items-center">
          <img className="w-28" src={Examination} alt="" />
          <p className="md:ms-8 text-center">
            All Levels of Examination conducted by us
          </p>
        </div>
      </div>
    </div>
  );
}
