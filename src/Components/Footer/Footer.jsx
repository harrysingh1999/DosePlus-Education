import { BsCursorFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { FaPhoneSquareAlt } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      {/* <div className="bg-[#cd3e44] grid gap-5 py-6 lg:p-12 md:grid-cols-3 place-items-stretch"> */}
      <div className="bg-[#791b1bd3] flex flex-col md:flex-row gap-5 justify-evenly py-6 lg:p-12 pt-12">
        <div className="flex justify-center">
          <div className="text-white text-sm flex flex-col justify-center items-center font-semibold leading-6">
            <a href="#about" className=" hover:underline">
              ABOUT THE PROGRAM
            </a>
            <p className=" hover:underline">PREVIOUS PAPERS</p>
            <p className=" hover:underline">COOKIE POLICY</p>
            <p className=" hover:underline">PRIVACY POLICY</p>
          </div>
        </div>

        {/* <div className="flex justify-center">
          <div className="text-white text-sm flex flex-col justify-center items-center font-semibold leading-6">
            <p className=" hover:underline">TERMS & CONDITIONS</p>
            <p className=" hover:underline">SALES LOGIN</p>
            <p className=" hover:underline">FINANCE LOGIN</p>
            <p className=" hover:underline">SCHOOL LOGIN</p>
          </div>
        </div> */}

        <div className="flex justify-end md:justify-center px-4">
          <div className="text-white text-sm flex flex-col items-center md:items-start font-semibold leading-8">
            <div className="flex items-center ">
              <div className="h-[30px] w-[30px] rounded-md md:rounded-full grid place-items-center bg-black me-3">
                <BsCursorFill className=" md:text-xl" />
              </div>
              <p>HT House, 18-20, Kasturba Gandhi Marg, New Delhi-110001</p>
            </div>
            <div className="flex items-center">
              <div className="h-[30px] w-[30px] rounded-md md:rounded-full grid place-items-center bg-black me-3">
                <HiMail className=" md:text-xl" />
              </div>
              <p>support@ht-school.com</p>
            </div>
            <div className="flex items-center">
              <div className="h-[30px] w-[30px] rounded-md md:rounded-full grid place-items-center bg-black me-3">
                <FaPhoneSquareAlt className=" md:text-xl" />
              </div>
              <p>9513319722 (11.00am - 07.30pm, Mon-Sun)</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center flex-col py-5 items-center bg-[#791b1be8]">
          <p className="text-center text-white font-semibold text-xs md:text-base">
            Copyright ©2024 All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}
