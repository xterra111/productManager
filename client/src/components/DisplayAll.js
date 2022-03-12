import React, { useEffect } from "react";
import axios from "axios";

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
			<header>All Available Products</header>
			{listAllProducts.map((listAll, index) => (
				<div key={index}>{listAll.Title}</div>
			))}
		</div>
	);
};

export default DisplayAll;
