const express=require("express")
const app=express()
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/about",(req,res)=>{
    res.send("this is about page")
})
app.get("/contact",(req,res)=>{
    res.send("this is contact page")
})  