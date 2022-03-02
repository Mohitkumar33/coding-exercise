import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [passwordSubmitButton, setPasswordSubmitButton] = useState("");
  const [showNewPassword, setShowNewPassword] = useState("password");
  const [showConfirmPassword, setShowConfirmPassword] = useState("password");
  const [newPasswordButtonText, setNewPasswordButtonText] = useState(
    "Show Password"
  );
  const [confirmPasswordButtonText, setConfirmPasswordButtonText] = useState(
    "Show Password"
  );

  const showNewPasswordHandler = () =>
    showNewPassword === "password"
      ? (setShowNewPassword("text"), setNewPasswordButtonText("Hide Password"))
      : (setShowNewPassword("password"),
        setNewPasswordButtonText("Show Password"));

  const showConfirmPasswordHandler = () =>
    showConfirmPassword === "password"
      ? (setShowConfirmPassword("text"),
        setConfirmPasswordButtonText("Hide Password"))
      : (setShowConfirmPassword("password"),
        setConfirmPasswordButtonText("Show Password"));

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
          type={showNewPassword}
          onChange={(e) => setNewPasswordInput(e.target.value)}
        />
        <button onClick={showNewPasswordHandler}>
          {newPasswordButtonText}
        </button>
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type={showConfirmPassword}
          onChange={(e) => setConfirmPasswordInput(e.target.value)}
        />
        <button onClick={showConfirmPasswordHandler}>
          {confirmPasswordButtonText}
        </button>
      </div>
      <button onClick={passwordSubmitHandler}>submit</button>
      <p>{passwordSubmitButton}</p>
    </div>
  );
}

// code sandbox link
// https://codesandbox.io/s/great-cray-fqmyus