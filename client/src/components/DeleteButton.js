import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
	const { listAllID, successCallBack } = props;

	const deleteProduct = (e) => {
		axios
			.delete(`http://localhost:8000/api/${listAllID}`)
			.then((res) => {
				//console.log(res.data);
				successCallBack();
			})

			.catch((err) => console.log(err));
	};

	return <button onClick={deleteProduct}> Delete </button>;
};

export default DeleteButton;
