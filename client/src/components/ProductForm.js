import React, { useState } from "react";
import axios from "axios";

export const ProductForm = () => {
	const [Title, setTitle] = useState("");
	const [Price, setPrice] = useState("");
	const [Description, setDescription] = useState("");

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
							value={Title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</p>
				</div>

				<div className="fashion">
					<p>
						<label>Price</label>
						<input
							type="text"
							value={Price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</p>
				</div>

				<div className="fashion">
					<p>
						<label>Description</label>
						<input
							type="text"
							value={Description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</p>
				</div>
				<input type="submit" value="Create Product" />
			</div>
		</form>
	);
};
