import React from "react";
import AccountList from "../AccountList/AccountList";
import SeeMoreComponent from "../SeeMoreComponent/SeeMoreComponent";
import Shapes from "../Shapes/Shapes";
import WelcomeText from "../WelcomeText/WelcomeText";

import "./LandingPageComponent.css";

const LandingPageComponent = () => {
  return (
    <div className="landing-page-component-root">
      <Shapes />
      <WelcomeText />
      <AccountList />
      <SeeMoreComponent />
    </div>
  );
};

export default LandingPageComponent;
