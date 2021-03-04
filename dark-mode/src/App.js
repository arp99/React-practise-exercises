import "./styles.css";
import Toggler from "./Toggler";
import { useState } from "react";

export default function App() {
	const [isDark, setDark] = useState(false);

	const styleDark = {
		background: "#222831",
		color: "#ececec"
	};

	const styleDefault = {
		background: "#ffffff",
		color: "#353535"
	};

	return (
		<div className="App" style={isDark ? styleDark : styleDefault}>
			<Toggler isDark={isDark} setDarkMode={setDark} />
			<h1>Hello world</h1>
			<p>Dummy text danskdn;aksndda</p>
		</div>
	);
}
