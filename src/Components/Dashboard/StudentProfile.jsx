import React from "react";

export default function StudentProfile({
  name,
  rollNo,
  fatherName,
  dob,
  myClass,
  section,
}) {
  return (
    <div
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      className="w-full mx-auto rounded-lg p-5"
    >
      <div className="py-3 w-full  flex flex-col">
        <h2 className="text-[#34a1cc] text-xl md:text-[24px] mb-5 text-center font-semibold">
          Profile Details
        </h2>
        <div className="rounded-md py-2 px-4 w-full">
          <span className="text-sm md:text-base font-semibold">Name :</span>
          <span className="text-sm md:text-base text-slate-500 ps-2">
            {name}
          </span>
        </div>
        <div className="rounded-md py-2 px-4 w-full">
          <span className="text-sm md:text-base font-semibold">Roll No :</span>
          <span className="text-sm md:text-base text-slate-500 ps-2">
            {rollNo}{" "}
          </span>
        </div>
        <div className="rounded-md py-2 px-4 w-full">
          <span className="text-sm md:text-base font-semibold">
            Father Name :
          </span>
          <span className="text-sm md:text-base text-slate-500 ps-2">
            {fatherName}
          </span>
        </div>
        <div className="rounded-md py-2 px-4 w-full">
          <span className="text-sm md:text-base font-semibold">DOB :</span>
          <span className="text-sm md:text-base text-slate-500 ps-2">
            {dob}{" "}
          </span>
        </div>
        <div className="rounded-md py-2 px-4 w-full">
          <span className="text-sm md:text-base font-semibold">Class :</span>
          <span className="text-sm md:text-base text-slate-500 ps-2">
            {myClass}
          </span>
        </div>
        <div className="rounded-md py-2 px-4 w-full">
          <span className="text-sm md:text-base font-semibold">Section :</span>
          <span className="text-sm md:text-base text-slate-500 ps-2">
            {section}
          </span>
        </div>
      </div>
    </div>
  );
}
