// import { NavLink } from "react-router-dom";
// import logo from "../../Images/logo.svg";
// import logout from "../../Images/Logout.svg";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { useEffect, useRef, useState } from "react";

// export default function Navbar() {
//   const sidebarRef = useRef(false);
//   const [toggle, setToggle] = useState(false);
//   const handleToggle = () => {
//     setToggle(!toggle);
//   };

//   const handleOutsideClick = (e) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
//       setToggle(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleOutsideClick);
//     window.addEventListener("scroll", handleOutsideClick);

//     console.log("hello");
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//       window.removeEventListener("scroll", handleOutsideClick);
//     };
//   }, []);

//   return (
//     <div className="">
//       <div className="bg-white md:fixed md:top-0 md:left-0 md:right-0 md:z-50 lg:h-24 md:h-24 sm:h-24 flex shadow-lg">
//         <div className="w-full py-[12px] items-center flex justify-between mx-auto relative mr-3">
//           <div className="flex flex-col justify-center items-center h-10 md:h-20 w-20 md:w-40 ">
//             <NavLink to="/">
//               <img className="w-10 lg:w-16" src={logo} alt="Logo" />
//             </NavLink>
//           </div>
//           {/* Hamburger Menu */}

//           <div className="md:hidden flex justify-end">
//             {toggle ? (
//               <AiOutlineClose
//                 onClick={handleToggle}
//                 className=" text-2xl fixed top-4 right-4 z-50"
//               />
//             ) : (
//               <AiOutlineMenu
//                 onClick={handleToggle}
//                 className="text-black text-2xl z-50"
//               />
//             )}
//           </div>

//           {/* Navigation Menu for Desktop */}
//           <div className="md:flex justify-between gap-4 font-semibold px-9">
//             <NavLink
//               to="/"
//               className="text-lg text-gray-600 hover:text-red-500"
//             >
//               Home
//             </NavLink>
//             <a
//               href="#about"
//               className="text-lg text-gray-600 hover:text-red-500"
//             >
//               About
//             </a>
//             <a
//               href="#prize"
//               className="text-lg text-gray-600 hover:text-red-500"
//             >
//               Prize
//             </a>
//             <a
//               href="#goal"
//               className="text-lg text-gray-600 hover:text-red-500"
//             >
//               Goal
//             </a>
//             <NavLink
//               to="/Login"
//               className="text-lg text-gray-600 hover:text-red-500"
//             >
//               Login
//             </NavLink>
//             <NavLink
//               to="/Signup"
//               className="text-lg text-gray-600 hover:text-red-500"
//             >
//               SignUp
//             </NavLink>
//             {/* <NavLink
//               to="/StudentDashboard"
//               className="text-lg text-gray-600 hover:text-red-500"
//             >
//               Dashboard
//             </NavLink> */}
//           </div>
//         </div>
//       </div>

//       {/* Responsive Menu */}
//       <div
//         ref={sidebarRef}
//         className={`duration-300 md:hidden fixed  top-0 right-0 h-screen w-1/3 bg-white transition-transform
//                 ${toggle ? "transform-none" : "transform translate-x-full"}
//             `}
//         style={{
//           zIndex: 40,
//           boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
//         }}
//       >
//         <div className="overflow-y-auto h-full ">
//           <ul className="mt-16 flex flex-col gap-4 px-4">
//             <li>
//               <NavLink
//                 to="/"
//                 onClick={handleToggle}
//                 className="hover:text-red-500"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="#about"
//                 onClick={handleToggle}
//                 className="hover:text-red-500"
//               >
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="#prize"
//                 onClick={handleToggle}
//                 className="hover:text-red-500"
//               >
//                 Prize
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="#goal"
//                 onClick={handleToggle}
//                 className="hover:text-red-500"
//               >
//                 Goal
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/Login"
//                 onClick={handleToggle}
//                 className="hover:text-red-500"
//               >
//                 Login
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/Signup"
//                 onClick={handleToggle}
//                 className="hover:text-red-500"
//               >
//                 SignUp
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/StudentDashboard"
//                 onClick={handleToggle}
//                 className="hover:text-red-500"
//               >
//                 Dashboard
//               </NavLink>
//             </li>
//             <div className=" me-[-16px] flex-row items-center gap-2 ">
//               <img className="w-[30px]" src={logout} alt="" />
//             </div>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

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
            <NavLink to="/" className={`text-lg hover:text-[${baseColor}]`}>
              Home
            </NavLink>

            <a href="#about" className={`text-lg hover:text-[${baseColor}]`}>
              About
            </a>

            <a href="#prize" className={`text-lg hover:text-[${baseColor}]`}>
              Prize
            </a>

            <a href="#goal" className={`text-lg hover:text-[${baseColor}]`}>
              Goal
            </a>

            <NavLink
              to="/Login"
              className={`text-lg hover:text-[${baseColor}]`}
            >
              Login
            </NavLink>
            <NavLink
              to="/Signup"
              className={`text-lg hover:text-[${baseColor}]`}
            >
              SignUp
            </NavLink>

            {/* <NavLink
              to="/StudentDashboard"
              className="text-lg hover:text-red-500"
            >
              Dashboard
            </NavLink> */}

            {/* <div className="ms-4 me-[-16px] flex-row items-center gap-2 md:block hidden">
              <img className="w-[30px]" src={logout} alt="" />
            </div> */}
          </div>
        </div>
      </div>

      {/* Responsive Menu */}
      <div
        ref={sidebarRef}
        className={`duration-300 md:hidden fixed  top-0 right-0 h-screen w-[250px] bg-white transition-transform 
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

            <a href="#goal" className="">
              <li className="font-semibold px-1 py-1 mx-6 border-b hover:border-gray-400">
                Goal
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

            {/* <NavLink
              to="/StudentDashboard"
              onClick={handleToggle}
              className=""
            >
              <li className="font-semibold px-1 py-1 mx-6 border-b hover:border-gray-400">Dashboard</li>
            </NavLink> */}
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
