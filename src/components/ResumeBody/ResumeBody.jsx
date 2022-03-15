import React from "react";
import ExperienceComponent from "../ExperienceComponent/ExperienceComponent";
import ResumeInfo from "../ResumeInfo/ResumInfo";
import "./ResumeBody.css";

const ResumeBody = () => {
  return (
    <div className="resume-body__root">
      <ResumeInfo />
      <ExperienceComponent />
    </div>
  );
};

export default ResumeBody;
