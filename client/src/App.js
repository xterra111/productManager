import "./App.css";
import React from "react";
import { Main } from "./views/Main";
import ProductDetails from "./components/ProductDetails";
import UpdateOneProduct from "./components/UpdateOneProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route element={<Main />} path="/" />
					<Route element={<ProductDetails />} path="/:id" />
					<Route element={<UpdateOneProduct />} path="/edit/:id" />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
