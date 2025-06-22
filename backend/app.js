const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config();
const express = require("express");
const connectToDB = require("./db/db");


connectToDB();

const app = express();

app.use(cors());  // configuring cors


// tesing sever response 

app.get('/',(req, res)=>{
    res.send("Hello world");
})


module.exports = app;
