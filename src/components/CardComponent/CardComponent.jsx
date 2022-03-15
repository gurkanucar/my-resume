import React from "react";
import "./CardComponent.css";
const CardComponent = (props) => {
  const { data } = props;

  const getDate = () => {
    if (data.endDate) {
      return `${data.startDate} - ${data.endDate}`;
    } else {
      return `${data.startDate}`;
    }
  };

  return (
    <div className="card-component__item">
      <div className="card-component__item__top">
        <div> {data.company}</div>
        <div> {data.title}</div>
      </div>
      <div className="card-component__item__description">
        {"    "}
        {data.jobDescription}
      </div>
      <div className="card-component__item__date">{getDate()}</div>
    </div>
  );
};

export default CardComponent;
