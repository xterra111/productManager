const productManagerController = require("../controllers/ProductManager.controller");

module.exports = (app) => {
	app.get("/api/listAllProducts", productManagerController.showAll);
	app.post("/api/product", productManagerController.createProduct);
	app.get("/api/productDetails/:id", productManagerController.productDetails);
};
