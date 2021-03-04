import "./styles.css";
import Post from "./Post";
import { useState } from "react";

export default function App() {
  const [charCount, setCharCount] = useState(0);
  const [value, setValue] = useState("");
  const charLimit = 100;

  function onChangeHandler(event) {
    let charsTyped = event.target.value.length;
    if (charsTyped <= charLimit) {
      setCharCount(charsTyped);
      setValue(event.target.value);
    }
  }

  return (
    <div className="App">
      <Post changeHandler={onChangeHandler} value={value} />
      <h2 className="visible">{charCount}/100 Characters typed</h2>
    </div>
  );
}
