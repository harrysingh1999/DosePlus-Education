import React from "react";

const Slider = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-800 text-white pt-[100px] pb-2 absolute">
      <div className="animate-marquee">
        <p className="inline-block font-semibold text-yellow-600 whitespace-nowrap">
          DOSE Plus Education organizes seminars every December, guiding
          successful individuals on career paths. It's crucial for students to
          contemplate their future beyond 10th and 12th grades, considering the
          fluctuating demand in sectors. Planning ahead is key in deciding what
          to pursue after these milestones.
        </p>
      </div>
    </div>
  );
};

export default Slider;
