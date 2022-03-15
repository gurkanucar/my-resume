import logo from "./logo.svg";
import "./App.css";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import ContactButton from "./components/ContactButton/ContactButton";
import Navbar from "./components/Navbar/Navbar";
import WelcomeText from "./components/WelcomeText/WelcomeText";
import Shapes from "./components/Shapes/Shapes";
import AccountList from "./components/AccountList/AccountList";

function App() {
  return (
    <div>
      <Shapes />
      <Navbar>
        <ContactButton />
        <DownloadButton />
      </Navbar>
      <WelcomeText />
      <AccountList/>
    </div>
  );
}

export default App;
