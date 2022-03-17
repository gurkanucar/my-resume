import "./App.css";
import LandingPageComponent from "./components/LandingPageComponent/LandingPageComponent";
import ResumeComponent from "./components/ResumeComponent/ResumeComponent";
import Navbar from "./components/Navbar/Navbar";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import LikeButtonComponent from "./components/LikeButtonComponent/LikeButtonComponent";

function App() {
  return (
    <div>
      <Navbar>
        {/* <ContactButton /> */}
        <LikeButtonComponent />
        <DownloadButton />
      </Navbar>
      <LandingPageComponent />
      <ResumeComponent />
    </div>
  );
}

export default App;
