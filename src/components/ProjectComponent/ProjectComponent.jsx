import React from "react";
import "./ProjectComponent.css";

import { projects } from "../../assets/data/projects";
import ProjectItem from "../ProjectItem/ProjectItem";

const ProjectComponent = () => {
  return (
    <div className="project-component__root">
      <div className="project-component__title">
        <span>Projects</span>
        <hr className="project-component__line" />
      </div>
      <div className="project-component__projects">
        {projects.map((project, index) => {
          return <ProjectItem key={index} data={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectComponent;
