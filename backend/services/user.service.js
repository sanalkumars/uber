const User = require("../models/user.model");



// function for creating a new user in the database

module.exports.createUser = async ({
    firstname , lastname , email , password
}) => {
    if(!firstname  , !email , !password){
        throw new Error('All Fields Are Required');
    }

    // creating a new user

    const user = User.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    });
    return user; 
}