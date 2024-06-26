const express = require("express");
const blogRoutes = express.Router();
const blogModel = require("../models/blogModel")

blogRoutes.post('/createBlog',async(req,res)=>{
    let data = req.body;

    let blog = new blogModel({...data});
    await blog.save();
    
    res.json({msg:"Blog is created."})

})

blogRoutes.get('/readBlogs',async (req,res)=>{
    // let blogs = await blogModel.find();
    // let blogs = await blogModel.findById("66751dacc724d1682c7e3bfa");

    // let blogs = await blogModel.findOne({status:"A"});

    let blogs = await blogModel.find({wordCount:{$gt:24}});

    res.json({data:blogs})
})

blogRoutes.put('/updateBlog/:id',async(req,res)=>{
    let userId = req.params.id;
    let updatedVal = req.body;

    let result = await blogModel.findByIdAndUpdate(userId, updatedVal, {new:false});

    res.json({data:result})
})

blogRoutes.delete('/delBlog/:id', async(req,res)=>{
    let blogId = req.params.id;

    let result = await blogModel.findByIdAndDelete(blogId);
    res.json({data:result});
})

module.exports = blogRoutes;