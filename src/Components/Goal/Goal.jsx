import React from "react";
import Goals from "../../Images/Goals.svg";

export default function Goal() {
  return (
    <div className="p-5 md:px-24 py-8">
      <h1 className="text-2xl md:text-4xl font-semibold">Goal</h1>
      <div id="goal" className="flex">
        <p className="mt-5">
          Our goal is to provide facilities like scholarships, books, and
          uniforms to children from government as well as private schools.
          Economic conditions vary among students in private schools, but all
          students deserve quality education. Our efforts aim to ensure that
          students benefit equally from quality education in private schools,
          just as in government schools. Our organization works economically for
          students, so Government school children should also receive all the
          facilities that children in private schools enjoy, such as skill
          development, personality development, computer education, physical
          education, and science workshops.
        </p>
        <img src={Goals} className="w-52" alt="Goals" />
      </div>
    </div>
  );
}
