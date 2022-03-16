import React, { useState } from "react";
import axios from "axios";

const ProductForm = (props) => {
	// const [Title, setTitle] = useState("");
	// const [Price, setPrice] = useState("");
	// const [Description, setDescription] = useState("");

	const {
		onSubmitProp,
		//listAllProducts,
		//setListAllProducts,
		initTitle,
		//setTitle,
		initPrice,
		//setPrice,
		initDescription,
		//setDescription,
	} = props;

	const [Title, setTitle] = useState(initTitle);
	const [Price, setPrice] = useState(initPrice);
	const [Description, setDescription] = useState(initDescription);

	// const onCreateHandler = (e) => {
	// 	e.preventDefault();
	// 	axios
	// 		.post("http://localhost:8000/api/product", {
	// 			Title,
	// 			Price,
	// 			Description,
	// 		})
	// 		.then((res) => {
	// 			setListAllProducts([...listAllProducts, res.data]);
	// 			setTitle("");
	// 			setPrice("");
	// 			setDescription("");
	// 			console.log(res.data);
	// 		})

	// 		.catch((err) => console.log(err));
	// };

	// REFACTORED CODE

	const onCreateHandler = (e) => {
		e.preventDefault();
		onSubmitProp({
			Title,
			Price,
			Description,
		});
		setTitle("");
		setPrice("");
		setDescription("");
	};

	return (
		<form onSubmit={onCreateHandler}>
			{/* Tried refactoring spending too much time. moving on... */}
			{/* <Form
				listAllProducts={listAllProducts}
				setListAllProducts={setListAllProducts}
			/> */}

			{/* <Form /> */}

			{/* OLD CODE BEFORE REFACTORING */}
			<div className="main">
				<div className="fashion">
					<p>
						<label>Title</label>
						<input
							type="text"
							className="entrytxt2"
							value={Title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</p>
				</div>
				<br />
				<div className="fashion">
					<p>
						<label>Price</label>
						<input
							type="text"
							className="entrytxt2"
							value={Price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</p>
				</div>{" "}
				<br />
				<div className="fashion">
					<p>
						<label>Description</label>
						<input
							type="text"
							className="entrytxt"
							value={Description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</p>
				</div>
				<br />
			</div>

			{/* <input type="submit" value="Create Product" className="submit" /> */}
			<input type="submit" value="Submit" className="submit" />
			<br />
			<hr></hr>
		</form>
	);
};
export default ProductForm;
