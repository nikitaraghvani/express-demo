//console.log("Hello World in Express");
const express=require("express");
const quotes=require("./quotes.json");
const userRouter = require("./routes/userRoutes");
const noteRouter=require("./routes/noteRoutes");
const categoryRouter=require("./routes/categoryRoutes");
const app=express();

//converting request body in json format
app.use(express.json());

//expoerting mongodb package
const mongoose=require("mongoose");

app.use("/users",userRouter);
app.use("/notes",noteRouter);
app.use("/api",categoryRouter);

app.get('/',(req,res)=>{
    res.send("Hello from Express")
});

app.get('/test',(req,res)=>{
    res.send("Testing Express")
});

app.get('/quote',(req,res)=>{
    res.status(200).json(quotes);
})

app.get('/random',(req,res)=>{
    let index=Math.floor(Math.random() * quotes.length)
    let quote=quotes[index]
    res.status(200).json(quote);
});

//connecting to mongodb
mongoose.connect("mongodb://localhost:27017/expressdb")
.then(()=>{
    console.log("Connected to database");
    app.listen(8000,()=>{
        console.log("Server started on port 8000");
    });

}).catch((error)=>{
    console.log("Error in connecting to database");
})

