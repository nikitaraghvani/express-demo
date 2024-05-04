const mongoose=require('mongoose');

const categorySchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    }
},{timestamps:true});

const categoryModel=mongoose.model("Category",categorySchema);
module.exports=categoryModel;