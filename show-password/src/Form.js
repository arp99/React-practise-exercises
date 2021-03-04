import { useState } from "react";

export default function Form() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  function onChangeHandler(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="form">
      <input
        value={password}
        onChange={onChangeHandler}
        type={showPassword ? "text" : "password"}
      />
      <br />
      <button onClick={() => setShowPassword((prev) => !prev)}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}
