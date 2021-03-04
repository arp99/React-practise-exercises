import { useState } from "react";
import Like from "./Like";

const listItems = [
  {
    id: "1",
    name: "item1"
  },
  {
    id: "2",
    name: "item2"
  },
  {
    id: "3",
    name: "item3"
  },
  {
    id: "4",
    name: "item4"
  },
  {
    id: "5",
    name: "item5"
  }
];

function ListItem({ item, liked, setLikedItems }) {
  const [isLiked, setLiked] = useState(false);

  function toggleLike(id) {
    const likedItem = liked.find((item) => (item.id === id ? item : undefined));
    const toggledItem = listItems.find((item) =>
      item.id === id ? item : undefined
    );

    if (likedItem === undefined) {
      setLikedItems([...liked, toggledItem]);
    } else {
      const newLikedList = liked.filter((item) => item.id !== id);
      setLikedItems(newLikedList);
    }
    setLiked(!isLiked);
  }
  return (
    <div className="item">
      {item.name}{" "}
      <Like isLiked={isLiked} clickHandler={() => toggleLike(item.id)} />
    </div>
  );
}

export default function List({ likedItems, setLikedItems }) {
  return (
    <div className="items_container">
      {listItems.map((item) => (
        <ListItem
          item={item}
          key={item.id}
          liked={likedItems}
          setLikedItems={setLikedItems}
        />
      ))}
    </div>
  );
}
