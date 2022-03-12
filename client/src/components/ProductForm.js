import React, { useState } from "react";
import axios from "axios";

const ProductForm = (props) => {
	const [Title, setTitle] = useState("");
	const [Price, setPrice] = useState("");
	const [Description, setDescription] = useState("");

	const { listAllProducts, setListAllProducts } = props;

	const onCreateHandler = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8000/api/product", {
				Title,
				Price,
				Description,
			})
			.then((res) => {
				setListAllProducts([...listAllProducts, res.data]);
				setTitle("");
				setPrice("");
				setDescription("");
				console.log(res.data);
			})

			.catch((err) => console.log(err));
	};
	return (
		<form onSubmit={onCreateHandler}>
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
				<input type="submit" value="Create Product" className="submit" />
				<br />
				<hr></hr>
			</div>
		</form>
	);
};
export default ProductForm;
