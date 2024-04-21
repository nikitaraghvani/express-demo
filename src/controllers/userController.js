const userModel=require("../models/user");

const signup=(req,res)=>{
    //res.send("Signup Successfully");
    const {username,email,password}=req.body;
    const result=userModel.create({
        username:username,
        email:email,
        password:password
    });
    res.status(201).json({user:result});
}

const signin=(req,res)=>{
    res.send("Sign in Successfully");
}

module.exports={signup,signin};