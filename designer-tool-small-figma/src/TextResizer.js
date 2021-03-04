import { useState } from "react";

export default function TextResizer() {
  //set initial font size of text input
  const [fontSize, setFontSize] = useState(8);
  const [txtValue, setTxtValue] = useState("Sample Text");

  let style = {
    fontSize: `${fontSize}px`
  };

  function incrementClickHandler() {
    setFontSize(fontSize + 8);
  }
  function decrementClickHandler() {
    if (fontSize > 0) {
      setFontSize(fontSize - 8);
    }
  }
  return (
    <div className="text_resizer">
      <input
        value={txtValue}
        onChange={(event) => setTxtValue(() => event.target.value)}
        style={style}
        autoFocus
      />
      <br />
      <button onClick={incrementClickHandler}>+</button>
      <button onClick={decrementClickHandler}>-</button>
    </div>
  );
}
