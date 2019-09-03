import React from "react";
import Router from "./Router";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import { Row } from "antd";

function App() {
	return (
		<BrowserRouter>
			<>
				<NavBar />
				<Row type="flex" justify="center">
					<Router />
				</Row>
			</>
		</BrowserRouter>
	);
}

export default App;
