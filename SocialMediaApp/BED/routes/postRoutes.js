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
        req.body = { msg: "Session Expired", status: false }
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
        res.json({msg:"Error is finding the author, Try another author", status: false})
    }

})

module.exports = postRoutes;