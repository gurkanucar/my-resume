import React from "react";
import "./VolunteerWork.css";
import { volunteerWorks } from "../../assets/data/volunteerWorks";
import CardComponent from "../CardComponent/CardComponent";
const VolunteerWork = () => {
  return (
    <div className="volunteer-work-component__root">
      <div className="volunteer-work-component__title">
        <span>Volunteer Work</span>
        <hr className="volunteer-work-component__line" />
      </div>
      <div className="volunteer-work-component__works">
        {volunteerWorks.map((volunteerWork, index) => {
          return <CardComponent data={volunteerWork} key={index} />;
        })}
      </div>
    </div>
  );
};

export default VolunteerWork;
