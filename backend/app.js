const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config();
const express = require("express");
const connectToDB = require("./db/db");
const userRoutes = require('./routes/user.routes.js')

connectToDB();

const app = express();

app.use(cors());  // configuring cors
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/users',userRoutes)

// tesing sever response 

app.get('/',(req, res)=>{
    res.send("Hello world");
})


module.exports = app;
