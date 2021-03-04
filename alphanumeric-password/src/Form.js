import { useState } from "react";

export default function FormData() {
  const [password, setPassword] = useState("");
  const [errorMsg, setErrMsg] = useState("");

  function onChangeHandler(event) {
    setPassword(event.target.value);
  }
  function clickHandler() {
    const regexStr = /^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/;
    if (password.match(regexStr)) {
      setErrMsg("Password is ok");
    } else {
      setErrMsg("Password is not Alphanumeric");
    }
  }

  return (
    <div className="form">
      <input onChange={onChangeHandler} value={password} />
      <br />
      <button onClick={clickHandler}>Check password</button>
      <h4>{errorMsg}</h4>
    </div>
  );
}
