export default function Warning({ setVisible }) {
  return (
    <div className="toast-container">
      <h4 id="warning">Warning!!</h4>
      <p className="toast-msg">This is the toast msg</p>
      <button className="btn btn-warning" onClick={() => setVisible(false)}>
        Hide
      </button>
    </div>
  );
}
