import React, { useState } from "react";
import DisplayAll from "../components/DisplayAll";
import ProductForm from "../components/ProductForm";

export const Main = (props) => {
	const [listAllProducts, setListAllProducts] = useState([]);

	return (
		<div>
			<ProductForm
				listAllProducts={listAllProducts}
				setListAllProducts={setListAllProducts}
			/>

			<DisplayAll
				listAllProducts={listAllProducts}
				setListAllProducts={setListAllProducts}
			/>
		</div>
	);
};
