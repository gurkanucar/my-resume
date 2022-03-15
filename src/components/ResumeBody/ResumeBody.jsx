import React from "react";
import AchievementComponent from "../AchievementComponent/AchievementComponent";
import ExperienceComponent from "../ExperienceComponent/ExperienceComponent";
import ResumeInfo from "../ResumeInfo/ResumInfo";
import TechStackComponent from "../TechStackList/TechStackComponent";
import VolunteerWork from "../VolunteerWork/VolunteerWork";
import "./ResumeBody.css";

const ResumeBody = () => {
  return (
    <div className="resume-body__root">
      <ResumeInfo />
      <div className="resume-body__right">
        <TechStackComponent />
        <ExperienceComponent />
        <AchievementComponent />
        <VolunteerWork />
      </div>
    </div>
  );
};

export default ResumeBody;
