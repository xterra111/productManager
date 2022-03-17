import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteButton from "./DeleteButton";

const ProductDetails = (props) => {
	const { id } = useParams();
	const [productDetails, setProductDetails] = useState({});
	const navigate = useNavigate();

	// const onDeleteDetail = (idFromBelow) => {
	// 	//e.preventDefault();
	// 	axios
	// 		.delete(`http://localhost:8000/api/${idFromBelow}`)
	// 		.then((res) => {
	// 			console.log(res.data);
	// 			navigate("/");
	// 		})

	// 		.catch((err) => console.log(err));
	// };

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/productDetails/${id}`)
			.then((res) => {
				console.log(res.data);
				setProductDetails(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);
	return (
		<div>
			<p>Title: {productDetails.Title}</p>
			<p>Price: {productDetails.Price}</p>
			<p>Title: {productDetails.Description}</p>
			<br />
			{/* <button onClick={() => onDeleteDetail(id)}>Delete</button> */}

			<DeleteButton listAllID={id} successCallBack={() => navigate("/")} />
		</div>
	);
};

export default ProductDetails;
