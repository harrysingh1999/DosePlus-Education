import React from "react";
import PartnerCard from "./PartnerCard";

export default function Partners() {
  return (
    <div className="px-4 md:px-6 lg:px-10 xl:px-20">
      <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-center mb-6">
        Partners
      </h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="">
          <PartnerCard
            url="https://images-htschool.hindustantimes.com/ht_olympiad_assets/images/amrita-logo.svg"
            title="Amrita Vishwa Vidyapeetham"
            partner="PRESENTED BY"
            text="university, educating a vibrant student population of over 24,000 by 1700+ strong faculty"
            btnText="Visit Sponsor"
          />
        </div>
        <div className="">
          <PartnerCard
            url="https://images-htschool.hindustantimes.com/ht_olympiad_assets/images/logo_speedlabs.svg"
            title="Speedlabs"
            partner="POWERED BY"
            text="SpeEdLabs is an AI-based Personalised Learning App for K-12 and test prep (IIT-JEE, NEET, CET, NTSE and"
            btnText="Visit Sponsor"
          />
        </div>
        <div className="">
          <PartnerCard
            url="https://images-htschool.hindustantimes.com/ht_olympiad_assets/images/oswaal-books-logo.svg"
            title="Oswaal"
            partner="OFFICIAL BOOK PARTNER"
            text="Oswaal Books have been simplifying learning since the last 35 years. Today, we are trusted by 5 Million"
            btnText="Visit Sponsor"
          />
        </div>
      </div>
    </div>
  );
}
