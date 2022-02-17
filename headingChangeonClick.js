import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [fontHeight, setFontHeight] = useState("1em");
  const [bg, setBg] = useState("transparent");

  const changeToFour = () => {
    setFontHeight("4em");
  };

  const changeToTwo = () => {
    setFontHeight("2em");
  };

  const changeToOne = () => {
    setFontHeight("1em");
  };
  const toggle = () =>
    bg === "transparent" ? setBg("red") : setBg("transparent");

  console.log({ fontHeight });
  return (
    <div className="App">
      <div style={{ fontSize: fontHeight, backgroundColor: bg }}>
        Hello {fontHeight}
      </div>
      <button onClick={toggle}>Click to change color</button>
      <button onClick={changeToFour}> h1 </button>
      <button onClick={changeToTwo}> h2 </button>
      <button onClick={changeToOne}> h3 </button>
    </div>
  );
}


// code sandbox link
https://codesandbox.io/s/async-pond-rz729z?file=/src/App.js