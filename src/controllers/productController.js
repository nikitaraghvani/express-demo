const productModel=require("../models/product");
const categoryModel=require("../models/category");

const getProducts=async (req,res)=>{
    //res.send("products...");
    try{
        const products=await productModel.find().populate("category");
        if(products){
            res.json({error:false,input_data:products});
        }
    }
    catch(e){
        res.send(e.errormessage);
    }
    
}

const createProducts=async (req,res)=>{
    //res.send("creating products");
    try{
        
        const {name,description,price,category}=req.query;
        const products=await productModel.create({
            name:name,
            description:description,
            price:price,
            category:category
        });
        res.status(200).json({products:products});
    }
    catch(e){
        res.send(e.errormessage);
    }
}

module.exports={getProducts,createProducts}