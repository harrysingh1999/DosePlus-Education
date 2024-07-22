import { BsCursorFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <>
      {/* <div className="bg-[#cd3e44] grid gap-5 py-6 lg:p-12 md:grid-cols-3 place-items-stretch"> */}
      <div className="bg-[#5BCCFA] flex flex-col md:flex-row gap-5 justify-evenly py-6 lg:p-12 pt-8 ">
        {/* <div className="bg-[#b40048eb] flex flex-col md:flex-row gap-5 justify-evenly py-6 lg:p-12 pt-12"> */}
        <div className="flex justify-center">
          <div className=" text-sm flex flex-col justify-center items-center font-semibold leading-6">
            <a href="#about" className=" hover:underline">
              ABOUT THE PROGRAM
            </a>

            <NavLink to="/CookiePolicy">
              <p className=" hover:underline">COOKIE POLICY</p>
            </NavLink>
            <NavLink to="/PrivacyPolicy">
              <p className=" hover:underline">PRIVACY POLICY</p>
            </NavLink>
          </div>
        </div>

        <div className="flex justify-center md:justify-center px-4">
          <div className=" w-[450px] md:w-full text-sm flex flex-col items-center md:items-start font-semibold leading-8">
            <div className="flex items-center justify-start w-full">
              <div className="h-[30px] w-[30px] min-w-[30px] rounded-md md:rounded-full grid place-items-center bg-black me-3">
                <BsCursorFill className=" md:text-xl text-white" />
              </div>
              <p>HT House, 18-20, Kasturba Gandhi Marg, New Delhi-110001</p>
            </div>
            <div className="flex items-center justify-start w-full">
              <div className="h-[30px] w-[30px] min-w-[30px] rounded-md md:rounded-full grid place-items-center bg-black me-3">
                <HiMail className=" md:text-xl text-white" />
              </div>
              <p>support@ht-school.com</p>
            </div>
            <div className="flex items-center justify-start w-full">
              <div className="h-[30px] w-[30px] min-w-[30px] rounded-md md:rounded-full grid place-items-center bg-black me-3">
                <FaPhoneSquareAlt className=" md:text-xl text-white" />
              </div>
              <p>9513319722 (11.00am - 07.30pm, Mon-Sun)</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center flex-col pb-5 items-center bg-[#5BCCFA]">
          {/* <div className="flex justify-center flex-col py-5 items-center bg-[#b40048e7]"> */}
          <p className="text-center  font-semibold text-xs md:text-base">
            Copyright ©2024 All rights reserved | Made with ❤ by Fairwood Tech
          </p>
        </div>
      </div>
    </>
  );
}
