import React, { useEffect } from "react";

export default function useCalculateMarks(
  setScore,
  setPercentage,
  setDefaultPercentage,
  studentTotalPercentage,
  marksArr
) {
  const userMarks = JSON.parse(localStorage.getItem("userMarks"));

  useEffect(() => {
    setDefaultPercentage(studentTotalPercentage);
    setScore(userMarks);
  }, []);

  useEffect(() => {
    let sum =
      (marksArr.reduce((acc, curr) => acc + curr, 0) /
        (100 * marksArr.length)) *
        100 || 0;
    setPercentage(Number.isInteger(sum) ? sum : sum.toFixed(1));
  }, [marksArr]);
}
