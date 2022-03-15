import logo from "./logo.svg";
import "./App.css";
import LandingPageComponent from "./components/LandingPageComponent/LandingPageComponent";
import CoverLetterComponent from "./components/CoverLetterComponent/CoverLetterComponent";
import ResumeTop from "./components/ResumeTop/ResumeTop";
import ResumeComponent from "./components/ResumeComponent/ResumeComponent";
import Navbar from "./components/Navbar/Navbar";
import ContactButton from "./components/ContactButton/ContactButton";
import DownloadButton from "./components/DownloadButton/DownloadButton";

import resume from "../src/assets/Gurkan_UCAR.pdf";

function App() {
  return (
    <div>
      <Navbar>
        {/* <ContactButton /> */}
        <a href={resume} download="Gurkan_UCAR.pdf">
          <DownloadButton />
        </a>
      </Navbar>
      <LandingPageComponent />
      <ResumeComponent />
    </div>
  );
}

export default App;
