import React, { useState } from "react";
import StudentProfile from "./StudentProfile";
import {
  baseColor,
  checkboxDetails,
  divisionDetails,
} from "../../Utils/Constant";
import useCalculateMarks from "../../Utils/CustomHooks/useCalculateMarks";

export default function StudentDashboard() {
  const [score, setScore] = useState({
    mathsScore: "",
    englishScore: "",
    hindiScore: "",
    scienceScore: "",
    socialScienceScore: "",
    remarks: "",
  });

  const [score2, setScore2] = useState({
    mathsScore: "",
    englishScore: "",
    hindiScore: "",
    scienceScore: "",
    socialScienceScore: "",
  });

  const [percentage, setPercentage] = useState();
  const [defaultPercentage, setDefaultPercentage] = useState();
  const [marksArr, setMarksArr] = useState([]);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const { name, rollNo, section, fatherName, myClass, dob } = userData;

  const studentTotalPercentage = JSON.parse(
    localStorage.getItem("studentTotalPercentage")
  );

  useCalculateMarks(
    setScore,
    setPercentage,
    setDefaultPercentage,
    studentTotalPercentage,
    marksArr
  );

  const handleMarks = (e) => {
    const { name, value, checked } = e.target;
    if (checked && name !== "totalPercentage") {
      setScore2((prevState) => {
        return { ...prevState, [name]: +value };
      });
      setMarksArr((prevState) => {
        return [...prevState, +value];
      });
      setDefaultPercentage("");
    } else if (checked && name === "totalPercentage") {
      setDefaultPercentage(studentTotalPercentage);
      setMarksArr([]);
      setScore2((prevState) => {
        return {
          ...prevState,
          mathsScore: "",
          englishScore: "",
          hindiScore: "",
          scienceScore: "",
          socialScienceScore: "",
        };
      });
    } else if (!checked) {
      const arr = marksArr.filter((item) => item !== +value);
      setMarksArr(arr);
      setScore2((prevState) => {
        return { ...prevState, [name]: "" };
      });
    }
  };

  return (
    <>
      <div className="grid grid-cols-12 px-6 sm:px-12 md:mt-[94px] py-8 gap-5">
        {score.mathsScore ? (
          <div className="col-span-12 lg:col-span-8 relative">
            <div className="w-full h-full flex justify-center items-center">
              <div
                style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
                className="bg-white rounded-lg py-5 mx-5 md:px-10"
              >
                <div className="flex flex-row justify-between gap-5 p-5 sm:px-10 md:px-20 mt-6">
                  <div className="flex flex-col justify-between items-center">
                    <h1
                      className={`text-[${baseColor}] text-xl sm:text-2xl md:text-3xl w-max font-bold mb-6`}
                    >
                      Score Card
                    </h1>
                    <div
                      className={`md:h-28 h-20 w-20 md:w-28 rounded-full border-[8px] md:border-[10px] mb-10 
                        border-[${baseColor}] font-bold  grid place-items-center text-base md:text-xl ${
                        defaultPercentage >= 85 || percentage >= 85
                          ? "text-green-600"
                          : defaultPercentage >= 70 || percentage >= 70
                          ? "text-[#dac134]"
                          : defaultPercentage >= 35 || percentage >= 35
                          ? "text-[#fe852e]"
                          : "text-[#fd0000]"
                      }`}
                    >
                      {defaultPercentage || percentage}%
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-sm text-[#34a1cc] sm:text-base md:text-xl w-max font-semibold">
                        Marks by Subject
                      </h3>
                    </div>
                    <ul>
                      {checkboxDetails.map((checkbox) => {
                        return (
                          <li key={checkbox.name} className="flex items-center">
                            {" "}
                            <input
                              type={checkbox.type}
                              name={checkbox.name}
                              value={score[checkbox.name]}
                              onChange={handleMarks}
                              checked={score2[checkbox.name] ? true : false}
                            />
                            <span className="ml-2 text-sm md:text-base">
                              {checkbox.label}
                            </span>
                          </li>
                        );
                      })}
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          name="totalPercentage"
                          onChange={handleMarks}
                          checked={defaultPercentage ? true : false}
                        />
                        <span className="ml-2">Total</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="px-3 md:p-0">
                  <div className="flex mt-2 flex-row items-center">
                    <p className="min-w-24 md:text-xl font-semibold">
                      Remarks :
                    </p>
                    <p
                      className={`w-full text-sm md:text-base font-semibold h-[35px] border-b-2 border-gray-400 px-2 flex flex-row items-center ${
                        defaultPercentage >= 85 || percentage >= 85
                          ? "text-green-600"
                          : defaultPercentage >= 70 || percentage >= 70
                          ? "text-[#dac134]"
                          : defaultPercentage >= 35 || percentage >= 35
                          ? "text-[#fe852e]"
                          : "text-[#fd0000]"
                      } text-base md:text-lg`}
                    >
                      {`You ${
                        defaultPercentage >= 85 || percentage >= 85
                          ? "got 1st Division"
                          : defaultPercentage >= 70 || percentage >= 70
                          ? "got 2nd Division"
                          : defaultPercentage >= 35 || percentage >= 35
                          ? "got 3rd Division"
                          : "are Fail"
                      }
                      `}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 py-3">
                    {divisionDetails.map((division) => {
                      return (
                        <div
                          key={division.division}
                          className="flex items-center gap-2 "
                        >
                          <div
                            className={`min-w-3 h-3 md:min-w-4 md:h-4 rounded-full ${division.color}`}
                          ></div>
                          <p className="text-xs md:text-base">
                            {division.division}
                          </p>
                        </div>
                      );
                    })}
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
        <div className="col-span-12 lg:col-span-4  grid place-items-center">
          <StudentProfile
            name={name}
            rollNo={rollNo}
            section={section}
            fatherName={fatherName}
            myClass={myClass}
            dob={dob}
          />
        </div>
      </div>
    </>
  );
}
