// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// const SignUp = () => {

//   const navigate = useNavigate()

//   const [formData, setFormData] = useState({
//     name: "",
//     fatherName: "",
//     dob: "",
//     username: "",
//     myClass: "",
//     section: "",
//     rollNo: "",
//     schoolName: "",
//     phoneNumber: "",
//     email: "",
//     password: "",
//     userType: "Student",
//   });
  
//   const [message, setMessage] = useState("");
//   const userData =  JSON.parse(localStorage.getItem('userData'))

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:8080/api/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });
//     console.log(response.ok);

//     if (response.ok) {
//       const result = await response.json();
//       console.log(result);
//       setMessage("Successfully signed up!");
     
//     } else {
//       const error = await response.text();
//       if (error === "Username already exists") {
//         setMessage("Username already exists");
//       } else if (error === "Email already exists") {
//         setMessage("Email already exists");
//       } else {
//         setMessage("An error occurred during signup.");
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md sm:max-w-lg mt-40 mb-8 mx-8">
//         <h2 className="text-3xl font-bold mb-6 text-center text-[#791b1bd3]">
//           Sign Up
//         </h2>
//         <form onSubmit={(e) => handleSubmit(e)}>
//           <div className="grid grid-cols-1 gap-4">
//             <input
//               type="text"
//               placeholder="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
           
//             <input
//               type="text"
//               name="fatherName"
//               placeholder="Father's Name"
//               value={formData.fatherName}
//               onChange={handleChange}
//               className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               name="dob"
//               placeholder="DOB: 23/9/1990"
//               value={formData.dob}
//               onChange={handleChange}
//               className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formData.username}
//               onChange={handleChange}
//               className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="number"
//               name="rollNo"
//               placeholder="Enter your Roll no"
//               value={formData.rollNo}
//               onChange={handleChange}
//               className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <label htmlFor="userType">UserType: </label>
//             <select onChange={handleChange} name="userType" value={formData.userType} className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 " >
//               <option  >Student</option>
//               <option  >Admin</option>
//             </select>
//             <input
//               type="text"
//               name="myClass"
//               placeholder="Class"
//               value={formData.myClass}
//               onChange={handleChange}
//               className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               name="section"
//               placeholder="section: B"
//               value={formData.section}
//               onChange={handleChange}
//               className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               name="schoolName"
//               placeholder="School"
//               value={formData.schoolName}
//               onChange={handleChange}
//               className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="number"
//               name="phoneNumber"
//               placeholder="Phone Number"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="flex justify-center mt-6">
//             <button className="w-full bg-[#791b1bd3] text-white py-2 px-4 rounded hover:bg-[#5a1515] focus:outline-none focus:ring-2 focus:ring-red-500">
//               Register
//             </button>
//           </div>
//         </form>
//         {message && <p className="mt-4 text-center text-red-500">{message}</p>}
//         {message === 'Successfully signed up!' &&  <NavLink to='/Login'><button className="mt-4 bg-red-400 rounded-lg text-white p-2 text-center"> Login </button> </NavLink>}
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../Images/logo.png";


const SignUp = () => {

  const navigate = useNavigate()

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
    userType: "Student",
  });

  const [message, setMessage] = useState("");
  const userData = JSON.parse(localStorage.getItem('userData'))

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(response.ok);

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      setMessage("Successfully signed up!");

    } else {
      const error = await response.text();
      if (error === "Username already exists") {
        setMessage("Username already exists");
      } else if (error === "Email already exists") {
        setMessage("Email already exists");
      } else if (error === "RollNo already exists") {
        setMessage("Roll No. already exists");
      } else {
        setMessage("An error occurred during signup.");
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center md:mt-[90px] bg-gray-100 px-5">
      <div className=" w-full sm:w-auto mx-auto py-6">
        <img className="w-24 mx-auto py-6" src={logo} alt="logo" />
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-6 mx-40 text-center text-[#b40047]">
            Sign Up
          </h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-600" htmlFor="">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-600" htmlFor="">Father's Name</label>
                <input
                  type="text"
                  name="fatherName"
                  placeholder="Father's Name"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-600" htmlFor="">Date Of Birth</label>
                <input
                  type="text"
                  name="dob"
                  placeholder="DOB: 23/9/1990"
                  value={formData.dob}
                  onChange={handleChange}
                  className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-600" htmlFor="">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-600" htmlFor="">Roll no.</label>
                <input
                  type="number"
                  name="rollNo"
                  placeholder="Enter your Roll no"
                  value={formData.rollNo}
                  onChange={handleChange}
                  className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className=" font-semibold text-gray-600" htmlFor="userType">UserType</label>
                <select onChange={handleChange} name="userType" value={formData.userType} className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 " >
                  <option  >Student</option>
                  <option  >Admin</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-600" htmlFor="">Class</label>
                <input
                  type="text"
                  name="myClass"
                  placeholder="Class"
                  value={formData.myClass}
                  onChange={handleChange}
                  className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-600" htmlFor="">Section</label>
                <input
                  type="text"
                  name="section"
                  placeholder="section: B"
                  value={formData.section}
                  onChange={handleChange}
                  className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-600" htmlFor="">School Name</label>
                <input
                  type="text"
                  name="schoolName"
                  placeholder="School"
                  value={formData.schoolName}
                  onChange={handleChange}
                  className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-600" htmlFor="">Phone no.</label>
                <input
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-600" htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-600" htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          {message && <p className="mt-4 text-center text-red-500">{message}</p>}

            {/* <div className="flex justify-center mt-6">
              <button className="w-full bg-[#791b1bd3] text-white py-2 px-4 rounded hover:bg-[#5a1515] focus:outline-none focus:ring-2 focus:ring-red-500">
                Register
              </button>
            </div> */}
               {message === 'Successfully signed up!' ? <NavLink to='/Login'>
             <button className="w-full  mt-6 bg-[#791b1bd3] text-white py-2 px-4 rounded hover:bg-[#791b1bfe] focus:outline-none
              focus:ring-2 focus:ring-red-500 mx-auto"       
              >
             Login
            </button>
            </NavLink>  :
              <button className="w-full mt-6 bg-[#b40047] text-white py-2 px-4 rounded hover:bg-[#791b1bfe] focus:outline-none
              focus:ring-2 focus:ring-red-500 mx-auto"       
              >
             Register
            </button>
            }
          </form>
  
        </div>
      </div>
    </div>
  );
};

export default SignUp;
