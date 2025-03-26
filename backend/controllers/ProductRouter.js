const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    images: { type: [String], required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true } 
}, { timestamps: true }); 

const productModel = mongoose.model("products", schema);

module.exports = productModel;
const express = require("express");

const productRouter = express.Router();

const productModel = require("../models/productModel");

const productImages = require("../middleware/multer");

productRouter.post("/addproduct",async(req,res,next)=>{
    productImages.array("images",6)(req,res,(err)=>{
        if(err){
            return res.status(500).send({msg:"Something went wrong while uploading images"});
        }
    })

},async(req,res)=>{
    try {
        const {title,description,price} = req.body;
        if(!title || !description || !price){
            return res.status(404).send({msg:"Please fill all fields"});
        }

        const images = req.files;
        const imageLinkArray = [];
        console.log(images);
        images.forEach((ele)=>{
           imageLinkArray.push('http://localhost:8080/uploads/images');
        })

        return res.status(200).send({msg:"Product added sucessfully"});

    } catch (error) {
        return res.status(500).send({msg:"Something went wrong",error});
    }

})

module.exports = productRouter;