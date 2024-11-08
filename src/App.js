import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard.js";

function App() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
