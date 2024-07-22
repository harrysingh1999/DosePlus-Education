import React from "react";

export default function PrizeCard({ url, title, list1, list2, list3 }) {
  return (
    <div
      className="h-full rounded-lg p-8 flex flex-col items-center"
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <div className="w-8 sm:w-10 md:w-12 lg:w-14">
        <img src={url} alt={title} />
      </div>
      <p className="font-semibold my-3">{title}</p>
      <ul className="list-outside list-disc text-xs md:text-base font-semibold text-[#34a1cc]">
        <li>{list1}</li>
        <li>{list2}</li>
        <li>{list3}</li>
      </ul>
    </div>
  );
}
