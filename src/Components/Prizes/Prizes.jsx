import React from "react";
import PrizeCard from "./PrizeCard";
import School from "../../Images/School.svg";
import District from "../../Images/District.svg";
import State from "../../Images/State.svg";

export default function Prizes() {
  return (
    <div id="prize" className="p-5 md:px-20 mt-10">
      <h1 className="text-center font-bold text-xl sm:text-3xl mb-6">
        Exciting Prizes to be won
      </h1>

      <p className="ml-4 my-4">
        Talent Hunt Scholarship Test 202425 powered by @DOSE PLUS Education.
        Dose Plus is bringing you the Talent Hunt Scholarship Test 2023. This
        test offers numerous opportunities for students to win exciting prizes.
      </p>
      <div className="grid grid-cols-12 gap-5">
        <div className="lg:mx-4 col-span-12 md:col-span-4">
          <PrizeCard
            url={School}
            title="School/Coaching Level"
            list1="1st price: ₹ 2500 + Trophy"
            list2="2nd price: ₹ 1500 + Trophy"
            list3="3rd price: ₹ 1000 + Trophy"
          />
        </div>

        <div className="lg:mx-4 col-span-12 md:col-span-4 ">
          <PrizeCard
            url={District}
            title="District Level"
            list1="1st price: ₹ 5000 + Trophy"
            list2="2nd price: ₹ 3000 + Trophy"
            list3="3rd price: ₹ 2500 + Trophy"
          />
        </div>

        <div className="lg:mx-4 col-span-12 md:col-span-4">
          <PrizeCard
            url={State}
            title="State Level"
            list1="1st price: Laptop or ₹ 35,000"
            list2="2nd price: Tablet or ₹ 20,000"
            list3="3rd price: Electric Cycle or ₹ 10,000"
          />
        </div>
      </div>
      <p className="ml-4 mt-4 font-semibold">
        Addionally, Top 10 Students of each School/Coaching will get Rewarded.
      </p>
    </div>
  );
}
