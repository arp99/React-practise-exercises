export default function Cart({ cartItems }) {
  return (
    <div className="cart-container">
      {cartItems.map(({ id, prodName, quantity }) => {
        return (
          <p key={id}>
            {prodName} x {quantity}{" "}
          </p>
        );
      })}
    </div>
  );
}
