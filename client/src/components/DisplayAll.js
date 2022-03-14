import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const DisplayAll = (props) => {
	const { listAllProducts, setListAllProducts } = props;
	//const { id } = useParams();
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

	const onDeleteHandler = (idFromBelow) => {
		//e.preventDefault();
		axios
			.delete(`http://localhost:8000/api/${idFromBelow}`)
			.then((res) => {
				console.log(res.data);
				setListAllProducts(
					listAllProducts.filter(
						(listAll, index) => listAll._id !== idFromBelow
					)
				);
			})

			.catch((err) => console.log(err));
	};

	return (
		<div>
			<h1>All Available Products</h1>
			{listAllProducts.map((listAll, index) => (
				<div key={index}>
					<div>
						<Link to={`/${listAll._id}`}>{listAll.Title}</Link>
					</div>
					<div>
						<button onClick={() => onDeleteHandler(listAll._id)}>Delete</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default DisplayAll;
