// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import competition from "../../Images/competition.jpg";

// export default function Toppers() {
//   const settings = {
//     dots: true,
//     arrows: false,
//     infinite: false,
//     rows: 3,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 4,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 4,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="mt-5 md:mt-10 grid grid-cols-12 gap-5 p-5">
//       <div className=" order-2 md:order-1 col-span-12 md:col-span-4">
//         <h1 className="font-bold text-center text-xl sm:text-3xl mb-5">
//           DosePlus State Toppers
//         </h1>
//         <Slider {...settings}>
//           {Array.from({ length: 20 }).map((_, i) => {
//             return (
//               <div
//                 key={i}
//                 className=" text-center m-1 p-1 !flex flex-col items-center"
//               >
//                 <div className="border border-black/50 rounded-md">
//                   <img
//                     src="https://images.shiksha.com/mediadata/images/articles/1647095996phpdJGFaj.jpeg"
//                     alt=""
//                     className=" w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-t-md"
//                   />
//                   <p className=" text-xs sm:text-base text-center">
//                     Shreyash
//                     <br />
//                     Joshi
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </Slider>
//       </div>
//       <div className="order-1 md:order-2 col-span-12 h-full md:col-span-8 rounded-lg mt-16">
//         <img
//           src={competition}
//           alt=""
//           className="rounded-lg w-full h-[90%] object-cover"
//         />
//       </div>
//     </div>
//   );
// }

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import competition from "../../Images/competition.jpg";

export default function Toppers() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    rows: 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="mt-5 grid grid-cols-12 gap-5 p-5">
      <div className=" order-2 md:order-1 col-span-12 md:col-span-4">
        <h1 className="font-bold text-center text-xl sm:text-3xl mb-3 md:mb-5">
          DosePlus State Toppers
        </h1>
        <Slider {...settings}>
          {Array.from({ length: 20 }).map((_, i) => {
            return (
              <div
                key={i}
                className=" text-center m-1 p-1 !flex flex-col items-center"
              >
                <div className="border border-black/50 rounded-md">
                  <img
                    src="https://images.shiksha.com/mediadata/images/articles/1647095996phpdJGFaj.jpeg"
                    alt=""
                    className=" w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-t-md"
                  />
                  <p className=" text-xs sm:text-base text-center">
                    Shreyash
                    <br />
                    Joshi
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="order-1 md:order-2 col-span-12 h-full md:col-span-8 rounded-lg md:mt-16">
        <img
          src={competition}
          alt=""
          className="rounded-lg w-full h-full md:h-[90%] object-cover"
        />
      </div>
    </div>
  );
}
