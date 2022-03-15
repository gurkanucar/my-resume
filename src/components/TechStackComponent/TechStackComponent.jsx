import React from "react";
import "./TechStackComponent.css";
import { techStack } from "../../assets/data/techstack";
import TechStackItem from "../TechStackItem/TechStackItem";

const TechStackComponent = () => {
  return (
    <div className="tech-stack-component__root">
      <div className="tech-stack-component__title">
        <span>Tech Stack</span>
        <hr className="tech-stack-component__line" />
      </div>
      <div className="tech-stack-component__stacks">
        {techStack.map((tech, index) => {
          return <TechStackItem data={tech} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TechStackComponent;
