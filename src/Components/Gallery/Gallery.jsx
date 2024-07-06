import { FaLongArrowAltRight } from "react-icons/fa";

export default function Gallery() {
  return (
    <>
      <div
        id="gallery"
        className="grid md:place-items-center grid-cols-12 p-5 md:p-20 gap-5"
      >
        <div className="col-span-12 md:col-span-4">
          <h1 className="font-bold text-lg md:text-4xl mb-5 lg:w-[75%] w-[70%] md:w-full">
            Glimpses of Hindustan Olympiad/In the News
          </h1>
          <div>
            <button className="flex items-center text-white gap-2 bg-[#d34047] py-3 px-7 my-8 rounded font-semibold text-md md:text-xl">
              <span>View More</span>
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-5">
          <div className="flex flex-col w-full rounded-xl">
            <div>
              <img
                className=" rounded-xl"
                src="https://cdnblogdiscover.leverageedu.com/discover/wp-content/uploads/2024/05/03191821/4-May-School-Assembly-News-Headlines.png"
                alt="newsbanner1"
              />
              <button className="bg-[#d34047] hover:bg-[#a02c32] py-3 w-full text-white rounded-b-xl font-semibold text-sm sm:text-xl md:text-base">
                Know More
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-xl">
            <div>
              <img
                className=" rounded-xl"
                src="https://cdnblogdiscover.leverageedu.com/discover/wp-content/uploads/2024/03/10230153/10-March-School-Assembly-News-Headlines.png"
                alt="newsbanner2"
              />
              <button className="bg-[#d34047] hover:bg-[#a02c32] py-3 w-full text-white rounded-b-xl font-semibold text-sm sm:text-xl md:text-base">
                Know More
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-xl">
            <div>
              <img
                className=" rounded-xl"
                src="https://cdnblogdiscover.leverageedu.com/discover/wp-content/uploads/2024/04/01181659/2-April-School-Assembly-News-Headlines.png"
                alt="newsbanner2"
              />
              <button className="bg-[#d34047] hover:bg-[#a02c32] py-3 w-full text-white rounded-b-xl font-semibold text-sm sm:text-xl md:text-base">
                Know More
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-xl">
            <div>
              <img
                className=" rounded-xl"
                src="https://cdnblogdiscover.leverageedu.com/discover/wp-content/uploads/2024/06/10180507/11-June-School-Assembly-News-Headlines.png"
                alt="newsbanner2"
              />
              <button className="bg-[#d34047] hover:bg-[#a02c32] py-3 w-full text-white rounded-b-xl font-semibold text-sm sm:text-xl md:text-base">
                Know More
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-xl">
            <div>
              <img
                className=" rounded-xl"
                src="https://cdnblogdiscover.leverageedu.com/discover/wp-content/uploads/2024/05/22191708/23-May-School-Assembly-News-Headlines.png"
                alt="newsbanner2"
              />
              <button className="bg-[#d34047] hover:bg-[#a02c32] py-3 w-full text-white rounded-b-xl font-semibold text-sm sm:text-xl md:text-base">
                Know More
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-xl">
            <div>
              <img
                className=" rounded-xl"
                src="https://cdnblogdiscover.leverageedu.com/discover/wp-content/uploads/2024/04/08050131/7-April-School-Assembly-News-Headlines.png"
                alt="newsbanner2"
              />
              <button className="bg-[#d34047] hover:bg-[#a02c32] py-3 w-full text-white rounded-b-xl font-semibold text-sm sm:text-xl md:text-base">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
