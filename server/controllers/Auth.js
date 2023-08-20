import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import User from "../models/Users.js"
import { createError } from "../error.js"
import jwt from "jsonwebtoken"

export const signup=async(req,res,next)=>{
   try {
    console.log(req.body)
    const salt=bcrypt.genSaltSync(10);
    const hash=bcrypt.hashSync(req.body.password,salt);
    const newUser=new User({...req.body,password:hash});

   await newUser.save();
   res.status(200).send("User has been created!")
   } catch (error) {
    next(error)
   }
}


export const signin=async(req,res,next)=>{
  try {
    const user=await User.findOne({name:req.body.name})
    if(!user) return next(createError(404,"User not found!"))

    const isCorrect=await bcrypt.compare(req.body.password,user.password)

    if(!isCorrect) return next(createError(400,"Wrong Credentials!"))


    const token=jwt.sign({
        id:user._id  //we wrote _id like this b/c mongo saves id like that
    },process.env.JWT)

    console.log(token,"TOKENN")

    const {password,...others}=user._doc  //password is not needed to show so, we separate password from user and store it in others.


    res.cookie("access_token",token,{
        httpOnly:true
    })
    .status(200)
    .json(others)
    
  } catch (error) {
    next(error)
  }
 }