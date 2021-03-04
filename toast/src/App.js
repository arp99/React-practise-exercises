import Toast from "./Toast";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isToastVisible, setVisible] = useState(false);

  return (
    <div className="App">
      <button className="btn" onClick={() => setVisible(true)}>
        Show Toast
      </button>
      {isToastVisible ? <Toast setVisible={setVisible} type="success" /> : ""}
    </div>
  );
}
