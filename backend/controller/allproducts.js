const express=require("express")

const allProductRouter=express.Router()

const productModel=require("../models/productModel")

allProductRouter.get("/",async(req,res)=>{
    try {
        const products=await productModel.find()
        res.status(200).send({message:"successful",products:products})
    } catch (error) {
        res.status(500).send({message:"something went wrong"});
    }
})

allProductRouter.get("/:id",async(req,res)=>{
    try {
        const {id}=req.params
        if(!id) {
            return res.status(400).send({message:"please provide id"})
        }
    const product=awaitproductModel.findOne({_id:id})
    return res.status(200).send({message:"successful",product:product})
    } catch (error) {
        res.status(500).send({message:"something went wrong"});
    }
})