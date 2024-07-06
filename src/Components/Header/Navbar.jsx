// import { NavLink } from "react-router-dom";
// import logo from "../../Images/logo.png";

// export default function Navbar() {
//   return (
//     <>
//       <div className="fixed z-10 shadow-lg bg-white overflow-hidden py-0 md:py-2">
//         <div className="grid grid-cols-12 w-screen ">
//           <div className="order-2 md:ps-6 border-t-2 md:border-t-0 border-[#cc3e44] p-2 md:order-1 col-span-12 md:col-span-6 ">
//             <div className="flex justify-between md:justify-normal md:gap-3 gap-1">
//               <div className="flex flex-col justify-center items-center h-10 md:h-20 w-20 md:w-40 ">
//                 <NavLink to="/">
//                   <img className="w-20" src={logo} alt="" />
//                 </NavLink>
//               </div>
//               {/* <div className="flex flex-col relative justify-center items-center h-10 md:h-20 w-16 md:w-32 ">
//                 <p className="text-[8px] sm:text-[9px] md:text-[10px] absolute lg:top-3 md:top-5 top-0 w-max">
//                   PRESENTED BY
//                 </p>
//                 <img
//                   className=" absolute bottom-1 w-[100%]"
//                   src="https://images-htschool.hindustantimes.com/ht_olympiad_assets/images/amrita-logo.svg"
//                   alt=""
//                 />
//               </div>

//               <div className="flex flex-col relative justify-center items-center h-10 md:h-20 w-16 md:w-16 ">
//                 <p className="text-[8px] sm:text-[9px] md:text-[10px] absolute lg:top-3 md:top-5 top-0 w-max">
//                   POWERED BY
//                 </p>
//                 <img
//                   className=" absolute bottom-1 w-[60%] md:w-[100%] "
//                   src="https://images-htschool.hindustantimes.com/ht_olympiad_assets/images/logo_speedlabs.svg"
//                   alt=""
//                 />
//               </div>
//               <div className="me-2  flex flex-col relative justify-center items-center  h-10 md:h-20 w-20 md:w-40 ">
//                 <p className="text-[8px] sm:text-[9px] md:text-[10px] absolute lg:top-3 md:top-5 top-0 w-max">
//                   OFFICIAL BOOK PARTNER
//                 </p>
//                 <img
//                   className=" absolute bottom-1 w-[100%]"
//                   src="https://images-htschool.hindustantimes.com/ht_olympiad_assets/images/oswaal-books-logo.svg"
//                   alt=""
//                 />
//               </div> */}
//             </div>
//           </div>

//           <div className=" p-2 order-1 md:order-2 me-6 lg:me-8 flex justify-center col-span-12 md:col-span-6 ">
//             <div className="flex w-full gap-4 justify-between md:justify-end items-center">
//               {/* <img
//                 className=" w-24"
//                 src="https://images-htschool.hindustantimes.com/ht_olympiad_assets/images/ht-school-logo.png"
//                 alt=""
//               /> */}
//               <ul className="flex gap-2 sm:gap-4 font-semibold">
//                 <li>
//                   <a href="/">Home</a>
//                 </li>
//                 <li>
//                   <a href="#about">About</a>
//                 </li>
//                 <li>
//                   <a href="#prize">Prize</a>
//                 </li>
//                 <li>
//                   {" "}
//                   <a href="#goal">Goal</a>
//                 </li>

//                 <li>
//                   <NavLink to="Login">Login</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="Signup">Sign up</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="StudentDashboard">Dashboard</NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { NavLink } from "react-router-dom";
import logo from "../../Images/logo.png";
import logout from "../../Images/Logout.svg"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";


export default function Navbar() {
  const sidebarRef = useRef(false)
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleOutsideClick =(e)=>{
    if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
      setToggle(false);
    }
  }
  
 useEffect(()=>{
  document.addEventListener("mousedown", handleOutsideClick)
  window.addEventListener("scroll", handleOutsideClick)
  
    console.log("hello");
    return(()=>{
      document.removeEventListener("mousedown", handleOutsideClick)
      window.removeEventListener('scroll', handleOutsideClick)
    })
      
 },[])

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
       <div className="md:flex justify-between gap-4 font-semibold px-9">
          <NavLink
              to="/"
              className="text-lg text-gray-600 hover:text-red-500"
            >
              Home
            </NavLink>
            <a
              href="#about"
              className="text-lg text-gray-600 hover:text-red-500"
            >
              About
            </a>
            <a
              href="#prize"
              className="text-lg text-gray-600 hover:text-red-500"
            >
              Prize
            </a>
            <a
              href="#goal"
              className="text-lg text-gray-600 hover:text-red-500"
            >
              Goal
            </a>
            <NavLink
              to="/Login"
              className="text-lg text-gray-600 hover:text-red-500"
            >
              Login
            </NavLink>
            <NavLink
              to="/Signup"
              className="text-lg text-gray-600 hover:text-red-500"
            >
              SignUp
            </NavLink>
            {/* <NavLink
              to="/StudentDashboard"
              className="text-lg text-gray-600 hover:text-red-500"
            >
              Dashboard
            </NavLink> */}
         
          </div>
           
        </div>
      </div>

      {/* Responsive Menu */}
      <div ref={sidebarRef}
        className={`duration-300 md:hidden fixed  top-0 right-0 h-screen w-1/3 bg-white transition-transform 
                ${toggle ? "transform-none" : "transform translate-x-full"}
            `}
        style={{ zIndex: 40, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      >

        <div className="overflow-y-auto h-full ">

          <ul className="mt-16 flex flex-col gap-4 px-4">
            <li>
              <NavLink
                to="/"
                onClick={handleToggle}
                className="hover:text-red-500"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#about"
                onClick={handleToggle}
                className="hover:text-red-500"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#prize"
                onClick={handleToggle}
                className="hover:text-red-500"
              >
                Prize
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#goal"
                onClick={handleToggle}
                className="hover:text-red-500"
              >
                Goal
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Login"
                onClick={handleToggle}
                className="hover:text-red-500"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Signup"
                onClick={handleToggle}
                className="hover:text-red-500"
              >
                SignUp
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/StudentDashboard"
                onClick={handleToggle}
                className="hover:text-red-500"
              >
                Dashboard
              </NavLink>
            </li>
            <div className=" me-[-16px] flex-row items-center gap-2 ">
              <img className="w-[30px]" src={logout} alt="" />
            </div>
          </ul>
        </div>
      </div>

    </div>
  );
}

