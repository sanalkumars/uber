const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")


const UserSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,"First name must be atleast 3 characters"]
        },
        lastname:{
            type:String,
            required:false
        }
          },
        email:{
            type:String,
            required:true,
            unique:true,
            minlength:[5,"Email id must be atleast 5 characters"]
        },
        password:{
            type:String,
            required:true,
            select:false //this makes the field not accessible when trying to fetch the user info
        },
        socketID:{
            type:String
        }
  
});


// creating some methods for the model like authentication part etc
// function for creating the auth token using jwt
UserSchema.methods.generateAuthToken= function(){
    const token = jwt.sign({ _id:this._id},process.env.JWT_SECRET);
    return token;
}

// function for comparing the password
UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password);
}

// function for hashing the user password
UserSchema.statics.hashPassword = async function (password)  {
    return await bcrypt.hash(password,10);
}

const User = mongoose.model("User",UserSchema);

module.exports = User;