const userModel=require("../models/user");
//importing the bcrypt library
const bcrypt=require("bcrypt");

//importing jsonwebtoken library
const jwt=require("jsonwebtoken");

const SECRET_KEY="RANDOMKEY";

// const signup=(req,res)=>{
//     const {username,email,password}=req.body;
//     const result=userModel.create({
//         username:username,
//         email:email,
//         password:password
//     });
//     res.status(201).json({user:result});
// }

const signup=async (req,res)=>{
    //checking for existing user or not
    //Hashed password
    //User Creation
    //Token generate

    const {username,email,password}=req.body;
    try{
        const existingUser=await userModel.findOne({email:email});
        if(existingUser){
            return res.status(400).json({message:"User already exist"});
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const result= await userModel.create({
            username:username,
            email:email,
            password:hashedPassword
        });

        const token=await jwt.sign({email:result.email,id:result._id},SECRET_KEY);
        res.status(201).json({user:result,token:token});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}

const signin=async (req,res)=>{
    // res.send("Sign in Successfully");
    const {email,password}=req.body;
    try{
        const existingUser=await userModel.findOne({email:email});
        if(!existingUser){
            return res.status(404).json({message:"User not found"});
        }

    const matchPassword=await bcrypt.compare(password,existingUser.password);

    if(!matchPassword){
        return res.status(400).json({"message":"Invalid credentials"});
    }

    const token=await jwt.sign({email:existingUser.email,id:existingUser._id},SECRET_KEY);
        res.status(201).json({"message":"Sign in successfull",user:existingUser,token:token});

    }
    catch(error){
        res.status(404).response("error_messge",error.message);
    }
    
}

const getUser=async (req,res)=>{
    //return res.send("helloooo....");
    const users=await userModel.find();
    res.json(users);
}

const createUser=async (req,res)=>{
    try{
    const {username,email,password}=req.body;
    const result=await userModel.create({
        username:username,
        email:email,
        password:password
    });
    res.status(201).json(result);
    }
    catch(error){
        res.status(400).json({error_message:error.message});
    }
}

const updateUser=async (req,res)=>{
    try{
        //res.send("updating...");
        const {id}=req.params;
        const {username,email,password}=req.body;

        const result=await userModel.findByIdAndUpdate(id,{username,email,password},{new:true});

        if(result){
            res.json(result);
        }
        else{
            res.status(400).json({message:"User Not Found"});
        }
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const deleteUser=async (req,res)=>{
    try{
        //res.send("deleted");
        const {id}=req.params;
        const result=await userModel.findByIdAndDelete(id);

        if(result){
            res.json({message:'User Deleted Successfully'});
        }
        else{
            res.status(200).json({error_message:'User not found'});
        }
    }
    catch(error){
        res.status(400).json({error_message:error.message});
    }
}

module.exports={signup,signin,getUser,createUser,updateUser,deleteUser};