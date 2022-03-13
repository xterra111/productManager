import "./App.css";
import React from "react";
import { Main } from "./views/Main";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route element={<Main />} path="/" />
					<Route element={<ProductDetails />} path="/:id" />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
