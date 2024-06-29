const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    created_On:{
        type:Date,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    likes:Array
})

const postModel = new mongoose.model("Post",postSchema);

module.exports = postModel;