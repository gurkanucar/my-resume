import React from "react";
import "./AchievementComponent.css";
import { achievements } from "../../assets/data/achievement";
import CardComponent from "../CardComponent/CardComponent";
const AchievementComponent = () => {
  return (
    <div className="achievement-component__root">
      <div className="achievement-component__title">
        <span>Achievement</span>
        <hr className="achievement-component__line" />
      </div>
      <div className="achievement-component__achievements">
        {achievements.map((achievement, index) => {
          return <CardComponent data={achievement} key={index} />;
        })}
      </div>
    </div>
  );
};

export default AchievementComponent;
