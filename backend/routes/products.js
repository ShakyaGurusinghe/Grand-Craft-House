const express = require('express');
const router = express.Router();
const product = require("../models/product");

//test
router.get('/',(req,res)=>res.send("Product Routes are working properly!"));



module.exports = router;