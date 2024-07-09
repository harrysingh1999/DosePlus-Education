import { NavLink } from "react-router-dom";

export default function LoginBanner() {
  return (
    <>
      <div
        id="login"
        className="grid grid-cols-12 gap-5 bg-[#5BCCFA] p-5 md:p-20"
        // className="grid grid-cols-12 gap-5 bg-[#b40048eb] p-5 md:p-20"
      >
        <div className="grid place-items-center col-span-12 md:col-span-8">
          <div className="grid grid-cols-12 gap-2 md:gap-6 lg:gap-7">
            <div className=" col-span-6 md:col-span-4 xl:col-span-3 flex flex-col justify-center items-center w-32 h-32 rounded-full bg-white">
              <img
                className="w-[30%]"
                src="https://images-htschool.hindustantimes.com/ht_olympiad_assets/images/schools-participated.png"
                alt=""
              />
              <span className="text-2xl font-bold text-[#ce4047]">10k+</span>
              <p className="text-center text-xs">
                Schools
                <br />
                Participated
              </p>
            </div>

            <div className=" col-span-6 md:col-span-4 xl:col-span-3 flex flex-col justify-center items-center w-32 h-32 rounded-full bg-white">
              <img
                className="w-[27%]"
                src="https://images-htschool.hindustantimes.com/ht_olympiad_assets/images/students-enrolled.png"
                alt=""
              />
              <span className="text-2xl font-bold text-[#ce4047]">5 lakh</span>
              <p className="text-center text-xs">
                Students
                <br />
                Enrolled
              </p>
            </div>

            <div className=" col-span-6 md:col-span-4 xl:col-span-3 flex flex-col justify-center items-center w-32 h-32 rounded-full bg-white">
              <img
                className="w-[27%]"
                src="https://images-htschool.hindustantimes.com/ht_olympiad_assets/images/students-faliciated.png"
                alt=""
              />
              <span className="text-2xl font-bold text-[#ce4047]">6k+</span>
              <p className="text-center text-xs">
                Students
                <br />
                Felicitated
              </p>
            </div>

            <div className=" col-span-6 md:col-span-12 xl:col-span-3 grid place-items-center">
              <div className="flex flex-col justify-center items-center w-32 h-32 rounded-full bg-white">
                <img
                  className="w-[38%]"
                  src="https://images-htschool.hindustantimes.com/ht_olympiad_assets/images/scholarships-awared.png"
                  alt=""
                />
                <span className="text-2xl font-bold text-[#ce4047]">1Cr+</span>
                <p className="text-center text-xs">
                  Scholarships
                  <br />
                  Awarded
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full col-span-12 md:col-span-4">
          <div className="flex md:justify-end ">
            <div className="w-full md:w-48 lg:w-72 flex flex-row items-center">
              <p className="text-xl md:text-3xl font-semibold">Student Login</p>
              <NavLink to="Login">
                <button className="bg-white py-3 px-2 ms-4 md:px-7 my-8 rounded hover:shadow-lg font-semibold text-xl">
                  Student
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
