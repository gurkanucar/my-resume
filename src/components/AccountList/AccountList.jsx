import React from "react";
import "./AccountList.css";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaYoutube,
} from "react-icons/fa";
const AccountList = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="account-list__root">
      <div
        className="account-list__item gitHub"
        onClick={() => openInNewTab("https://github.com/gurkanucar")}
      >
        <FaGithub size={36} />
      </div>
      <div
        className="account-list__item stackOverFlow"
        onClick={() =>
          openInNewTab("https://stackoverflow.com/users/10277150/gurkan")
        }
      >
        <FaStackOverflow size={36} />
      </div>
      <div
        className="account-list__item linkedIn"
        onClick={() => openInNewTab("https://www.linkedin.com/in/ucargurkan")}
      >
        <FaLinkedin size={36} />
      </div>
      <div
        className="account-list__item youTube"
        onClick={() => openInNewTab("https://www.youtube.com/c/gurkanucar")}
      >
        <FaYoutube size={36} />
      </div>
    </div>
  );
};

export default AccountList;
