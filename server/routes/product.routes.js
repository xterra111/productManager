const productManagerController = require("../controllers/ProductManager.controller");

module.exports = (app) => {
	app.get("/api", productManagerController.showAll);
	app.post("/api/product", productManagerController.createProduct);
};
