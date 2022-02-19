import { useState } from "react";
import "./styles.css";

export default function App() {
  const [tweetText, setTweetText] = useState("");
  const [textLimit, setTextLimit] = useState(140);
  const [disableTextarea, setDisableTextare] = useState(false);
  const inputRead = (e) =>
    textLimit > 0
      ? (setTweetText(e.target.value),
        setDisableTextare(false),
        setTextLimit(140 - tweetText.length))
      : (setTextLimit(0), setDisableTextare(true));

  return (
    <div className="App">
      <textarea
        placeholder="Whats happening"
        disabled={disableTextarea}
        onChange={inputRead}
      ></textarea>
      <p>{textLimit}</p>
    </div>
  );
}

// codesandbox link
// https://codesandbox.io/s/competent-vaughan-3hsg9i