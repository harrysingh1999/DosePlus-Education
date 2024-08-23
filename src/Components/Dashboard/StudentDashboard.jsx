import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentProfile from "./StudentProfile";
import { baseColor } from "../../Utils/Constant";

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

  const [marksArr, setMarksArr] = useState([]);
  const [percentage, setPercentage] = useState();
  const [defaultPercentage, setDefaultPercentage] = useState();

  const userData = JSON.parse(localStorage.getItem("userData"));
  const userMarks = JSON.parse(localStorage.getItem("userMarks"));
  const studentTotalPercentage = JSON.parse(
    localStorage.getItem("studentTotalPercentage")
  );

  const [marks, setMarks] = useState(userMarks);

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

  // const getResult = async () => {
  //   try {
  //     let response = await fetch(
  //       `http://152.52.81.252:8080/api/profiles/rollno/${rollNo}`
  //     );
  //     let jsData = await response.json();
  //     setDefaultPercentage(jsData.totalPercentage);
  //     setScore(jsData);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  useEffect(() => {
    setDefaultPercentage(studentTotalPercentage);
    setScore(marks);
  }, []);

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

  useEffect(() => {
    let sum =
      (marksArr.reduce((acc, curr) => acc + curr, 0) /
        (100 * marksArr.length)) *
        100 || 0;
    setPercentage(Number.isInteger(sum) ? sum : sum.toFixed(1));
  }, [marksArr]);

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
                      className={`md:h-28 h-20 w-20 md:w-28 rounded-full border-[8px] md:border-[10px] mb-10 border-[${baseColor}]  grid place-items-center`}
                    >
                      <span className="font-bold md:text-2xl text-[#34a1cc]">
                        {defaultPercentage || percentage}%
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-sm text-[#34a1cc] sm:text-base md:text-xl w-max font-semibold">
                        Marks by Subject
                      </h3>
                    </div>
                    <ul>
                      <li className="flex items-center">
                        {" "}
                        <input
                          type="checkbox"
                          name="mathsScore"
                          value={score?.mathsScore}
                          onChange={handleMarks}
                          checked={score2?.mathsScore ? true : false}
                        />
                        <span className="ml-2 text-sm md:text-base">
                          Mathematics
                        </span>
                      </li>
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          name="englishScore"
                          value={score?.englishScore}
                          onChange={handleMarks}
                          checked={
                            score2?.englishScore || score2.englishScore === 0
                              ? true
                              : false
                          }
                        />
                        <span className="ml-2">English</span>
                      </li>
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          name="hindiScore"
                          value={score?.hindiScore}
                          onChange={handleMarks}
                          checked={
                            score2?.hindiScore || score2?.hindiScore === 0
                              ? true
                              : false
                          }
                        />
                        <span className="ml-2">Hindi</span>
                      </li>
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          name="scienceScore"
                          value={score?.scienceScore}
                          onChange={handleMarks}
                          checked={
                            score2?.scienceScore || score2?.scienceScore === 0
                              ? true
                              : false
                          }
                        />
                        <span className="ml-2">Science</span>
                      </li>
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          name="socialScienceScore"
                          value={score?.socialScienceScore}
                          onChange={handleMarks}
                          checked={
                            score2?.socialScienceScore ||
                            score2?.socialScienceScore === 0
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
                          name="totalPercentage"
                          onChange={handleMarks}
                          checked={defaultPercentage ? true : false}
                        />
                        <span className="ml-2">Total</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="px-5 md:p-0">
                  <div className="flex mt-2 flex-row items-center">
                    <p className="min-w-24 md:text-xl font-semibold">
                      Remarks :
                    </p>
                    <p
                      className={`w-full text-sm md:text-base font-semibold h-[35px] border-b-2 border-gray-400 px-2 flex flex-row items-center ${
                        score.remarks === "Fail"
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      You are {score.remarks}
                    </p>
                  </div>
                  <div>
                    <div className="w-full h-[35px] border-b-2 border-gray-400 px-2 flex flex-row items-center"></div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 py-3">
                    <div className="flex items-center gap-2 ">
                      <div className="min-w-3 h-3 md:min-w-4 md:h-4 rounded-full bg-[#06a948]"></div>
                      <p className="text-xs md:text-base">First Division</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <div className="min-w-3 h-3 md:min-w-4 md:h-4 rounded-full bg-[#ffd028]"></div>
                      <p className="text-xs md:text-base">Second Division</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <div className="min-w-3 h-3 md:min-w-4 md:h-4 rounded-full bg-[#fe852e]"></div>
                      <p className="text-xs md:text-base">Third Division</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <div className="min-w-3 h-3 md:min-w-4 md:h-4 rounded-full bg-[#fd0000]"></div>
                      <p className="text-xs w-max md:text-base">
                        Fourth Division/FaiI
                      </p>
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
        <div className="col-span-12 lg:col-span-4  grid place-items-center">
          <StudentProfile
            name={name}
            rollNo={rollNo}
            userType={userType}
            schoolName={schoolName}
            section={section}
            fatherName={fatherName}
            myClass={myClass}
            dob={dob}
            id={id}
          />
        </div>
      </div>
    </>
  );
}
