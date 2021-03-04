import "./styles.css";
import List from "./Components/List";
import LikedItems from "./Components/LikedItems";
import { useState } from "react";

export default function App() {
  const [likedItems, setLikedItems] = useState([]);

  return (
    <div className="App">
      <List likedItems={likedItems} setLikedItems={setLikedItems} />
      <hr />
      <LikedItems likedItems={likedItems} />
    </div>
  );
}
