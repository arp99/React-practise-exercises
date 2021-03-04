import { useState } from "react";

export default function Form() {
  const [password1, setPassword1] = useState("");
  const [isDisabled, setDisabled] = useState(false);

  function onChangeHandler(event) {
    let inputId = event.target.id;
    let inputValue = event.target.value;

    if (inputId === "pass1") {
      setPassword1(inputValue);
    } else if (inputId === "pass2") {
      verifyPassword(inputValue);
    }
  }

  function btnClickHandler() {
    console.log(password1);
  }

  function verifyPassword(inputValue) {
    if (password1 !== inputValue) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }
  // console.log(password1, password2);
  return (
    <div id="form">
      <input
        value={password1}
        onChange={onChangeHandler}
        placeholder="Enter password"
        id="pass1"
      />
      <input
        onChange={onChangeHandler}
        placeholder="Confirm password"
        id="pass2"
      />
      <button onClick={btnClickHandler} disabled={isDisabled}>
        Sign up
      </button>
    </div>
  );
}
