const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required:true
  },
  first_name:{
    type: String,
    required:true
  },
  last_name:{
    type: String,
    required:true
  },
  age:{
    type: Number,
    required:true
  },
  address:{
    type: String,
    required:true
  },
  password:{
    type: String,
    required:true
  },
  followers:Array
})


const userModel = new mongoose.model("Peer", userSchema);

module.exports = userModel;