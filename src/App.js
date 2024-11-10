import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About.js";
import Home from "./pages/Home/Home.js";

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
		</Routes>
	);
}

export default App;
