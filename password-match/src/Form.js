import { useState } from "react";

export default function Form() {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  function onChangeHandler(event) {
    let inputId = event.target.id;
    let inputValue = event.target.value;

    if (inputId === "pass1") {
      setPassword1(inputValue);
    } else if (inputId === "pass2") {
      setPassword2(inputValue);
    }
  }

  function btnClickHandler() {
    if (password1 === password2) {
      setError(<span style={{ color: "green" }}>Passwords match</span>);
    } else {
      setError(<span style={{ color: "red" }}>Passwords do not match</span>);
    }
  }

  return (
    <div id="form">
      <input
        value={password1}
        onChange={onChangeHandler}
        placeholder="Enter password1"
        id="pass1"
      />
      <input
        value={password2}
        onChange={onChangeHandler}
        placeholder="Enter password2"
        id="pass2"
      />
      <button onClick={btnClickHandler}>Check</button>
      <p>{error}</p>
    </div>
  );
}
