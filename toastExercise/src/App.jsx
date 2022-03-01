import "./styles.css";
import { useState } from "react";

export default function App() {
  const [toastDisplay, setToastDisplay] = useState("none");
  return (
    <div className="App">
      <button onClick={() => setToastDisplay("block")}>showToast</button>
      <div class="toast-3" style={{ display: toastDisplay }}>
        <h3>Toast Header</h3>
        <p>Some text inside the toast body. Some text inside the toast body</p>
        <button onClick={() => setToastDisplay("none")}>Accept cookies</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="toast-cross"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setToastDisplay("none")}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
}

// codesandbox link
// https://codesandbox.io/s/toast-exercise-whbszo?file=/src/styles.css