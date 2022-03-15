import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {}, []);

  const handleScroll = () => {
    if (window.scrollY >= 500) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className={!navbar ? "navbar-root active" : "navbar-root not-active"}>
      {props.children}
    </div>
  );
};

export default Navbar;
