const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name:String,
    last_name: String,
    age:Number,
    status:String,
    address:{
        location:{
            street:String,
            area:String,
            city:String
        },
        state:String,
        pincode:Number
    },
    dob:Date,
    validity:Number,
    contact:Number,
    password:String,
    encPass : String
})

const userModel = new mongoose.model("User", userSchema);

module.exports = userModel;