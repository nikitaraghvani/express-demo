const NoteSchema=require("../models/note");
const auth=require("../middlewares/auth");


const getNotes=async (req,res)=>{
    const notes=await NoteSchema.find();
    if(notes){
        res.json({notes:notes});
    }
}

const createNotes=async (req,res)=>{
    try{
        const {title,text}=req.body;
        const notes=await NoteSchema.create({
        title:title,
        text:text,
        userId:req.userId
    });
        res.status(201).json(notes);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
    
    
}

const updateNote=async (req,res)=>{
    try{
        const {id}=req.params;
        const {title,text}=req.body;
        const result=await NoteSchema.findByIdAndUpdate(id,{title,text},{new:true});
        res.json({"message":"Updated Successfully",result});
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
    
}

const deleteNote=async (req,res)=>{
    try{
        const {id}=req.params;
        const result=await NoteSchema.findByIdAndDelete(id);
        if(result){
            res.json({"message":"Deleted Successfully"});
        }
        
    }
    catch(error){
        res.json({"message":error.message});
    }
    
}

module.exports={getNotes,createNotes,updateNote,deleteNote};