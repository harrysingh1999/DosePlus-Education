import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../Images/logo.svg";

const Login = () => {
  let formusername = useRef();
  let formpassword = useRef();


  const navigate = useNavigate();
  const [error, setError] = useState("");

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   let username = formusername.current.value;
  //   let password = formpassword.current.value;
  //   const loginDetails = { username, password };

  //   try {
  //     const response = await fetch("http://152.52.81.252:8080/api/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(loginDetails),
  //     });
  //     console.log(response);

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("Login successful", data);
  //       localStorage.setItem("userData", JSON.stringify(data));
  //       navigate("/StudentDashboard");
  //     } else if (
  //       formusername.current.value === "" &&
  //       formpassword.current.value === ""
  //     ) {
  //       setError("Username and Password can't be empty");
  //     } else {
  //       setError("Invalid username or password");
  //     }
  //   } catch (error) {
  //     setError(error);
  //   }
  // };
  const handleLogin = async (e) => {
    const userData = JSON.parse(localStorage.getItem("userData") || {});
    e.preventDefault();
    let username = formusername.current.value;
    let password = formpassword.current.value;

    if (username === userData?.username && password === userData?.password) {
      navigate("/StudentDashboard");
    } else {
      console.log("login failed");
    }
  };

  return (
    <div className="min-h-[86vh] flex justify-center bg-gray-100 md:mt-[90px] px-4">
      <div className="pt-4">
        <img className="w-16 md:w-24 mx-auto py-6" src={logo} alt="logo" />
        <div
          className={`bg-white mb-10 p-6 rounded-xl shadow-md w-full max-w-sm `}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-[#5BCCFA]">
            Login
          </h2>
          {error && <p className="text-red-500 mb-2 text-center">{error}</p>}
          <form>
            <div className="mb-4">
              <input
                type="text"
                ref={formusername}
                required
                placeholder="Username"
                className="mt-1 px-4 py-2 placeholder:text-sm md:placeholder:text-base w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                ref={formpassword}
                required
                placeholder="Password"
                className="mt-1 px-4 py-2 placeholder:text-sm md:placeholder:text-base w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* <NavLink
                to="/ForgetPassword"
                className="text-xs md:text-sm text-blue-500 hover:underline mt-2 block md:ml-48 font-bold"
              >
                Forgot Password?
              </NavLink> */}
            </div>
          </form>

          <div className="flex justify-between items-center mt-6 text-[#5BCCFA]">
            <button
              onClick={(e) => handleLogin(e)}
              className="text-xs md:text-sm border border-[#5BCCFA] py-2 px-4 rounded hover:bg-[#5BCCFA] hover:text-white transition duration-300 font-bold"
            >
              Sign In
            </button>
            <NavLink
              to="/Signup"
              className="text-xs md:text-sm border border-[#5BCCFA] py-2 px-4 rounded hover:bg-[#5BCCFA] hover:text-white transition duration-300 font-bold"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
