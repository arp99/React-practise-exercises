import { useState } from "react";
import Cart from "./Cart";
import Items from "./Items";

import "./styles.css";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Items setCartItems={setCartItems} cartItems={cartItems} />
      <Cart cartItems={cartItems} />
    </div>
  );
}
