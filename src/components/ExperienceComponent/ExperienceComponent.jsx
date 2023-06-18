import React from "react";
import "./ExperienceComponent.css";
import { experiences } from "../../assets/data/experiences";
import CardComponent from "../CardComponent/CardComponent";
import TitleSeperatorComponent from "../TitleSeperatorComponent/TitleSeperatorComponent";
const ExperienceComponent = () => {
  return (
    <div className="experience-component__root">
      <TitleSeperatorComponent text="Experience" />
      <div className="experience-component__experiences">
        {experiences.map((experience, index) => {
          return (
            <CardComponent
              data={experience}
              present={experience.endDate == "Present"}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceComponent;
