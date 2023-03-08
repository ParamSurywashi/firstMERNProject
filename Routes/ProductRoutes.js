const express = require('express');
const productController = require('../controller/ProductFunction');

const ProductRouter = express.Router();



ProductRouter.get("/", productController.getAllProducts);
ProductRouter.get("/:id", productController.getProduct );
ProductRouter.post("/", productController.createProduct);
ProductRouter.put("/:id",productController.replaceProduct);
ProductRouter.patch("/:id",productController.updateProduct);
ProductRouter.delete("/:id", productController.deleteProduct);

exports.ProductRouter=ProductRouter;