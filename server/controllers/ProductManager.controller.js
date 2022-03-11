const Product = require("../models/product.model");

// Initialize a req response here. Comment it out when the models are being built out.
// This is more of a template and a placeholder.

module.exports.index = (request, response) => {
	//We are exporting a key:val pair of index : function
	response.json({
		// This is where we're setting the API's response to the requesting client
		message: "Hello World",
	});
};

module.exports.createProduct = (request, response) => {
	Product.create(request.body)
		.then((product) => response.json(product))
		.catch((err) => response.json(err));
};

module.exports.showAll = (request, response) => {
	Product.find(request.body)
		.then((allProducts) => {
			console.log(allProducts);
			response.json(allProducts);
		})
		.catch((err) => response.json(err));
};
