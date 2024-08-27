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

export const signupDetails = [
  {
    label: "Name",
    placeholder: "Name",
    type: "text",
    name: "name",
  },
  {
    label: "Father Name",
    placeholder: "Father Name",
    type: "text",
    name: "fatherName",
  },
  {
    label: "Date Of Birth",
    placeholder: "dd-mm-yyyy",
    type: "date",
    name: "dob",
  },
  {
    label: "Class",
    placeholder: "Class",
    type: "text",
    name: "myClass",
  },
  {
    label: "Roll no.",
    placeholder: "Enter your Roll no.",
    type: "number",
    name: "rollNo",
  },
  {
    label: "Section",
    placeholder: "e.g A, B",
    type: "text",
    name: "section",
  },
  {
    label: "Phone no.",
    placeholder: "Phone number",
    type: "number",
    name: "phoneNumber",
  },
  {
    label: "Email",
    placeholder: "Email",
    type: "email",
    name: "email",
  },
  {
    label: "Username",
    placeholder: "Username",
    type: "text",
    name: "username",
  },
  {
    label: "Password",
    placeholder: "Password",
    type: "Password",
    name: "password",
  },
];

export const checkboxDetails = [
  {
    type: "checkbox",
    name: "mathsScore",
    label: "Mathematics",
  },
  {
    type: "checkbox",
    name: "englishScore",
    label: "English",
  },
  {
    type: "checkbox",
    name: "hindiScore",
    label: "Hindi",
  },
  {
    type: "checkbox",
    name: "scienceScore",
    label: "Science",
  },
  {
    type: "checkbox",
    name: "socialScienceScore",
    label: "Social Science",
  },
];

export const divisionDetails = [
  { division: "First Division", color: "bg-[#06a948]" },
  { division: "Second Division", color: "bg-[#dac134]" },
  { division: "Third Division", color: "bg-[#fe852e]" },
  { division: "Fourth Division/Fail", color: "bg-[#fd0000]" },
];
