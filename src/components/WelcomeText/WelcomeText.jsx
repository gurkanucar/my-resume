import React from "react";

import "./WelcomeText.css";

const WelcomeText = () => {
  return (
    <div className="welcome-text__root">
      <div className="welcome-text__wrapper">
        <span className="welcome-text__item">Hi there!</span>
        <span className="welcome-text__item">
          This is <strong className="welcome-text__item__strong">Gurkan</strong>
        </span>
        <span className="welcome-text__item">
          I am a{" "}
          <strong className="welcome-text__item__strong">
            Software Engineer
          </strong>
        </span>
      </div>
    </div>
  );
};

export default WelcomeText;
