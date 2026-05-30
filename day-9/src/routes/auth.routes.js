const express = require("express")
const userModel= require("./../models/user.Model")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")

authRouter.post("/register",async(req,res)=>{

    const {email, name , password} = req.body
    const isUserExist = await userModel.findOne({email})

    if(isUserExist){
        return res.status(409).json({
            message : "email already exist, try with another email"
        })
    }

    const user = await userModel.create({
        email, name, password
    })
    const token = jwt.sign({
            id : user._id,
            email :user.email
        },
        process.env.JWT_SECRET_KEY
    )

    res.cookie("jwt_token",token)

    res.status(201).json({
        message : "User Registered successfully",
        user,
        token
    })

})

module.exports = authRouter