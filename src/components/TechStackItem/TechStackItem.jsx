import React from "react";
import "./TechStackItem.css";
const TechStackItem = (props) => {
  const { data } = props;
  const { name, img } = data;
  return (
    <div className="tech-stack-item__root">
      {/* <div className="tech-stack-item__img__wrapper">
        <img
          className="tech-stack-item__img"
          src="https://cdn.iconscout.com/icon/free/png-256/java-60-1174953.png"
        />
      </div> */}
      <span>{name}</span>
    </div>
  );
};

export default TechStackItem;
