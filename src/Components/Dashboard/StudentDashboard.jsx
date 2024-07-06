import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const [marksValues, setMarksValues] = useState({
    math: "",
    english: "",
    hindi: "",
    science: "",
    sst: "",
    total: "",
    per: "",
    remarks: "",
  });
  const [marksValues2, setMarksValues2] = useState({
    math: "",
    english: "",
    hindi: "",
    science: "",
    sst: "",
  });
  const [keyValue, setKeyValue] = useState([]);
  const [values, setValues] = useState(0);
  const [total1, setTotal1] = useState({ total: "" });
  const [total, setTotal] = useState({ total: "" });

  let navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const {
    name,
    rollNo,
    userType,
    schoolName,
    section,
    fatherName,
    myClass,
    dob,
    id,
  } = userData;

  console.log(rollNo);

  console.log(marksValues);
  const getResult = async () => {
    try {
      let response = await fetch(
        `http://localhost:8081/api/profiles/rollno/${rollNo}`
      );
      let jsData = await response.json();
      setMarksValues({
        math: jsData?.mathsScore,
        english: jsData?.englishScore,
        hindi: jsData?.hindiScore,
        science: jsData?.scienceScore,
        sst: jsData?.socialScienceScore,
        total: jsData?.totalMarks,
        per: jsData?.totalPercentage,
        remarks: jsData?.remarks,
      });
      setTotal({ total: jsData?.totalPercentage });
      setTotal1({ total: jsData?.totalPercentage });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleMarks = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setMarksValues2((preData) => {
        return { ...preData, [name]: +value };
      });
      setTotal({ total: "" });
    }
    setKeyValue([...keyValue, +value]);
    if (!checked) {
      const filterValue = keyValue.filter((item) => item !== +value);
      setKeyValue(filterValue);
      setMarksValues2({ ...marksValues2, [name]: "" });
    }
  };

  const totalHandler = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setKeyValue([]);
      setMarksValues2({
        math: "",
        english: "",
        hindi: "",
        science: "",
        sst: "",
      });
    }
    if (!checked) {
      setTotal({ total: 0 });
    }
  };

  useEffect(() => {
    const sum =
      (keyValue.reduce((acc, curr) => acc + curr, 0) /
        (100 * keyValue.length)) *
        100 || 0;
    setValues(sum.toFixed(1));
    if (keyValue.length == 0) {
      setTotal({ total: total1.total });
    }
  }, [keyValue]);

  useEffect(() => {
    getResult();
  }, []);

  return (
    <>
      <div className="grid grid-cols-12 px-12 py-[120px] ">
        {marksValues.math ? (
          <div className="col-span-8 relative">
            <div className="w-full h-full absolute top-0 flex justify-center items-center">
              <div className="bg-white rounded-lg p-10">
                <div className="flex flex-row gap-40  px-28">
                  <div className="flex flex-col justify-between items-center">
                    <h1 className="text-[#a80946] text-3xl w-max font-bold mb-6">
                      Score Card
                    </h1>
                    <div className="h-28 w-28 rounded-full border-[10px] mb-10 border-[#fd0000] grid place-items-center">
                      <span className="font-bold text-2xl text-[#fd0000]">
                        {total?.total ? total?.total : values}%
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-xl w-max font-semibold">
                        Marks by Subject
                      </h3>
                    </div>
                    <ul>
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          name="math"
                          value={marksValues?.math || ""}
                          onChange={handleMarks}
                          checked={
                            marksValues2.math || marksValues2.math === 0
                              ? true
                              : false
                          }
                        />
                        <span className="ml-2">Mathematics</span>
                      </li>
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          name="english"
                          value={marksValues?.english || ""}
                          onChange={handleMarks}
                          checked={
                            marksValues2.english || marksValues2.english === 0
                              ? true
                              : false
                          }
                        />
                        <span className="ml-2">English</span>
                      </li>
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          name="hindi"
                          value={marksValues?.hindi || ""}
                          onChange={handleMarks}
                          checked={
                            marksValues2.hindi || marksValues2.hindi === 0
                              ? true
                              : false
                          }
                        />
                        <span className="ml-2">Hindi</span>
                      </li>
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          name="science"
                          value={marksValues?.science || ""}
                          onChange={handleMarks}
                          checked={
                            marksValues2.science || marksValues2.science === 0
                              ? true
                              : false
                          }
                        />
                        <span className="ml-2">Science</span>
                      </li>
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          name="sst"
                          value={marksValues?.sst || ""}
                          onChange={handleMarks}
                          checked={
                            marksValues2.sst || marksValues2.sst === 0
                              ? true
                              : false
                          }
                          className="checked:bg-blue-600 checked:border-transparent"
                        />
                        <span className="ml-2 w-max">Social Science</span>
                      </li>
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          name="total"
                          value={marksValues?.per || ""}
                          onChange={totalHandler}
                          checked={total.total ? true : false}
                        />
                        <span className="ml-2">Total</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-row items-center">
                    <p className="w-28 text-xl font-semibold">Remarks :</p>
                    <p
                      className={`w-full font-semibold h-[35px] border-b-2 border-gray-400 px-2 flex flex-row items-center ${
                        marksValues.remarks === "Fail"
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      You are {marksValues.remarks}
                    </p>
                  </div>
                  <div>
                    <div className="w-full h-[35px] border-b-2 border-gray-400 px-2 flex flex-row items-center"></div>
                  </div>
                  <div className=" flex items-center justify-between py-3">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-[#06a948]"></div>
                      <p className="">First Division</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-[#ffd028]"></div>
                      <p className="">Second Division</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-[#fe852e]"></div>
                      <p className="">Third Division</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-[#fd0000]"></div>
                      <p className="">Fourth Division/FaiI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="col-span-8 flex items-center justify-center">
            <p className="text-red-700 text-4xl">Score Not Available</p>
          </div>
        )}
        <div className="col-span-4 ">
          <div className="py-3  flex flex-col gap-7">
            <h2 className="text-[#b40047] text-[24px] font-semibold">
              Profile Details
            </h2>
            <div className="border-2 border-slate-500 rounded-md py-2 px-4 w-full">
              <span className="text-[16px] font-semibold">Name :</span>
              <span className="text-[16px] text-slate-500 ps-2">{name}</span>
            </div>
            <div className="border-2 border-slate-500 rounded-md py-2 px-4 w-full">
              <span className="text-[16px] font-semibold">Roll No :</span>
              <span className="text-[16px] text-slate-500 ps-2">{rollNo} </span>
            </div>
            <div className="border-2 border-slate-500 rounded-md py-2 px-4 w-full">
              <span className="text-[16px] font-semibold">Father Name :</span>
              <span className="text-[16px] text-slate-500 ps-2">
                {fatherName}
              </span>
            </div>
            <div className="border-2 border-slate-500 rounded-md py-2 px-4 w-full">
              <span className="text-[16px] font-semibold">DOB :</span>
              <span className="text-[16px] text-slate-500 ps-2">{dob} </span>
            </div>
            <div className="border-2 border-slate-500 rounded-md py-2 px-4 w-full">
              <span className="text-[16px] font-semibold">Class :</span>
              <span className="text-[16px] text-slate-500 ps-2">{myClass}</span>
            </div>
            <div className="border-2 border-slate-500 rounded-md py-2 px-4 w-full">
              <span className="text-[16px] font-semibold">Section :</span>
              <span className="text-[16px] text-slate-500 ps-2">{section}</span>
            </div>
            <div className="border-2 border-slate-500 rounded-md py-2 px-4 w-full">
              <span className="text-[16px] font-semibold">School :</span>
              <span className="text-[16px] text-slate-500 ps-2">
                {schoolName}
              </span>
            </div>
            {/* <div className="text-center">
                     <button className="text-xl py-3 px-14 rounded-xl font-bold text-white bg-[#be0047]">Submit</button>
               </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
