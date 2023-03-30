import React from "react";
import AchievementComponent from "../AchievementComponent/AchievementComponent";
import EducationComponent from "../EducationComponent/EducationComponent";
import ExperienceComponent from "../ExperienceComponent/ExperienceComponent";
import ProjectComponent from "../ProjectComponent/ProjectComponent";
import ResumeInfo from "../ResumeInfo/ResumInfo";
import TechStackComponent from "../TechStackComponent/TechStackComponent";
import VolunteerWork from "../VolunteerWork/VolunteerWork";
import "./ResumeBody.css";

const ResumeBody = () => {
  return (
    <div className="resume-body__root">
      <ResumeInfo />
      <div className="resume-body__right">
        <TechStackComponent />
        <ExperienceComponent />
        <EducationComponent/>
        {/* <AchievementComponent /> */}
        <VolunteerWork />
        <ProjectComponent />
      </div>
    </div>
  );
};

export default ResumeBody;
