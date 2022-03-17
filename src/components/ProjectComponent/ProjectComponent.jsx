import React from "react";
import "./ProjectComponent.css";

import { projects } from "../../assets/data/projects";
import ProjectItem from "../ProjectItem/ProjectItem";
import TitleSeperatorComponent from "../TitleSeperatorComponent/TitleSeperatorComponent";

const ProjectComponent = () => {
  return (
    <div className="project-component__root">
      <TitleSeperatorComponent text="Projects" />
      <div className="project-component__projects">
        {projects.map((project, index) => {
          return <ProjectItem key={index} data={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectComponent;
