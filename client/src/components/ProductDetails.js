import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = (props) => {
	const { id } = useParams();
	const [productDetails, setProductDetails] = useState({});

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
		</div>
	);
};

export default ProductDetails;
