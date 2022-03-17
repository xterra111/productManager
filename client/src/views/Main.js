import React, { useState } from "react";
import DisplayAll from "../components/DisplayAll";
import ProductForm from "../components/ProductForm";
import axios from "axios";

export const Main = (props) => {
	// const [listAllProducts, setListAllProducts, Title] = useState([]);
	//const [setTitle] = props;

	const [listAllProducts, setListAllProducts] = useState([]);
	// const [Title, setTitle] = useState("");
	// const [Price, setPrice] = useState("");
	// const [Description, setDescription] = useState("");

	const removeFromDom = (listAllid) => {
		setListAllProducts(
			listAllProducts.filter((listAll) => listAll._id !== listAllid)
		);
	};

	const createProduct = (options) => {
		axios
			.post("http://localhost:8000/api/product", options)
			.then((res) => {
				setListAllProducts([...listAllProducts, res.data]);
				// setTitle("");
				// setPrice("");
				// setDescription("");
				// console.log(res.data);
			})

			.catch((err) => console.log(err));
	};

	return (
		<div>
			{/* <Form
				listAllProducts={listAllProducts}
				setListAllProducts={setListAllProducts}
			/> */}
			<ProductForm
				listAllProducts={listAllProducts}
				setListAllProducts={setListAllProducts}
				onSubmitProp={createProduct}
				initTitle=""
				// setTitle=""
				initPrice=""
				//setPrice=""
				initDescription=""
				//setDescription=""
				//setTitle={Title}
			/>

			<DisplayAll
				listAllProducts={listAllProducts}
				setListAllProducts={setListAllProducts}
				removeFromDom={removeFromDom}
			/>
		</div>
	);
};
