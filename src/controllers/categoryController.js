const categoryModel=require("../models/category");

const getCategory=async (req,res)=>{
    //res.send("categories...");
    try{
        const categories=await categoryModel.find();
        if(categories){
            res.json({error:false,input_data:categories});
        }
        
    }
    catch(e){
        res.json({error:e.errormessage});
    }
    
}

const createCategory=async (req,res)=>{
    //res.send("creating categories");
    const {title,text}=req.query;
    try{
        const category=await categoryModel.create({
            title:title,
            text:text
        });
        res.send(category);
    }
    catch(e){
        res.send(e.errormessage);
    }
    
}

module.exports={getCategory,createCategory}