import React from "react";
import "./TechStackComponent.css";
import { techStack } from "../../assets/data/techstack";
import TechStackItem from "../TechStackItem/TechStackItem";
import TitleSeperatorComponent from "../TitleSeperatorComponent/TitleSeperatorComponent";

const TechStackComponent = () => {
  return (
    <div className="tech-stack-component__root">
     <TitleSeperatorComponent text="Technical Skills" />
      <div className="tech-stack-component__stacks">
        {techStack.map((tech, index) => {
          return <TechStackItem data={tech} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TechStackComponent;
