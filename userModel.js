const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    isVerified:{
        type: Boolean
    },
    emailToken:{
        type:String
    },
    date:{
        type: Date,
        default:Date.now()
    },
})

const User = mongoose.model("User",userSchema)

module.exports = User;