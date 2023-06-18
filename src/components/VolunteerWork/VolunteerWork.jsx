import React from "react";
import "./VolunteerWork.css";
import { volunteerWorks } from "../../assets/data/volunteerWorks";
import CardComponent from "../CardComponent/CardComponent";
import TitleSeperatorComponent from "../TitleSeperatorComponent/TitleSeperatorComponent";
const VolunteerWork = () => {
  return (
    <div className="volunteer-work-component__root">
      <TitleSeperatorComponent text="Volunteer Work" />
      <div className="volunteer-work-component__works">
        {volunteerWorks.map((volunteerWork, index) => {
          return (
            <CardComponent
              data={volunteerWork}
              present={volunteerWork.endDate == "Present"}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VolunteerWork;
