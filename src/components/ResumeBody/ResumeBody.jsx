import React from "react";
import AchievementComponent from "../AchievementComponent/AchievementComponent";
import ExperienceComponent from "../ExperienceComponent/ExperienceComponent";
import ResumeInfo from "../ResumeInfo/ResumInfo";
import VolunteerWork from "../VolunteerWork/VolunteerWork";
import "./ResumeBody.css";

const ResumeBody = () => {
  return (
    <div className="resume-body__root">
      <ResumeInfo />
      <div className="resume-body__right">
        <ExperienceComponent />
        <AchievementComponent />
        <VolunteerWork />
      </div>
    </div>
  );
};

export default ResumeBody;
