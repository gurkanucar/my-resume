import React from "react";
import ResumeBody from "../ResumeBody/ResumeBody";
import ResumeTop from "../ResumeTop/ResumeTop";
import "./ResumeComponent.css";
const ResumeComponent = () => {
  return (
    <div className="resume__root">
      <ResumeTop />
      <ResumeBody />
    </div>
  );
};

export default ResumeComponent;
