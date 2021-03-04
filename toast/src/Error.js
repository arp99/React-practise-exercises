export default function Warning({ setVisible }) {
  return (
    <div className="toast-container">
      <h4 id="error">Error!!</h4>
      <p className="toast-msg">This is the toast msg</p>
      <button className="btn btn-error" onClick={() => setVisible(false)}>
        Hide
      </button>
    </div>
  );
}
