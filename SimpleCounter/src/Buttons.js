export default function Buttons(props) {
  return (
    <div className="button-grp">
      {props.symbols.map((symbol, index) => (
        <button onClick={props.clickHandler} key={index}>
          {symbol}
        </button>
      ))}
    </div>
  );
}
