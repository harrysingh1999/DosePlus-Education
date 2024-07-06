import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../Images/logo.png";

const Forget = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const formEmail = useRef();
  const formToken = useRef();
  const formNewPassword = useRef();
  const navigate = useNavigate();

  const handleGetToken = async () => {
    try {
      const response = await fetch(
        `http://localhost:8081/api/forgot-password?email=${formEmail.current.value}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.ok);
      if (response.ok) {
        const data = await response.text();
        setMessage(data);
        setError("");
      } else {
        const errorData = await response.text();
        setError(errorData);
        setMessage("");
      }
    } catch (error) {
      console.error("Error getting token", error);
      setError("Something went wrong. Please try again later.");
      setMessage("");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    let token = formToken.current.value;
    let newPassword = formNewPassword.current.value;

    try {
      const response = await fetch("http://localhost:8081/api/reset-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword }),
      });

      if (response.ok) {
        const data = await response.text();
        setMessage(data);
        setError("");
      } else {
        const errorData = await response.text();
        setError(errorData);
        setMessage("");
      }
    } catch (error) {
      console.error("Error resetting password", error);
      setError("Something went wrong. Please try again later.");
      setMessage("");
    }
  };

  return (
    <div className="min-h-[95vh] flex justify-center bg-gray-100 md:mt-[90px] px-4">
      <div className="pt-10">
        <img className="w-24 mx-auto py-6" src={logo} alt="logo" />
        <div className="bg-white p-6 mb-10 rounded-xl shadow-md w-full max-w-sm text-[#b40047]">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
            Forgt Password
          </h2>
          <form onSubmit={(e) => handleResetPassword(e)}>
            <div className="mb-4">
              <input
                type="email"
                ref={formEmail}
                placeholder="Email"
                className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                ref={formToken}
                placeholder="OTP"
                className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={handleGetToken}
                className="text-sm text-blue-500 hover:underline mt-2 block ml-44 md:ml-64"
              >
                Get on mail
              </button>
            </div>
            <div className="mb-4">
              <input
                type="password"
                ref={formNewPassword}
                placeholder="New Password"
                className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {message && <div className="text-green-500 mb-4">{message}</div>}
            {error && <div className="text-red-500 mb-4">{error}</div>}

            {message === "Password reset successfully" ? (
              <NavLink to="/Login">
                <button
                  className="w-full bg-[#791b1bd3] text-white py-2 px-4 rounded hover:bg-[#791b1bfe] focus:outline-none
              focus:ring-2 focus:ring-red-500 mx-auto"
                >
                  Login
                </button>
              </NavLink>
            ) : (
              <button
                className="w-full bg-[#b40047] text-white py-2 px-4 rounded hover:bg-[#791b1bfe] focus:outline-none
              focus:ring-2 focus:ring-red-500 mx-auto"
              >
                Reset Password
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forget;
