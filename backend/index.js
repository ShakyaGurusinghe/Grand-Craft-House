const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./config/db");
dotenv.config();

const app = express();

app.get('/',(req,res)=>res.send("Welcome to Grand Craft House!"));


dbConnection();

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);  
});