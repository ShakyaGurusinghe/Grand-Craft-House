const mongoose = require('mongoose');4
const dotenv = require('dotenv');
dotenv.config();
const dbURL = process.env.URL;

mongoose.set("strictQuery",true,"useNewUrlParser",true);

const connection = async()=>{
    try{
       await mongoose.connect(dbURL);
        console.log('Connected to MongoDB');
    }catch(e){
        console.error(e.message);
        process.exit();
    }
}

module.exports = connection;