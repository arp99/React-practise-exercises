import Warning from "./Warning";
import Error from "./Error";
import Success from "./Success";

export default function Toast({ setVisible, type }) {
  function ShowToast() {
    if (type === "error") {
      return <Error setVisible={setVisible} />;
    } else if (type === "warning") {
      return <Warning setVisible={setVisible} />;
    } else if (type === "success") {
      return <Success setVisible={setVisible} />;
    }
  }
  return (
    <>
      <ShowToast />
    </>
  );
}
