import React from "react";

export default function PartnerCard({ url, title, partner, text, btnText }) {
  return (
    <div className="grid grid-cols-12 gap-2 lg:gap-4 mb-4">
      <div className=" md:col-span-5 lg:col-span-4 col-span-4 bg-red-400 rounded-lg flex flex-col justify-evenly items-center text-white text-center h-32 px-2">
        <span className="text-sm md:text-[12px]">{partner}</span>
        <img src={url} alt={title} />
      </div>
      <div className="md:col-span-7 lg:col-span-8 col-span-8 flex flex-col items-start">
        <p className="font-bold mb-1">{title}</p>
        <p className="text-sm font-semibold">{text}</p>
        <button className="mt-2 md:mt-6 font-semibold text-red-700 hover:underline">
          {btnText}
        </button>
      </div>
    </div>
  );
}
