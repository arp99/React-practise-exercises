export default function LikedItems({ likedItems }) {
  function ShowLikedItems() {
    return (
      <div className="liked_container">
        {likedItems.map((item) => (
          <div className="liked_item" key={item.id}>
            {item.name}
          </div>
        ))}
      </div>
    );
  }
  return <ShowLikedItems />;
}
