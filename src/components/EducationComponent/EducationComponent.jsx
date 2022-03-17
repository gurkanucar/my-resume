import React from "react";
import "./EducationComponent.css";
import { education } from "../../assets/data/education";
import EducationItem from "../EducationItem/EducationItem";
import TitleSeperatorComponent from "../TitleSeperatorComponent/TitleSeperatorComponent";
const EducationComponent = () => {
  return (
    <div className="education-component__root">
      <TitleSeperatorComponent text="Education" />
      <div className="education-component__history">
        {education.map((school, index) => {
          return <EducationItem key={index} data={school} />;
        })}
      </div>
    </div>
  );
};

export default EducationComponent;
