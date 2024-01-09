const express = require("express");
const router = express.Router();
const Comment = require("../Models/commentModel");

router.route("/create").post((req, res) => {
    const name = req.body.name;
    const comment = req.body.comment;
    const newComment = new Comment({
        name,
        comment
    });

    newComment.save();
    res.json({ message: "succuss" })
})

router.route("/comments").get((req, res) => {
    Comment.find()

        .then(foundComments => res.json(foundComments))
})

module.exports = router;