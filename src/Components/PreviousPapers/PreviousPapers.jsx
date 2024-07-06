import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
export default function PreviousPapers() {
  return (
    <>
      <div className="p-5 md:p-20">
        <div>
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-semibold">
            Explore our previous
            <br />
            year’s papers
          </h2>
        </div>

        <div className="grid grid-cols-12 mt-10 gap-5">
          <div className=" flex justify-center items-start col-span-12 lg:col-span-2">
            <div
              className=" w-full lg:w-40 h-20 lg:h-40 flex gap-5 lg:flex-col justify-center items-center rounded-xl"
              style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            >
              <p className="text-2xl font-semibold text-[#b8373b]">2019</p>
              <div className="flex gap-2">
                <div
                  className=" w-8 h-8 grid place-items-center rounded-md"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                >
                  <FaLongArrowAltLeft className="text-xl text-[#b8373b]" />
                </div>
                <div
                  className=" w-8 h-8 grid place-items-center rounded-md"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                >
                  <FaLongArrowAltRight className="text-xl text-[#b8373b]" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5">
            <div className="flex justify-center items-center">
              <div
                className=" w-40 h-40 flex flex-col gap-3 justify-center items-center rounded-xl"
                style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <img
                  className="w-[50%]"
                  src="https://images-htschool.hindustantimes.com/ht_olympiad_assets/images/pdf-file.png"
                  alt="pdficon"
                />
                <p className="font-semibold">Class 4rd</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div
                className=" w-40 h-40 flex flex-col gap-3 justify-center items-center rounded-xl"
                style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <img
                  className="w-[50%]"
                  src="https://images-htschool.hindustantimes.com/ht_olympiad_assets/images/pdf-file.png"
                  alt="pdficon"
                />
                <p className="font-semibold">Class 5rd</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div
                className=" w-40 h-40 flex flex-col gap-3 justify-center items-center rounded-xl"
                style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <img
                  className="w-[50%]"
                  src="https://images-htschool.hindustantimes.com/ht_olympiad_assets/images/pdf-file.png"
                  alt="pdficon"
                />
                <p className="font-semibold">Class 6rd</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div
                className=" w-40 h-40 flex flex-col gap-3 justify-center items-center rounded-xl"
                style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <img
                  className="w-[50%]"
                  src="https://images-htschool.hindustantimes.com/ht_olympiad_assets/images/pdf-file.png"
                  alt="pdficon"
                />
                <p className="font-semibold">Class 7rd</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div
                className=" w-40 h-40 flex flex-col gap-3 justify-center items-center rounded-xl"
                style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <img
                  className="w-[50%]"
                  src="https://images-htschool.hindustantimes.com/ht_olympiad_assets/images/pdf-file.png"
                  alt="pdficon"
                />
                <p className="font-semibold">Class 8rd</p>
              </div>
            </div>
            <div className="flex justify-center items-centern lg:hidden">
              <div
                className=" w-40 h-40 flex flex-col gap-3 justify-center items-center rounded-xl"
                style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <img
                  className="w-[50%]"
                  src="https://images-htschool.hindustantimes.com/ht_olympiad_assets/images/pdf-file.png"
                  alt="pdficon"
                />
                <p className="font-semibold">Class 9rd</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
