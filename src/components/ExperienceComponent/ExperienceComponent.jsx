import React from "react";
import "./ExperienceComponent.css";
import { experiences } from "../../assets/data/experiences";
const ExperienceComponent = () => {
  return (
    <div className="experience-component__root">
      <div className="experience-component__title">
        <span>Experience</span>
        <hr className="experience-component__line" />
      </div>
      <div className="experience-component__experiences">
        {experiences.map((experience, index) => {
          return (
            <div className="experience-component__experience__item" key={index}>
              <div className="experience-component__experience__item__top">
                <div> {experience.company}</div>
                <div> {experience.title}</div>
              </div>
              <div className="experience-component__experience__item__description">
                {"    "}
                {experience.jobDescription}
              </div>
              <div className="experience-component__experience__item__date">
                {experience.startDate} - {experience.endDate}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceComponent;
