const User = require("../models/user.model");
const userService = require("../services/user.service.js"); 
const { validationResult } = require('express-validator')



module.exports.registerUser = async (req, res, next) => {
    
    // we catch the validation  errors from express-validator and return the respective response if any error is found
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({errors:error.array()});
    }

    const { fullname, email , password } = req.body;

    console.log("body",req.body);
    

    const hashedPass = await User.hashPassword(password);

    // now we call the create user function in the user-service

    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPass
    })

    const token = user.generateAuthToken();
    res.status(201).json({token , user})
}