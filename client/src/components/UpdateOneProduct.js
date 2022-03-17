import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductForm from "./ProductForm";

const UpdateOneProduct = (props) => {
	// const {
	// 	id,
	// 	//Title,
	// 	//setTitle,
	// 	//Price,
	// 	//setPrice,
	// 	//Description,
	// 	//setDescription,
	// } = useParams();

	// const {
	// 	onSubmitProp,

	// 	initTitle,

	// 	initPrice,

	// 	initDescription,
	// } = props;

	const { id } = useParams();

	// const [Title, setTitle] = useState("");
	// const [Price, setPrice] = useState("");
	// const [Description, setDescription] = useState("");
	//const [setTitle, setPrice, setDescription] = useState("");
	//const { listAllProducts, setListAllProducts } = props;
	const [productDetails, setProductDetails] = useState({});
	const [loaded, setLoaded] = useState(false);
	//const [prod, setProd] = useState();

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/productDetails/" + id)
			.then((res) => {
				console.log(res.data);
				setProductDetails(res.data);
				setLoaded(true);

				// initTitle(res.data.Title);
				// initPrice(res.data.Price);
				// initDescription(res.data.Description);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	const onUpdateHandler = (updateProd) => {
		//e.preventDefault();
		axios
			.put("http://localhost:8000/api/edit/" + id, updateProd)
			// productDetails
			.then((res) => {
				//setListAllProducts([...listAllProducts, res.data]);
				// setTitle("");
				// // setProductDetails.Title({ productDetails });
				// setPrice("");
				// setDescription("");
				console.log(res.data);
			})

			.catch((err) => console.log(err));
	};

	return (
		<div>
			{/* <form onSubmit={onUpdateHandler}>
				<div className="main">
					<div className="fashion">
						<p>
							<label>Title</label>
							<input
								type="text"
								className="entrytxt2"
								value={Title}
								onChange={(e) => setTitle(e.target.value)}
								// onChange={(e) => {
								// 	setProductDetails.Title(e.target.value);
								// }}
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
								// onChange={(e) => {
								// 	setProductDetails.Price(e.target.value);
								// }}
							/>
						</p>
					</div>
					<br />
					<div className="fashion">
						<p>
							<label>Description</label>
							<input
								type="text"
								className="entrytxt"
								value={Description}
								onChange={(e) => setDescription(e.target.value)}
								// onChange={(e) => {
								// 	setProductDetails.Description(e.target.value);
								// }}
							/>
						</p>
					</div>
					<br />
				</div>

				<input type="submit" value="Update Product" className="submit" /> 
            </form> */}
			{loaded ? (
				<ProductForm
					onSubmitProp={onUpdateHandler}
					initTitle={productDetails.Title}
					initPrice={productDetails.Price}
					initDescription={productDetails.Description}
				/>
			) : null}
		</div>
	);
};

export default UpdateOneProduct;
