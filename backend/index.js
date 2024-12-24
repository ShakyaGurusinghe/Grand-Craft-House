const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/products");
dotenv.config();

const app = express();

app.use(cors({origin:true,credentials:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>res.send("Welcome to Grand Craft House!"));
app.use('/api/products/',router);

dbConnection();

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);  
});