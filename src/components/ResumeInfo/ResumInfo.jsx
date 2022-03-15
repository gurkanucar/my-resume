import React from "react";
import "./ResumeInfo.css";

//import hobbies from "../../assets/images/hobbies.png";
import hobbies from "../../assets/shapes/hobbies.svg";

const ResumeInfo = () => {
  const attributes = [
    { name: "Email", value: "ucar.gurkan@hotmail.com" },
    { name: "Address", value: "Turkey" },
    { name: "Date of Birth", value: "2001" },
    { name: "Languages", value: "Turkish\nEnglish" },
    { name: "Hobbies", value: "" },
  ];

  return (
    <div className="resume-info__root">
      <span className="resume-info__title">About</span>
      <div>
        {attributes.map((attribute, index) => {
          return (
            <div key={index} className="resume-info__attribute">
              <span className="resume-info__attribute__name">
                {attribute.name}
              </span>
              <br />
              <span className="resume-info__attribute__value">
                {attribute.value}
              </span>
            </div>
          );
        })}
        <img className="resume-info__attribute__hobbies" src={hobbies} />
      </div>
    </div>
  );
};

export default ResumeInfo;
