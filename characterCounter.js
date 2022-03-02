import { useState } from "react";
import "./styles.css";

export default function App() {
  const [tweetText, setTweetText] = useState("");

  return (
    <div className="App">
      <textarea
        placeholder="Whats happening"
        value={tweetText}
        onChange={(e) => {
          e.target.value.length <= 140 && setTweetText(e.target.value);
        }}
      ></textarea>
      <p>{140 - tweetText.length}</p>
    </div>
  );
}


// codesandbox link
// https://codesandbox.io/s/competent-vaughan-3hsg9i