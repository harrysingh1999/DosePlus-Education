import { NavLink } from "react-router-dom";
import logo from "../../Images/logo.svg";
import logout from "../../Images/Logout.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { baseColor } from "../../Utils/Constant";

export default function Navbar() {
  const sidebarRef = useRef(false);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleOutsideClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("scroll", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleOutsideClick);
    };
  }, []);

  return (
    <div className="">
      <div className="bg-white md:fixed md:top-0 md:left-0 md:right-0 md:z-50 lg:h-24 md:h-24 sm:h-24 flex shadow-lg">
        <div className="w-full py-[12px] items-center flex justify-between mx-auto relative mr-3">
          <div className="flex flex-col justify-center items-center h-10 md:h-20 w-20 md:w-40 ">
            <NavLink to="/">
              <img className="w-10 lg:w-16" src={logo} alt="Logo" />
            </NavLink>
          </div>
          {/* Hamburger Menu */}

          <div className="md:hidden flex justify-end">
            {toggle ? (
              <AiOutlineClose
                onClick={handleToggle}
                className=" text-2xl fixed top-4 right-4 z-50"
              />
            ) : (
              <AiOutlineMenu
                onClick={handleToggle}
                className="text-black text-2xl z-50"
              />
            )}
          </div>

          {/* Navigation Menu for Desktop */}
          <div className="hidden md:flex gap-4 font-semibold px-9">
            <NavLink to="/" className={`text-lg hover:text-[#5BCCFA]`}>
              Home
            </NavLink>

            <a href="#about" className={`text-lg hover:text-[#5BCCFA]`}>
              About
            </a>

            <a href="#prize" className={`text-lg hover:text-[#5BCCFA]`}>
              Prize
            </a>
            <a
              href="#emergingSector"
              className={`text-lg hover:text-[#5BCCFA]`}
            >
              Emerging
            </a>

            <NavLink to="/Login" className={`text-lg hover:text-[#5BCCFA]`}>
              Login
            </NavLink>
            <NavLink to="/Signup" className={`text-lg hover:text-[#5BCCFA]`}>
              SignUp
            </NavLink>
          </div>
        </div>
      </div>

      {/* Responsive Menu */}
      <div
        ref={sidebarRef}
        className={`duration-300 md:hidden fixed top-0 right-0 h-screen w-[250px] bg-white transition-transform
                ${toggle ? "transform-none" : "transform translate-x-full"}
            `}
        style={{
          zIndex: 40,
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <div className="h-screen relative">
          <ul className=" pt-16 flex flex-col gap-4 overflow-y-auto h-[80vh] ">
            <NavLink to="/" onClick={handleToggle} className="">
              <li className="font-semibold px-1 py-1 mx-6 border-b hover:border-gray-400">
                Home
              </li>
            </NavLink>

            <a href="#about" className="">
              <li className="font-semibold px-1 py-1 mx-6 border-b hover:border-gray-400">
                About
              </li>
            </a>

            <a href="#prize" className="">
              <li className="font-semibold px-1 py-1 mx-6 border-b hover:border-gray-400">
                Prize
              </li>
            </a>

            <a href="#emergingSector" className="">
              <li className="font-semibold px-1 py-1 mx-6 border-b hover:border-gray-400">
                Emerging
              </li>
            </a>

            <NavLink to="/Login" onClick={handleToggle} className="">
              <li className="font-semibold px-1 py-1 mx-6 border-b hover:border-gray-400">
                Login
              </li>
            </NavLink>

            <NavLink to="/Signup" onClick={handleToggle} className="">
              <li className="font-semibold px-1 py-1 mx-6 border-b hover:border-gray-400">
                SignUp
              </li>
            </NavLink>
          </ul>

          {/* <div className="px-2 py-1 w-full mx-6 absolute left-0 bottom-4 sm:bottom-8 me-[-16px] flex items-center gap-2  hover:text-red-500">
            <img className="w-[30px]" src={logout} alt="" />
            <span className="font-semibold">Logout</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
