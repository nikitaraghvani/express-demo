const express=require("express");
//const { getCategory } = require("../controllers/categoryController");
const categoryController=require("../controllers/categoryController");
const productController=require("../controllers/productController");
const categoryRouter=express.Router();

categoryRouter.get("/getCategory",categoryController.getCategory);
categoryRouter.post("/createCategory",categoryController.createCategory);

categoryRouter.get("/getProducts",productController.getProducts);
categoryRouter.post("/createProducts",productController.createProducts); 


module.exports=categoryRouter