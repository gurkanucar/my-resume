import React from "react";
import "./AccountList.css";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaYoutube,
} from "react-icons/fa";
const AccountList = () => {
  return (
    <div className="account-list__root">
      <div className="account-list__item gitHub">
        {" "}
        <FaGithub size={48} />
      </div>
      <div className="account-list__item stackOverFlow">
        <FaStackOverflow size={48} />
      </div>
      <div className="account-list__item linkedIn">
        <FaLinkedin size={48} />
      </div>
      <div className="account-list__item youTube">
        <FaYoutube size={48} />
      </div>
    </div>
  );
};

export default AccountList;
