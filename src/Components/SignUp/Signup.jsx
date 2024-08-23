import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../Images/logo.svg";
import { studentMarks, totalPercentage } from "../../Utils/Constant";
// import CheckboxDemo from "../Checkbox/CheckboxDemo";
// import CheckBox from "../Checkbox/CheckBox";
// import CustomeCheckBox from "../Checkbox/CustomeCheckBox";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    dob: "",
    username: "",
    myClass: "",
    section: "",
    rollNo: "",
    schoolName: "",
    phoneNumber: "",
    email: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.username !== userData.username) {
      localStorage.removeItem("userData");
      localStorage.setItem("userData", JSON.stringify(formData));
      localStorage.removeItem("userMarks");
      localStorage.setItem("userMarks", JSON.stringify(studentMarks));
      localStorage.removeItem("studentTotalPercentage");
      localStorage.setItem(
        "studentTotalPercentage",
        JSON.stringify(totalPercentage)
      );
    } else {
      console.log("username already exist");
    }
  };

  return (
    <div className="min-h-screen flex justify-center md:mt-[90px] bg-gray-100 px-5">
      <div className=" w-full sm:w-auto mx-auto py-6">
        <img className="w-16 md:w-24 mx-auto py-6" src={logo} alt="logo" />
        <div className="bg-white p-6 mb-5 rounded-xl shadow-md">
          <h2 className="text-xl md:text-2xl font-bold mb-6 sm:mx-52 md:mx-64 text-center text-[#5BCCFA]">
            Sign Up
          </h2>
          {message && (
            <p className="mb-2 text-center text-red-500">{message}</p>
          )}
          {message === "Successfully signed up!" && (
            <div className="flex justify-center">
              <NavLink to="/Login">
                <button className="bg-[#5BCCFA] rounded-lg p-2 text-center mb-4">
                  {" "}
                  Go to Login{" "}
                </button>{" "}
              </NavLink>
            </div>
          )}
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label
                    className="text-sm md:text-base font-semibold text-gray-600"
                    htmlFor=""
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="px-4 py-2 placeholder:text-sm md:placeholder:text-base w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="text-sm md:text-base font-semibold text-gray-600"
                    htmlFor=""
                  >
                    Father's Name
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    placeholder="Father's Name"
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="px-4 py-2 placeholder:text-sm md:placeholder:text-base w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label
                    className="text-sm md:text-base font-semibold text-gray-600"
                    htmlFor=""
                  >
                    Date Of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    placeholder="DOB: 23/9/1990"
                    value={formData.dob}
                    onChange={handleChange}
                    className="px-4 py-2 text-sm md:text-base text-gray-400 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    className="text-sm md:text-base font-semibold text-gray-600"
                    htmlFor=""
                  >
                    School Name
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    placeholder="School"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="px-4 py-2 placeholder:text-sm md:placeholder:text-base w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label
                    className="text-sm md:text-base font-semibold text-gray-600"
                    htmlFor=""
                  >
                    Class
                  </label>
                  <input
                    type="text"
                    name="myClass"
                    placeholder="Class"
                    value={formData.myClass}
                    onChange={handleChange}
                    className="px-4 py-2 placeholder:text-sm md:placeholder:text-base w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="text-sm md:text-base font-semibold text-gray-600"
                    htmlFor=""
                  >
                    Roll no.
                  </label>
                  <input
                    type="number"
                    name="rollNo"
                    placeholder="Enter your Roll no"
                    value={formData.rollNo}
                    onChange={handleChange}
                    className="px-4 py-2 placeholder:text-sm md:placeholder:text-base w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label
                    className="text-sm md:text-base font-semibold text-gray-600"
                    htmlFor=""
                  >
                    Section
                  </label>
                  <input
                    type="text"
                    name="section"
                    placeholder="section: B"
                    value={formData.section}
                    onChange={handleChange}
                    className="px-4 py-2 placeholder:text-sm md:placeholder:text-base w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label
                    className="text-sm md:text-base font-semibold text-gray-600"
                    htmlFor=""
                  >
                    Phone no.
                  </label>
                  <input
                    type="number"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="px-4 py-2 placeholder:text-sm md:placeholder:text-base w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="text-sm md:text-base font-semibold text-gray-600"
                    htmlFor=""
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-4 py-2 placeholder:text-sm md:placeholder:text-base w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label
                    className="text-sm md:text-base font-semibold text-gray-600"
                    htmlFor=""
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="px-4 py-2 placeholder:text-sm md:placeholder:text-base w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="text-sm md:text-base font-semibold text-gray-600"
                    htmlFor=""
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="px-4 py-2 placeholder:text-sm md:placeholder:text-base w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {/* <div className="flex flex-col gap-1">
                  <label
                    className="text-sm md:text-base font-semibold text-gray-600"
                    htmlFor="userType"
                  >
                    UserType
                  </label>
                  <select
                    onChange={handleChange}
                    name="userType"
                    value={formData.userType}
                    className="px-4 py-2 text-sm md:text-base text-gray-400 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  >
                    <option>Student</option>
                    <option>Admin</option>
                  </select>
                </div> */}
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="w-full text-sm md:text-base bg-[#5BCCFA] text-white py-2 px-4 rounded hover:bg-[#34a1cc] focus:outline-none focus:ring-2">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
