const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
	{
		Title: String,
		Price: String,
		Description: String,
	},
	{
		timestamps: true,
	}
); //Add timestamp as a best practice in o
module.exports = mongoose.model("Product", productSchema);
