import React from "react";
import AccountList from "../AccountList/AccountList";
import SeeMoreComponent from "../SeeMoreComponent/SeeMoreComponent";
import Shapes from "../Shapes/Shapes";
import ScrollUpButton from "../ScrollUpButton/ScrollUpButton";
import WelcomeText from "../WelcomeText/WelcomeText";

import "./LandingPageComponent.css";

const LandingPageComponent = () => {
  return (
    <div className="landing-page-component-root" id="landing-page">
      <Shapes />
      <WelcomeText />
      <AccountList />
      <SeeMoreComponent />
      <ScrollUpButton />
    </div>
  );
};

export default LandingPageComponent;
