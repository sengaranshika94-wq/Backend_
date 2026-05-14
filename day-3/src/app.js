const express=require("express");
const app=express(); //server create hogya
app.use(express.json()) //middleware ko use krne ka tarika h
let notes=[];

app.get("/notes",(req,res)=>{ //notes k andr ka content dekh skte
    res.send(notes);
})

app.post("/notes",(req,res)=>{ //server side pe data bhej skte
    console.log(req.body);
    notes.push(req.body);  
    res.send("note created");
})
 
// to delete notes
app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index];
    res.send("note deleted successfully") ;
})
 
//note k sirf description ko update krna h
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description= req.body.description;
    res.send("note updated successfully");
    
})

module.exports=app; //jo server create kiya h usko bahar bhej dia