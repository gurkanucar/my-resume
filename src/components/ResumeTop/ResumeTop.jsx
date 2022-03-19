import React from "react";
import CoverLetterComponent from "../CoverLetterComponent/CoverLetterComponent";
import img from "../../assets/images/me.jpg";
import "./ResumeTop.css";

const ResumeTop = () => {
  return (
    <div className="resume-top__root">
      <div className="resume-top__image__wrapper" id="resume-view">
        <img src={img} className="resume-top__image" />
      </div>
      <CoverLetterComponent />
    </div>
  );
};

export default ResumeTop;
