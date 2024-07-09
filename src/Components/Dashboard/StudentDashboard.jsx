// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import StudentProfile from "./StudentProfile";
// import { baseColor } from "../../Utils/Constant";

// export default function StudentDashboard() {
//   const [marksValues, setMarksValues] = useState({
//     math: "",
//     english: "",
//     hindi: "",
//     science: "",
//     sst: "",
//     total: "",
//     per: "",
//     remarks: "",
//   });
//   const [marksValues2, setMarksValues2] = useState({
//     math: "",
//     english: "",
//     hindi: "",
//     science: "",
//     sst: "",
//   });
//   const [keyValue, setKeyValue] = useState([]);
//   const [values, setValues] = useState(0);
//   const [total1, setTotal1] = useState({ total: "" });
//   const [total, setTotal] = useState({ total: "" });

//   let navigate = useNavigate();
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   const {
//     name,
//     rollNo,
//     userType,
//     schoolName,
//     section,
//     fatherName,
//     myClass,
//     dob,
//     id,
//     memberShip,
//   } = userData;

//   console.log(marksValues);
//   const getResult = async () => {
//     try {
//       let response = await fetch(
//         `http://localhost:8081/api/profiles/rollno/${rollNo}`
//       );
//       let jsData = await response.json();
//       console.log(jsData);
//       setMarksValues({
//         math: jsData?.mathsScore,
//         english: jsData?.englishScore,
//         hindi: jsData?.hindiScore,
//         science: jsData?.scienceScore,
//         sst: jsData?.socialScienceScore,
//         total: jsData?.totalMarks,
//         per: jsData?.totalPercentage,
//         remarks: jsData?.remarks,
//       });
//       setTotal({ total: jsData?.totalPercentage });
//       setTotal1({ total: jsData?.totalPercentage });
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleMarks = (e) => {
//     const { name, value, checked } = e.target;
//     if (checked) {
//       setMarksValues2((preData) => {
//         return { ...preData, [name]: +value };
//       });
//       setTotal({ total: "" });
//     }
//     setKeyValue([...keyValue, +value]);
//     if (!checked) {
//       const filterValue = keyValue.filter((item) => item !== +value);
//       setKeyValue(filterValue);
//       setMarksValues2({ ...marksValues2, [name]: "" });
//     }
//   };

//   const totalHandler = (e) => {
//     const { name, value, checked } = e.target;
//     if (checked) {
//       setKeyValue([]);
//       setMarksValues2({
//         math: "",
//         english: "",
//         hindi: "",
//         science: "",
//         sst: "",
//       });
//     }
//     if (!checked) {
//       setTotal({ total: 0 });
//     }
//   };

//   useEffect(() => {
//     const sum =
//       (keyValue.reduce((acc, curr) => acc + curr, 0) /
//         (100 * keyValue.length)) *
//         100 || 0;
//     setValues(sum.toFixed(1));
//     if (keyValue.length == 0) {
//       setTotal({ total: total1.total });
//     }
//   }, [keyValue]);

//   useEffect(() => {
//     getResult();
//   }, []);

//   return (
//     <>
//       {/* <div className="grid grid-cols-12 px-12 mt-[500px] bg-slate-600">
//         <div className="col-span-12 lg:col-span-8">d</div>
//         <div className="col-span-12 lg:col-span-8">d</div>
//       </div> */}

//       <div className="grid grid-cols-12 px-6 sm:px-12 md:mt-[94px] py-10 gap-5">
//         {marksValues.math ? (
//           <div className="col-span-12 lg:col-span-8 relative">
//             <div className="w-full h-full flex justify-center items-center">
//               <div
//                 style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
//                 className="bg-white rounded-lg py-5 mx-5 md:p-10"
//               >
//                 {memberShip && (
//                   <p className="text-xl md:text-2xl font-bold text-center">
//                     Membership Taken{" "}
//                   </p>
//                 )}
//                 <div className="flex flex-row justify-between gap-5 p-5 sm:px-10 md:px-20 mt-6">
//                   <div className="flex flex-col justify-between items-center">
//                     <h1
//                       className={`text-[${baseColor}] text-xl sm:text-2xl md:text-3xl w-max font-bold mb-6`}
//                     >
//                       Score Card
//                     </h1>
//                     <div
//                       className={`md:h-28 h-20 w-20 md:w-28 rounded-full border-[8px] md:border-[10px] mb-10 border-[${baseColor}]  grid place-items-center`}
//                     >
//                       <span className="font-bold md:text-2xl text-[#fd0000]">
//                         {total?.total ? total?.total : values}%
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex flex-col gap-4">
//                     <div>
//                       <h3 className="text-sm sm:text-base md:text-xl w-max font-semibold">
//                         Marks by Subject
//                       </h3>
//                     </div>
//                     <ul>
//                       <li className="flex items-center">
//                         <input
//                           type="checkbox"
//                           name="math"
//                           value={marksValues?.math || ""}
//                           onChange={handleMarks}
//                           checked={
//                             marksValues2.math || marksValues2.math === 0
//                               ? true
//                               : false
//                           }
//                         />
//                         <span className="ml-2 text-sm md:text-base">
//                           Mathematics
//                         </span>
//                       </li>
//                       <li className="flex items-center">
//                         <input
//                           type="checkbox"
//                           name="english"
//                           value={marksValues?.english || ""}
//                           onChange={handleMarks}
//                           checked={
//                             marksValues2.english || marksValues2.english === 0
//                               ? true
//                               : false
//                           }
//                         />
//                         <span className="ml-2 text-sm md:text-base">
//                           English
//                         </span>
//                       </li>
//                       <li className="flex items-center">
//                         <input
//                           type="checkbox"
//                           name="hindi"
//                           value={marksValues?.hindi || ""}
//                           onChange={handleMarks}
//                           checked={
//                             marksValues2.hindi || marksValues2.hindi === 0
//                               ? true
//                               : false
//                           }
//                         />
//                         <span className="ml-2 text-sm md:text-base">Hindi</span>
//                       </li>
//                       <li className="flex items-center">
//                         <input
//                           type="checkbox"
//                           name="science"
//                           value={marksValues?.science || ""}
//                           onChange={handleMarks}
//                           checked={
//                             marksValues2.science || marksValues2.science === 0
//                               ? true
//                               : false
//                           }
//                         />
//                         <span className="ml-2 text-sm md:text-base">
//                           Science
//                         </span>
//                       </li>
//                       <li className="flex items-center">
//                         <input
//                           type="checkbox"
//                           name="sst"
//                           value={marksValues?.sst || ""}
//                           onChange={handleMarks}
//                           checked={
//                             marksValues2.sst || marksValues2.sst === 0
//                               ? true
//                               : false
//                           }
//                           className="checked:bg-blue-600 checked:border-transparent"
//                         />
//                         <span className="ml-2 text-sm md:text-base w-max">
//                           Social Science
//                         </span>
//                       </li>
//                       <li className="flex items-center">
//                         <input
//                           type="checkbox"
//                           name="total"
//                           value={marksValues?.per || ""}
//                           onChange={totalHandler}
//                           checked={total.total ? true : false}
//                         />
//                         <span className="ml-2 text-sm md:text-base">Total</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="px-5">
//                   <div className="flex mt-2 flex-row items-center">
//                     <p className="min-w-24 md:text-xl font-semibold">
//                       Remarks :
//                     </p>
//                     <p
//                       className={`w-full font-semibold h-[35px] border-b-2 border-gray-400 px-2 flex flex-row items-center ${
//                         marksValues.remarks === "Fail"
//                           ? "text-red-600"
//                           : "text-green-600"
//                       }`}
//                     >
//                       You are {marksValues.remarks}
//                     </p>
//                   </div>
//                   <div>
//                     <div className="w-full h-[35px] border-b-2 border-gray-400 px-2 flex flex-row items-center"></div>
//                   </div>
//                   <div className="grid grid-cols-2 md:grid-cols-4 py-3">
//                     <div className="flex items-center gap-2 md:gap-4">
//                       <div className="min-w-3 h-3 md:min-w-4 md:h-4 rounded-full bg-[#06a948]"></div>
//                       <p className="text-[12px] md:text-base">First Division</p>
//                     </div>
//                     <div className="flex items-center gap-2 md:gap-4">
//                       <div className="min-w-3 h-3 md:min-w-4 md:h-4 rounded-full bg-[#ffd028]"></div>
//                       <p className="text-[12px] md:text-base">
//                         Second Division
//                       </p>
//                     </div>
//                     <div className="flex items-center gap-2 md:gap-4">
//                       <div className="min-w-3 h-3 md:min-w-4 md:h-4 rounded-full bg-[#fe852e]"></div>
//                       <p className="text-[12px] md:text-base">Third Division</p>
//                     </div>
//                     <div className="flex items-center gap-2 md:gap-4">
//                       <div className="min-w-3 h-3 md:min-w-4 md:h-4 rounded-full bg-[#fd0000]"></div>
//                       <p className="text-[12px] w-max md:text-base">
//                         Fourth Division/FaiI
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="col-span-8 flex items-center justify-center">
//             <p className="text-red-700 text-4xl">Score Not Available</p>
//           </div>
//         )}
//         <div className="col-span-12 lg:col-span-4">
//           <StudentProfile
//             name={name}
//             rollNo={rollNo}
//             userType={userType}
//             schoolName={schoolName}
//             section={section}
//             fatherName={fatherName}
//             myClass={myClass}
//             dob={dob}
//             id={id}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentProfile from "./StudentProfile";

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

  const [score, setScore] = useState({});
  const [marksArr, setMarksArr] = useState([]);
  const [percentage, setPercentage] = useState();
  const [defaultPercentage, setDefaultPercentage] = useState();

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

  console.log(score);
  const getResult = async () => {
    try {
      let response = await fetch(
        `http://localhost:8081/api/profiles/rollno/${rollNo}`
      );
      let jsData = await response.json();
      console.log(jsData);
      setDefaultPercentage(jsData.totalPercentage);
      defaultPercentage ? setScore({}) : setScore(jsData);
      setScore(jsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleMarks = (e) => {
    const { name, value, checked } = e.target;
    if (checked && name !== "totalPercentage") {
      setDefaultPercentage("");
    } else if (checked && name === "totalPercentage") {
      setDefaultPercentage(jsData.totalPercentage);
      setScore((prevState) => {
        return {
          ...prevState,
          mathsScore: "",
          englishScore: "",
          hindiScore: "",
          scienceScore: "",
          socialScienceScore: "",
        };
      });
    }
    if (checked) {
      setMarksArr((prevState) => {
        return [...prevState, +value];
      });
    } else if (!checked) {
      const arr = marksArr.filter((item) => item !== +value);
      setMarksArr(arr);
    }
    let sum =
      (marksArr.reduce((acc, curr) => acc + curr, 0) /
        (100 * marksArr.length)) *
        100 || 0;
    setPercentage(sum.toFixed(1));
  };
  console.log(marksArr);
  console.log(percentage);

  useEffect(() => {
    getResult();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-[#a80946] text-3xl w-max font-bold mb-6">
          Score Card
        </h1>
        <div className="h-28 w-28 rounded-full border-[10px] mb-10 border-[#fd0000] grid place-items-center">
          <span className="font-bold text-2xl text-[#fd0000]">
            {defaultPercentage || percentage}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl w-max font-semibold">Marks by Subject</h3>
        </div>
        <form onChange={handleMarks}>
          <li className="flex items-center">
            <input
              type="checkbox"
              name="mathsScore"
              value={score?.mathsScore}
              checked={score?.mathsScore ? true : false}
            />
            <span className="ml-2 text-sm md:text-base">Mathematics</span>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              name="englishScore"
              value={score?.englishScore}
              checked={score?.englishScore ? true : false}
              // value={marksValues?.english || ""}
              // onChange={handleMarks}
              // checked={
              //   marksValues2.english || marksValues2.english === 0
              //     ? true
              //     : false
              // }
            />
            <span className="ml-2">English</span>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              name="hindiScore"
              value={score?.hindiScore}
              checked={score?.hindiScore ? true : false}
              // value={marksValues?.hindi || ""}
              // onChange={handleMarks}
              // checked={
              //   marksValues2.hindi || marksValues2.hindi === 0 ? true : false
              // }
            />
            <span className="ml-2">Hindi</span>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              name="scienceScore"
              value={score?.scienceScore}
              checked={score?.scienceScore ? true : false}
              // value={marksValues?.science || ""}
              // onChange={handleMarks}
              // checked={
              //   marksValues2.science || marksValues2.science === 0
              //     ? true
              //     : false
              // }
            />
            <span className="ml-2">Science</span>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              name="socialScienceScore"
              value={score?.socialScienceScore}
              checked={score?.socialScienceScore ? true : false}
              // value={marksValues?.sst || ""}
              // onChange={handleMarks}
              // checked={
              //   marksValues2.sst || marksValues2.sst === 0 ? true : false
              // }
              className="checked:bg-blue-600 checked:border-transparent"
            />
            <span className="ml-2 w-max">Social Science</span>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              name="totalPercentage"
              // value={score?.totalPercentage}
              checked={defaultPercentage ? true : false}
              // value={marksValues?.per || ""}
              // onChange={totalHandler}
            />
            <span className="ml-2">Total</span>
          </li>
        </form>
      </div>
    </>
  );
}
