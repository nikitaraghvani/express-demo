const express=require("express");
const noteRouter=express.Router();
const {getNotes,createNotes,updateNote,deleteNote}=require("../controllers/noteController");
const auth=require("../middlewares/auth");

noteRouter.get("/getNotes",auth,getNotes);

noteRouter.post("/createNote",auth,createNotes);

noteRouter.put("/updateNote/:id",updateNote);

noteRouter.delete("/deleteNote/:id",deleteNote);

module.exports=noteRouter;