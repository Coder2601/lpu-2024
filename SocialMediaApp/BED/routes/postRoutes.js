const express = require("express");
const jwt = require("jsonwebtoken");
const postRoutes = express.Router();
const postModel = require("../models/postModel");

require("dotenv").config();

function validateToken(req, res, next) {
    let authHeaders = req.headers.authorization;

    let token = authHeaders && authHeaders.split(" ")[1];
    try {
        let result = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
        // console.log(result);
        req.body = { data: { username: result.user_name, ...req.body }, status: true }

    } catch (error) {
        // console.log(error);
        res.json({ msg: "Session Expired", status: false })
    }
    next();

}

postRoutes.post('/createPost', validateToken, async (req, res) => {

    if (!req.body.status) {
        res.json({ msg: "Session Expired", status: false })
    }
    else {
        let postData = req.body.data;
        console.log(postData);

        const post = new postModel({ ...postData });
        await post.save();

        res.json({ msg: "Saving the post data...", status: true })
    }
})

postRoutes.get('/author/:authorName', async (req, res) => {
    let authorName = req.params.authorName;

    try {
        let posts = await postModel.find({ author: authorName });

        if (posts.length > 0) {
            res.json({ data: posts, status: true })
        } else {
            res.json({ msg: "No Such Author Found, try another author", status: false })
        }
    } catch (error) {
        res.json({ msg: "Error is finding the author, Try another author", status: false })
    }

})

postRoutes.delete('/deletePost/:id', async (req, res) => {
    let postId = req.params.id;

    let postData = await postModel.findByIdAndDelete(postId);

    if (postData.length <= 0) {
        res.json({ msg: "No such Post exists.", status: false })
    } else {
        res.json({ msg: "Post Deleted Successfuly", status: true })
    }

})

postRoutes.get('/getPost/:id', async (req, res) => {

    let authHeaders = req.headers.authorization;
    let token = authHeaders && authHeaders.split(" ")[1];

    try {
        let result = jwt.verify(token, process.env.ACCESS_SECRET_KEY);

        let postData = await postModel.findById(req.params.id);

        // console.log(postData);
        // res.json({msg:"Finding posts"});

        if (postData) {
            res.json({ data: postData, status: true })
        } else {
            res.json({ msg: "Error in finding the Post", status: false })
        }


    } catch (error) {
        res.json({ msg: "Unauthorised Access, Login Again", status: false })
    }


})

postRoutes.put('/editPost/:id', async (req, res) => {
    let authHeaders = req.headers.authorization;
    let token = authHeaders && authHeaders.split(" ")[1];
    let postData = req.body;
    let postId = req.params.id

    try {
        let result = jwt.verify(token, process.env.ACCESS_SECRET_KEY);

        let responseData = await postModel.findByIdAndUpdate(postId, postData, { new: true })

        if (responseData) {
            res.json({ msg: "Data Updated successfully", status: true })
        } else {
            res.json({ msg: "Error in Updating the data", status: false })
        }
    }
    catch (error) {
        res.json({ msg: "Unauthorised Access", status: false })
    }
})

postRoutes.get('/likePost/:postId/:userName', validateToken, async (req, res) => {
    let postId = req.params.postId;
    let userName = req.params.userName;

    try {
        let response = await postModel.findById(postId);

        if(response.likes.includes(userName)){
            res.json({msg:"Already Liked", status: false})
        }
        else{
            response.likes.push(userName);
            let result = await postModel.findByIdAndUpdate(postId, response, { new: true });
            console.log(result);
            res.json({data:result.likes.length,msg:"Likes Updated", status:true})
        }

    } catch (error) {
        res.json({msg:"Error in updating Likes", status:false})
    }


})

module.exports = postRoutes;