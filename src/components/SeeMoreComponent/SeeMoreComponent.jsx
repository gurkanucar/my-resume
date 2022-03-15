import React from "react";
import "./SeeMoreComponent.css";
import { FaChevronDown } from "react-icons/fa";
const SeeMoreComponent = () => {
  return (
    <div className="see-more__root">
      <span className="see-more__text">see more about me...</span>
      <div className="see-more__icon">
        <FaChevronDown size={40} />
      </div>
    </div>
  );
};

export default SeeMoreComponent;
