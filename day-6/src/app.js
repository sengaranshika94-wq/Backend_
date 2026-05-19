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
     const notes= await notesModel.create({
        title,description
    })
    res.status(201).json({
        message: "Note created successfully",
        notes
    })
})
module.exports=app;