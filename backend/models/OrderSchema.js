const mongoose=require('mongoose');
const Schema=mongoose.Schema({
    addressId:{type:mongoose.Schema.Types.ObjectId,ref:"address",required:true}
})