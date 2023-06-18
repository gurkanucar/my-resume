import React from "react";
import "./CardComponent.css";
const CardComponent = (props) => {
  const { data,present } = props;

  const openInNewTab = (url) => {
    if (!data.link) return;
    const newWindow = window.open(data.link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const getDate = () => {
    if (data.endDate) {
      return `${data.startDate} - ${data.endDate}`;
    } else {
      return `${data.startDate}`;
    }
  };

  return (
    <div
      className={
        !present ? "card-component__item" : "card-component__item__present"
      }
      onClick={openInNewTab}
    >
      <div className="card-component__item__top">
        <div> {data.company}</div>
        <div> {data.title}</div>
      </div>
      <div className="card-component__item__description">
        {data.jobDescription}
      </div>
      {data.link && (
        <div className="card-component__item__link">{`link: ${data.link}`}</div>
      )}
      <div className="card-component__item__date">{getDate()}</div>
    </div>
  );
};

export default CardComponent;
