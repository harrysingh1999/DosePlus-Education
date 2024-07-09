import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../Images/logo.svg";
import logout from "../../Images/Logout.svg";

export default function DashboardNavbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      let response = await fetch("http://localhost:8081/api/logout");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
      // Handle error logging out, e.g., show error message
    }
  };

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

          <div className=" flex justify-end ">
            <div
              className="ms-4 me-[-16px] flex-row items-center px-5 md:px-9 gap-2 cursor-pointer"
              onClick={handleLogout}
            >
              <img className="w-[30px]" src={logout} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
