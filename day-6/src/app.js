const express=require("express");
const app =express();
const notesModel=require("./models/notes.model")

app.use(express.json()) //middleware - if we dont write it we cannot get data inside req.body
/**
 *  -post /notes
 * -req.body=> {title,description}
 */
app.post("/notes",async(req,res)=>{
     const {title,description}= req.body //destructuring getting title and desc. from req.body
     const note= await notesModel.create({
        title,description
    })
    res.status(201).json({
        message: "Note created successfully",
        note
    })
})
/**
 * -get /notes
 * -fetch all the notes data 
 */
app.get("/notes",async(req,res)=>{
   const notes= await notesModel.find() //gets all the notes info in the arr of obj format
   res.status(200).json({
    message : "notes fetched successfully",
    notes
   })
})
module.exports=app;