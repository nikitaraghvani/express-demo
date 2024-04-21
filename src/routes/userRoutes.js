const express=require('express');
const userRouter=express.Router();

//importing the functions that are defined in controller
const {signup,signin}=require("../controllers/userController");

userRouter.get('/allUsers',(req,res)=>{
    res.send("All Users");
});

//defining the function here
// userRouter.post('/signup',(req,res)=>{
//     res.send("Sign Up");
// });

//calling the function that is created in controller
userRouter.post('/signup',signup);

// userRouter.post('/signin',(req,res)=>{
//     res.send("Sign In");
// })

userRouter.post('/signin',signin);

module.exports=userRouter;