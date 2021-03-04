import React, { useState } from "react";
import Buttons from "./Buttons";

export default function Counter() {
  const [count, setCount] = useState(0);

  function btnClickHandler(event) {
    switch (event.target.innerText) {
      case "+":
        setCount(count + 1);
        break;
      case "-":
        setCount(count - 1);
        break;
      default:
        break;
    }
  }

  return (
    <div className="counter">
      <h4>{count}</h4>
      <Buttons clickHandler={btnClickHandler} symbols={["+", "-"]} />
    </div>
  );
}
