import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [passwordSubmitButton, setPasswordSubmitButton] = useState("");
  const checkNumberAlphabet = (password) => {
    let countAlpha = 0;
    let countNum = 0;
    for (let i = 0; i < password.length; i++) {
      Number(password[i]) <= 9 && Number(password[i] >= 0)
        ? (countNum += 1)
        : (countAlpha += 1);
    }
    return countAlpha > 0 && countNum > 0;
  };

  const passwordSubmitHandler = () => {
    if (newPasswordInput === confirmPasswordInput) {
      checkNumberAlphabet(newPasswordInput)
        ? setPasswordSubmitButton("Password changed")
        : setPasswordSubmitButton(
            "Password should contain atleast a number and a string"
          );
    } else {
      setPasswordSubmitButton("Password didn't match");
    }
  };

  return (
    <div className="App">
      <p>Password should contain alphabet and numbers</p>
      <div>
        <label>New Passowrd</label>
        <input
          type="text"
          onChange={(e) => setNewPasswordInput(e.target.value)}
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="text"
          onChange={(e) => setConfirmPasswordInput(e.target.value)}
        />
      </div>
      <button onClick={passwordSubmitHandler}>submit</button>
      <p>{passwordSubmitButton}</p>
    </div>
  );
}

// code sandbox link added
// https://codesandbox.io/s/festive-kare-286wxh