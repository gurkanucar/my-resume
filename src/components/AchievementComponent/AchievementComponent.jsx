import React from "react";
import "./AchievementComponent.css";
import { achievements } from "../../assets/data/achievement";
import CardComponent from "../CardComponent/CardComponent";
import TitleSeperatorComponent from "../TitleSeperatorComponent/TitleSeperatorComponent";
const AchievementComponent = () => {
  return (
    <div className="achievement-component__root">
      <TitleSeperatorComponent text="Achievement" />
      <div className="achievement-component__achievements">
        {achievements.map((achievement, index) => {
          return <CardComponent data={achievement} key={index} />;
        })}
      </div>
    </div>
  );
};

export default AchievementComponent;
