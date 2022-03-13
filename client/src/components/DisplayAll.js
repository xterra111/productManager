import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const DisplayAll = (props) => {
	const { listAllProducts, setListAllProducts } = props;
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
	}, []);
	return (
		<div>
			<h1>All Available Products</h1>
			{listAllProducts.map((listAll, index) => (
				<div key={index}>
					<Link to={`/${listAll._id}`}>{listAll.Title}</Link>
				</div>
			))}
		</div>
	);
};

export default DisplayAll;
