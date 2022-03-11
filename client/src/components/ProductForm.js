import React, { useState, useEffect } from "react";
import axios from "axios";

export const ProductForm = () => {
	const [Title, setTitle] = useState("");
	const [Price, setPrice] = useState("");
	const [Description, setDescription] = useState("");

	const [listAllProducts, setListAllProducts] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/listAllProducts")
			.then((res) => {
				console.log(res.data);
				setListAllProducts(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [listAllProducts]);

	const onCreateHandler = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8000/api/product", {
				Title,
				Price,
				Description,
			})
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
		setTitle("");
		setPrice("");
		setDescription("");
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
				</div>{" "}
				<br />
				<input type="submit" value="Create Product" className="submit" />
				<div>
					<br />
					<hr></hr>
					<div>
						<p>ProductName:</p>

						{listAllProducts.map((listAll, index) => (
							<li key={index}>{listAll.Title}</li>
						))}
					</div>
				</div>
			</div>
		</form>
	);
};
