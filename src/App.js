import logo from "./logo.svg";
import "./App.css";
import LandingPageComponent from "./components/LandingPageComponent/LandingPageComponent";
import CoverLetterComponent from "./components/CoverLetterComponent/CoverLetterComponent";
import ResumeTop from "./components/ResumeTop/ResumeTop";
import ResumeComponent from "./components/ResumeComponent/ResumeComponent";

function App() {
  return (
    <div>
      <LandingPageComponent />
      <ResumeComponent />
    </div>
  );
}

export default App;
