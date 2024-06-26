const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    status:String,
    title: String,
    content:String,
    wordCount:Number,
    postedOn:Date
})

const blogModel = new mongoose.model("Blog", blogSchema);

module.exports = blogModel;