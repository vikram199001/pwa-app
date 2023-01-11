const express = require("express");
const router = express.Router();

const postService = require('../service/post.service');

router.get("/", getAllPosts);
router.post("/", addPost);


function getAllPosts(req, res, next) {
    postService
      .getAllPosts()
      .then((data) => {
        return res.status(200).send(data);
      })
      .catch((err) => next(err));
  }


  function addPost(req, res, next) {
    console.log('----re', req.body);
    postService
      .addPost(req.body)
      .then((data) => {
        return res.status(200).send(data);
      })
      .catch((err) => next(err));
  }

module.exports = router;