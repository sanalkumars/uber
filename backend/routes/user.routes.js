const express = require("express");

const router = express.Router()
const { body } = require("express-validator")
const userController = require('../controllers/user.Controller.js');
//  here the use of the express-validator checks if all values meet the certain condition only , but does not do anything

router.post("/register",[
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({ min:3}).withMessage("Fisrt name must be atleast 3 characters"),
    body('password').isLength({ min:6}).withMessage("password name must be atleast 6 characters"),

] , userController.registerUser);

module.exports = router;