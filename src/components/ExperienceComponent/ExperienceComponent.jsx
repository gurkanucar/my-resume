import React from "react";
import "./ExperienceComponent.css";
import { experiences } from "../../assets/data/experiences";
import CardComponent from "../CardComponent/CardComponent";
const ExperienceComponent = () => {
  return (
    <div className="experience-component__root">
      <div className="experience-component__title">
        <span>Experience</span>
        <hr className="experience-component__line" />
      </div>
      <div className="experience-component__experiences">
        {experiences.map((experience, index) => {
          return <CardComponent data={experience} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ExperienceComponent;
