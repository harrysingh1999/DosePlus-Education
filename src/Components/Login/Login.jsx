import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../Images/logo.png";

const Login = () => {
  let formusername = useRef();
  let formpassword = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    let username = formusername.current.value;
    let password = formpassword.current.value;
    const loginDetails = { username, password };

    try {
      const response = await fetch("http://localhost:8081/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginDetails),
      });
      console.log(response);

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful", data);
        localStorage.setItem("userData", JSON.stringify(data));
        // userData.userType === "Student"
        //   ?
        navigate("/StudentDashboard");
        // : navigate("/AdminDashboard");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error logging in", error);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-[86vh] flex justify-center bg-gray-100 md:mt-[90px] px-4">
      <div className="pt-10">
        <img className="w-24 mx-auto py-6" src={logo} alt="logo" />
        <div className="bg-white mb-10 p-6 rounded-xl shadow-md w-full max-w-sm text-[#b40047]">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                ref={formusername}
                placeholder="Username"
                className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                ref={formpassword}
                placeholder="Password"
                className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <NavLink
                to="/Forget"
                className="text-sm text-blue-500 hover:underline mt-2 block md:ml-48 font-bold"
              >
                Forgot Password?
              </NavLink>
            </div>
          </form>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="flex justify-between items-center mt-6 text-[#b40047]">
            <button
              onClick={(e) => handleLogin(e)}
              className=" border border-[#791b1bd3] py-2 px-4 rounded hover:bg-[#791b1bd3] hover:text-white transition duration-300 font-bold"
            >
              Sign In
            </button>
            <NavLink
              to="/Signup"
              className=" border border-[#791b1bd3] py-2 px-4 rounded hover:bg-[#791b1bd3] hover:text-white transition duration-300 font-bold"
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
