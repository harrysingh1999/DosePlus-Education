import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../Images/logo.svg";
import { signupDetails } from "../../Utils/Constant";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    dob: "",
    myClass: "",
    rollNo: "",
    section: "",
    phoneNumber: "",
    email: "",
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const userData = JSON.parse(localStorage.getItem("userData")) || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   window.scrollTo(0, 0);
  //   const response = await fetch("http://152.52.81.252:8080/api/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });
  //   console.log(response.ok);

  //   if (response.ok) {
  //     const result = await response.json();
  //     console.log(result);
  //     setMessage("Successfully signed up!");
  //   } else {
  //     const error = await response.text();
  //     if (error === "Username already exists") {
  //       setMessage("Username already exists");
  //     } else if (error === "Email already exists") {
  //       setMessage("Email already exists");
  //     } else {
  //       setMessage("An error occurred during signup.");
  //     }
  //   }
  // };

  const [userMarks, setUserMarks] = useState({});

  useEffect(() => {
    const studentMarks = {
      mathsScore: Math.floor(Math.random() * 100 + 1),
      englishScore: Math.floor(Math.random() * 100 + 1),
      hindiScore: Math.floor(Math.random() * 100 + 1),
      scienceScore: Math.floor(Math.random() * 100 + 1),
      socialScienceScore: Math.floor(Math.random() * 100 + 1),
    };
    setUserMarks(studentMarks);
  }, []);

  const totalPercentage = (
    ((userMarks.mathsScore +
      userMarks.englishScore +
      userMarks.hindiScore +
      userMarks.scienceScore +
      userMarks.socialScienceScore) /
      500) *
    100
  ).toFixed(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.username !== userData.username) {
      setMessage("Successfully Signed up!");
      localStorage.removeItem("userData");
      localStorage.setItem("userData", JSON.stringify(formData));
      localStorage.removeItem("userMarks");
      localStorage.setItem("userMarks", JSON.stringify(userMarks));
      localStorage.removeItem("studentTotalPercentage");
      localStorage.setItem(
        "studentTotalPercentage",
        JSON.stringify(totalPercentage)
      );
    } else {
      setMessage("Username already exist");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 pt-28">
      <img className="w-16 md:w-24 mx-auto py-6" src={logo} alt="logo" />
      <div className="bg-white p-6 mb-5 rounded-xl shadow-md w-[50%] mx-auto">
        <h2 className="text-center text-2xl font-bold mb-4 text-[#5BCCFA]">
          Sign Up
        </h2>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-wrap justify-around">
            {signupDetails.map((input) => {
              return (
                <div className="flex flex-col gap-1" key={input.label}>
                  <label
                    className="text-sm md:text-base font-semibold text-gray-600"
                    htmlFor=""
                  >
                    {input.label}
                  </label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    required
                    name={input.name}
                    value={formData[input.name]}
                    onChange={handleChange}
                    className="px-4 py-2 placeholder:text-sm md:placeholder:text-base w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              );
            })}
          </div>

          {message && (
            <p
              className={`text-center ${
                formData.username !== userData.username
                  ? "text-green-400"
                  : "text-red-500 "
              }  mt-4`}
            >
              {message}
            </p>
          )}
          {message === "Successfully Signed up!" && (
            <NavLink to="/Login">
              <div className="flex justify-center w-full">
                <button className="bg-[#5BCCFA] hover:bg-[#31b8ed] text-white rounded-lg w-full p-2 text-center mt-2">
                  {" "}
                  Go to Login{" "}
                </button>{" "}
              </div>
            </NavLink>
          )}

          <div className="flex justify-center mt-4">
            <button className="w-full text-sm md:text-base bg-[#5BCCFA] text-white py-2 px-4 rounded hover:bg-[#31b8ed] focus:outline-none focus:ring-2">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
