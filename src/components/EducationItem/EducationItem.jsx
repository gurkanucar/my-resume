import React from "react";
import "./EducationItem.css";

const EducationItem = (props) => {
  const { data } = props;
  const { name, degree, startDate, endDate, completed, expected } = data;

  return (
    <div className={completed? "education-item__root" : "education-item__root__not__completed"}>
      <span className="education-item__name">{name}</span>
      <span className="education-item__degree">{degree}</span>
      {completed ? (
        <span className="education-item__date">
          {startDate} - {endDate}
        </span>
      ) : (
        <span className="education-item__date">
          {startDate} - {expected}
        </span>
      )}
    </div>
  );
};

export default EducationItem;
