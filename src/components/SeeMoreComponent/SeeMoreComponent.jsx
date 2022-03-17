import React from "react";
import "./SeeMoreComponent.css";
import { FaChevronDown } from "react-icons/fa";
import { Link as Scroll } from "react-scroll";
const SeeMoreComponent = () => {
  return (
    <div className="see-more__root">
      <span className="see-more__text">see more about me...</span>
      <Scroll to="resume-view" offset={-70} smooth={true}>
        <div className="see-more__icon ripple">
          <FaChevronDown size={40} />
        </div>
      </Scroll>
    </div>
  );
};

export default SeeMoreComponent;
