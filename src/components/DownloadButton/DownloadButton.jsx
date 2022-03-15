import "./DownloadButton.css";
const DownloadButton = (props) => {
  return (
    <div onClick={props.onClick} className="download-btn">
      <span className="download-txt">Download CV</span>
    </div>
  );
};

export default DownloadButton;
