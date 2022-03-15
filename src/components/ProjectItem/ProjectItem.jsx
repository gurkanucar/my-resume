import React from "react";
import "./ProjectItem.css";

const ProjectItem = (props) => {
  const { data } = props;
  const { projectName, projectDescription, projectLink, projectImage } = data;

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="tooltip">
      <div
        className="project-item__root"
        onClick={() => openInNewTab(projectLink)}
      >
        <span className="project-item__name">{projectName}</span>
        <img className="project-item__image" src={projectImage} />
        <span className="project-item__description">{projectDescription}</span>
        <span className="tooltiptext">Click to go project</span>
      </div>
    </div>
  );
};

export default ProjectItem;
