import React from "react";
import Blog1 from "../../Images/Blog1.svg";
import Blog2 from "../../Images/Blog2.svg";

export default function Blogs() {
  return (
    <>
      <h1 className="text-center text-xl sm:text-3xl font-bold mt-5 md:mt-10">
        Blogs
      </h1>
      <div
        id="blogs"
        className=" grid sm:grid-cols-2 px-6 py-8 gap-5 lg:w-[60%] mx-auto"
      >
        <div className="border h-full border-black/20 rounded-lg shadow-lg">
          <img
            src={Blog1}
            className="h-40 w-full object-cover rounded-t-lg"
            alt="Blog1"
          />
          <div className="px-6">
            <p className="my-4 font-semibold">
              Preparing for JEE and NEET with SpeEdLabs: A leap forward to
              success
            </p>
            <p className="text-sm">
              Exam fever is common among students of all ages and grades,
              especially when it comes to career-building, tough competitive
              exams such as JEE and NEET. The fear of facing unknown and
              out-of-syllabus qu{" "}
            </p>
            <button className="my-4">Read More ⏭</button>
          </div>
        </div>
        <div className="border h-full border-black/20 rounded-lg shadow-lg">
          <img
            src={Blog2}
            className="h-40 w-full object-cover rounded-t-lg"
            alt="Blog2"
          />
          <div className="px-6">
            <p className="my-4 font-semibold">
              Practice is a game changer before exams, believes SpeEdLabs,
              partner for DosePlus Education 2024
            </p>
            <p className="text-sm">
              There is no glory in practice, but without practice there is no
              glory,” is apt for all and sundry, including students. After all,
              it’s through dedicated and focussed practice that one can achieve
              real
            </p>
            <button className="my-4">Read More ⏭</button>
          </div>
        </div>
      </div>
    </>
  );
}
