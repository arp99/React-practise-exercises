import Home from "./Home";
import Profile from "./Profile";
import About from "./About";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [appBody, setAppBody] = useState("");

  function onClickHandler(event) {
    let id = event.target.id;
    if (id === "home") {
      setAppBody(<Home />);
    } else if (id === "about") {
      setAppBody(<About />);
    } else {
      setAppBody(<Profile />);
    }
  }

  return (
    <div className="App">
      <nav>
        <button id="home" onClick={onClickHandler}>
          Home
        </button>
        <button id="about" onClick={onClickHandler}>
          About
        </button>
        <button id="profile" onClick={onClickHandler}>
          Profile
        </button>
      </nav>
      {appBody}
    </div>
  );
}
