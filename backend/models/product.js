const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productId:{
        type:String,
        required:true,
    },
    productName:{
        type:String,
        required:true,
    },
    productDescription:{
        type:String,
    },
    productPrice:{
        type:Number,
        required:true,
    },
    productQuantity:{
        type:Number,
    },


});


module.exports = products = mongoose.model("products",productSchema);