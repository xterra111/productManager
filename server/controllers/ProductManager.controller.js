const { update } = require("../models/product.model");
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
//Code to addd Product that will add it to the MongoDB based on the Model Schema that has been specified.
module.exports.createProduct = (request, response) => {
	Product.create(request.body)
		.then((product) => response.json(product))
		.catch((err) => response.json(err));
};

//Shows all the products when invoked.
module.exports.showAll = (request, response) => {
	Product.find(request.body)
		.then((allProducts) => {
			response.json(allProducts);
		})
		.catch((err) => response.json(err));
};

//When invoked shows the details of one product.
module.exports.productDetails = (request, response) => {
	Product.findOne({ _id: request.params.id })
		.then((productDetails) => {
			response.json(productDetails);
		})
		.catch((err) => response.json(err));
};

//When invoked can update an existing product.
module.exports.updateExistingProduct = (request, response) => {
	Product.findOneAndUpdate({ _id: request.params.id }, request.body, {
		new: true,
		runValidators: true,
	})
		.then((updateProduct) => {
			response.json({
				updateProduct,
			});
		})
		.catch((err) => {
			response.json({ message: "Something went Wrong", error: err });
		});
};

module.exports.deleteAnExistingProduct = (request, response) => {
	Product.deleteOne({
		_id: request.params.id,
	})
		.then((result) => {
			response.json({ result });
		})
		.catch((err) => {
			response.json({ message: "something went wrong", error: err });
		});
};
