import AI from "../Images/EmergingSection/AI.jpg";
import CloudTechnologies from "../Images/EmergingSection/CloudTechnologies.jpg";
import DataScience from "../Images/EmergingSection/DataScience.jpg";
import DroneTechnologies from "../Images/EmergingSection/DroneTechnologies.jpeg";
import Robotics from "../Images/EmergingSection/Robotics.jpg";
import SpaceTechnologies from "../Images/EmergingSection/SpaceTechnologies.svg";

export const emergingDetails = [
  { url: AI, title: "Artificial Intelligence (AI)" },
  { url: CloudTechnologies, title: "Cloud Technologies" },
  { url: DataScience, title: "Data Science" },
  { url: DroneTechnologies, title: "Drone Technology" },
  { url: Robotics, title: "Robotics" },
  { url: SpaceTechnologies, title: "Space Technology" },
];

export const baseColor = "#5BCCFA";

const userMarks = JSON.parse(localStorage.getItem("userMarks")) || {};

export const studentMarks = {
  mathsScore: Math.floor(Math.random() * 100 + 1),
  englishScore: Math.floor(Math.random() * 100 + 1),
  hindiScore: Math.floor(Math.random() * 100 + 1),
  scienceScore: Math.floor(Math.random() * 100 + 1),
  socialScienceScore: Math.floor(Math.random() * 100 + 1),
};

export const totalPercentage = (
  ((studentMarks.mathsScore +
    studentMarks.englishScore +
    studentMarks.hindiScore +
    studentMarks.scienceScore +
    studentMarks.socialScienceScore) /
    500) *
  100
).toFixed(1);

console.log(totalPercentage);
