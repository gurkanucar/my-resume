import "./App.css";
import LandingPageComponent from "./components/LandingPageComponent/LandingPageComponent";
import ResumeComponent from "./components/ResumeComponent/ResumeComponent";
import Navbar from "./components/Navbar/Navbar";
import DownloadButton from "./components/DownloadButton/DownloadButton";

function App() {
  return (
    <div>
      <Navbar>
        {/* <ContactButton /> */}
        <DownloadButton />
      </Navbar>
      <LandingPageComponent />
      <ResumeComponent />
    </div>
  );
}

export default App;
