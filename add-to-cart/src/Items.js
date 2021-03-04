import { useState } from "react";
import products from "./ItemList";

export default function Items({ setCartItems, cartItems }) {
  const [productList, setProductList] = useState(products);

  function handleClick(id) {
    const findObj = cartItems.find((item) => {
      //check if the product id is already present in the cart or not
      return item.id === id ? item : undefined;
    });

    //get the item from itemlist with id = id
    const productItem = productList.find((item) =>
      item.id === id ? item : undefined
    );

    //if item is not present in cart then add it to cart
    if (findObj === undefined) {
      setCartItems([
        ...cartItems,
        {
          ...productItem,
          available: productItem.available - 1,
          quantity: 1
        }
      ]);
    }
    //if product already present in cart
    else {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            available: cartItem.available - 1,
            quantity: cartItem.quantity + 1
          };
        }
        return cartItem;
      });

      // console.log(updatedCartItems);

      setCartItems(updatedCartItems);
    }
    //reduce availabilty of product from itemList
    decreaseAvailability(id);
  }

  function decreaseAvailability(id) {
    const updatedProductList = productList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          available: item.available - 1
        };
      }
      return item;
    });
    setProductList(updatedProductList);
  }

  function showItems() {
    return (
      <div className="item-list">
        {productList.map(({ id, prodName, available }) => {
          return (
            <div className="item" key={id}>
              {prodName}
              {/* pass the id of the item passed on click */}
              <button
                disabled={available === 0 ? true : false}
                onClick={() => handleClick(id)}
              >
                Add to cart
              </button>
              <p>Availability: {available} </p>
            </div>
          );
        })}
      </div>
    );
  }

  return <>{showItems()}</>;
}
