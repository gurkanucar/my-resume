import React from "react";
import "./TitleSeperatorComponent.css";

const TitleSeperatorComponent = (props) => {
  const { text } = props;
  return (
    <div className="title-seperator-component__title">
      <span>{text}</span>
      <hr className="title-seperator-component__line" />
    </div>
  );
};

export default TitleSeperatorComponent;
