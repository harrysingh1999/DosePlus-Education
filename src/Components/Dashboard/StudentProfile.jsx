import React from "react";

export default function StudentProfile({
  name,
  rollNo,
  fatherName,
  dob,
  myClass,
  id,
  section,
  schoolName,
}) {
  return (
    <div
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
      className=" max-w-[620px] mx-auto rounded-lg p-5"
    >
      <div className="py-3 w-full  flex flex-col gap-7">
        <h2 className="text-[#b40047] text-xl md:text-[24px] text-center  font-semibold">
          Profile Details
        </h2>
        <div className="border-2 border-slate-500 rounded-md py-2 px-4 w-full">
          <span className="text-sm md:text-base font-semibold">Name :</span>
          <span className="text-sm md:text-base text-slate-500 ps-2">
            {name}
          </span>
        </div>
        <div className="border-2 border-slate-500 rounded-md py-2 px-4 w-full">
          <span className="text-sm md:text-base font-semibold">Roll No :</span>
          <span className="text-sm md:text-base text-slate-500 ps-2">
            {rollNo}{" "}
          </span>
        </div>
        <div className="border-2 border-slate-500 rounded-md py-2 px-4 w-full">
          <span className="text-sm md:text-base font-semibold">
            Father Name :
          </span>
          <span className="text-sm md:text-base text-slate-500 ps-2">
            {fatherName}
          </span>
        </div>
        <div className="border-2 border-slate-500 rounded-md py-2 px-4 w-full">
          <span className="text-sm md:text-base font-semibold">DOB :</span>
          <span className="text-sm md:text-base text-slate-500 ps-2">
            {dob}{" "}
          </span>
        </div>
        <div className="border-2 border-slate-500 rounded-md py-2 px-4 w-full">
          <span className="text-sm md:text-base font-semibold">Class :</span>
          <span className="text-sm md:text-base text-slate-500 ps-2">
            {myClass}
          </span>
        </div>
        <div className="border-2 border-slate-500 rounded-md py-2 px-4 w-full">
          <span className="text-sm md:text-base font-semibold">Section :</span>
          <span className="text-sm md:text-base text-slate-500 ps-2">
            {section}
          </span>
        </div>
        <div className="border-2 border-slate-500 rounded-md py-2 px-4 w-full">
          <span className="text-sm md:text-base font-semibold">School :</span>
          <span className="text-sm md:text-base text-slate-500 ps-2">
            {schoolName}
          </span>
        </div>
        {/* <div className="text-center">
                     <button className="text-xl py-3 px-14 rounded-xl font-bold text-white bg-[#be0047]">Submit</button>
               </div> */}
      </div>
    </div>
  );
}
