const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")
const noteModel = require("./models/note.model")

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname,"../public")))

app.post("/api/notes", async(req,res)=>{
    const {title,description}=req.body

    const note=await noteModel.create({
        title,
        description
    })

    res.status(201).json({
        message:"note created successfully",
        note
    })
})

app.get("/api/notes", async(req,res)=>{
    const notes=await noteModel.find()

    res.status(200).json({
        message:"all notes fetched",
        notes
    })
})

app.delete("/api/notes/:id", async(req,res)=>{
    await noteModel.findByIdAndDelete(req.params.id)

    res.status(200).json({
        message:"note deleted successfully"
    })
})

app.patch("/api/notes/:id", async(req,res)=>{
    const {title,description}=req.body

    await noteModel.findByIdAndUpdate(
        req.params.id,
        {title,description}
    )

    res.status(200).json({
        message:"note updated successfully"
    })
})

app.use("/*splat",(req,res)=>{
    res.sendFile(
        path.join(__dirname,"../public/index.html")
    )
})

module.exports = app