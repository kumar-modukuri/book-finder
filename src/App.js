import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About.js";
import Details from "./pages/Details/Details.js";
import Home from "./pages/Home/Home.js";

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/book/:id" element={<Details />} />
		</Routes>
	);
}

export default App;
