export default function Success({ setVisible }) {
  return (
    <div className="toast-container">
      <h4 id="success">Success!!</h4>
      <p className="toast-msg">This is the toast msg</p>
      <button className="btn btn-success" onClick={() => setVisible(false)}>
        Hide
      </button>
    </div>
  );
}
