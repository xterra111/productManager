const productManagerController = require("../controllers/ProductManager.controller");

module.exports = (app) => {
	app.get("/api", productManagerController.index); //Add this to start off. Can comment once the functional items are added here.
	app.post("/api/product", productManagerController.createProduct);
};
