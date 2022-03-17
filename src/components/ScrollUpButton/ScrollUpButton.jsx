import React, { useState } from "react";
import "./ScrollUpButton.css";
import { FaChevronUp } from "react-icons/fa";
import { Link as Scroll } from "react-scroll";
const ScrollUpButton = () => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <div>
      {show && (
        <div className="up-button__root">
          <Scroll to="landing-page" offset={-900} smooth={true}>
            <FaChevronUp size={24} color="black" />
          </Scroll>
        </div>
      )}
    </div>
  );
};

export default ScrollUpButton;
