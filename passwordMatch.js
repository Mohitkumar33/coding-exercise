import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [output, setOutPut] = useState("");
  const sumbitHandler = () =>
    newPassword === confirmPassword
      ? setOutPut("Password changed")
      : setOutPut("Password didn't match");
  return (
    <div className="App">
      <div>
        <label>New Password</label>
        <input
          type="password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={sumbitHandler}>Submit</button>
        <p>{output}</p>
      </div>
    </div>
  );
}
