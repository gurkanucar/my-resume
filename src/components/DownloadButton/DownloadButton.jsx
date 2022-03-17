import "./DownloadButton.css";

import resume from "../../assets/resume.pdf";

const DownloadButton = (props) => {
  return (
    <a href={resume} download="Gurkan_UCAR.pdf">
      <div onClick={props.onClick} className="download-btn">
        <span className="download-txt">Download CV</span>
      </div>
    </a>
  );
};

export default DownloadButton;
