import logo from "./logo.svg";
import "./App.css";
import LandingPageComponent from "./components/LandingPageComponent/LandingPageComponent";
import CoverLetterComponent from "./components/CoverLetterComponent/CoverLetterComponent";
import ResumeTop from "./components/ResumeTop/ResumeTop";
import ResumeComponent from "./components/ResumeComponent/ResumeComponent";
import Navbar from "./components/Navbar/Navbar";
import ContactButton from "./components/ContactButton/ContactButton";
import DownloadButton from "./components/DownloadButton/DownloadButton";

function App() {
  return (
    <div>
      <Navbar>
        <ContactButton />
        <DownloadButton />
      </Navbar>
      <LandingPageComponent />
      <ResumeComponent />
    </div>
  );
}

export default App;
