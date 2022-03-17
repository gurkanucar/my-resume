import React from "react";
import CoverLetterComponent from "../CoverLetterComponent/CoverLetterComponent";

import "./ResumeTop.css";

const ResumeTop = () => {
  return (
    <div className="resume-top__root">
      <div className="resume-top__image__wrapper" id="resume-view">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          className="resume-top__image"
        />
      </div>
      <CoverLetterComponent />
    </div>
  );
};

export default ResumeTop;
