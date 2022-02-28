import "./styles.css";
import { Home } from "./components/home";
import { Profile } from "./components/profile";
import { About } from "./components/about";
import { useState } from "react";

export default function App() {
  const [showHomeState, setShowHomeState] = useState(false);
  const [showProfileState, setShowProfileState] = useState(false);
  const [showAboutState, setShowAboutState] = useState(false);
  const showHome = () => {
    setShowHomeState(true);
    setShowProfileState(false);
    setShowAboutState(false);
  };
  const showProfile = () => {
    setShowProfileState(true);
    setShowHomeState(false);
    setShowAboutState(false);
  };
  const showAbout = () => {
    setShowAboutState(true);
    setShowHomeState(false);
    setShowProfileState(false);
  };
  return (
    <div className="App">
      {showHomeState && <Home />}
      {showAboutState && <About />}
      {showProfileState && <Profile />}
      <button onClick={showHome}>Home</button>
      <button onClick={showAbout}>About</button>
      <button onClick={showProfile}>Profile</button>
    </div>
  );
}

codesandbox link
https://codesandbox.io/s/switch-tabs-exercis-3qewe5