import React from "react";
import "./EducationComponent.css";
import { education } from "../../assets/data/education";
import EducationItem from "../EducationItem/EducationItem";
const EducationComponent = () => {
  return (
    <div className="education-component__root">
      <div className="education-component__title">
        <span>Education</span>
        <hr className="education-component__line" />
      </div>
      <div className="education-component__history">
        {education.map((school, index) => {
          return <EducationItem key={index} data={school} />;
        })}
      </div>
    </div>
  );
};

export default EducationComponent;
