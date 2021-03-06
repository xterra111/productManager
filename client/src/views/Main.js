import React, { useState } from "react";
import DisplayAll from "../components/DisplayAll";
import ProductForm from "../components/ProductForm";

export const Main = (props) => {
	// const [listAllProducts, setListAllProducts, Title] = useState([]);
	//const [setTitle] = props;

	const [listAllProducts, setListAllProducts] = useState([]);

	return (
		<div>
			{/* <Form
				listAllProducts={listAllProducts}
				setListAllProducts={setListAllProducts}
			/> */}
			<ProductForm
				listAllProducts={listAllProducts}
				setListAllProducts={setListAllProducts}
				//setTitle={Title}
			/>

			<DisplayAll
				listAllProducts={listAllProducts}
				setListAllProducts={setListAllProducts}
			/>
		</div>
	);
};
