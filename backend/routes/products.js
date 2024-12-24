const express = require('express');
const router = express.Router();
const product = require("../models/product");
const e = require('express');

//test
router.get('/test',(req,res)=>res.send("Product Routes are working properly!"));

//insert a product to the db
router.post('/',(req,res)=>{
    product.create(req.body).
    then(()=>res.json("Product added successfully!"))
    .catch((error)=>res.status(400).json({msg:"Product adding is failed!",error:e.message}));
});

//get all products from the db
router.get('/',(req,res)=>{
    product.find()
   .then((products)=>res.json(products))
   .catch((error)=>res.status(400).json({msg:"Error getting products",error:error}));
});

//get a specific product from db
router.get('/:id', (req, res)=>{
    product.findById(req.params.id)
   .then((products)=>res.json(products))
   .catch((error)=>res.status(400).json({msg:"Error getting products",error:error}));
})

//update a product in the db
router.put('/:id',(req,res)=>{
    product.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>res.json("Product updated successfully!"))
    .catch((error)=>res.status(400).json({msg:"Error updating product",error:error}));
});

//delete a specific product from the db
router.delete('/:id',(req,res)=>{
    product.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Product deleted successfully!"))
    .catch((error)=>res.status(400).json({msg:"Error deleting product",error:error}));
});


module.exports = router;