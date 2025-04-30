const express=require('express');
const addressRouter=express.Router();
const orderModel=require("../models/orderSchema");
const cartproducts=require("../models/cartModel");
cons userModel=require("../models/userModel");
const addressModel=require("../models/addressModel");
const mailer=require("../models/nodemailer");

addressRouter.post("/",async(req,res))=>{
    try{
        const{addressId,productIDS}=req.body;
        if(!addressId || productIDS.length<1){
            return res.status(400).send({message:"please add address id and product id"});
        }
        const address=await addressModel.findOne({_id:addressId});
        if(!address){
            return res.status(404).send({message:"address not found"});
        }
        const products=cartModel.find({_id;{$}})
        const postOrder=await orderModel({addressId,products:productIDS}).save();
    }

}