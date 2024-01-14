const express = require("express");
const router = express.Router();
const Comment = require("../Models/commentModel");

router.route("/create").post((req, res) => {
    const userfirstname = req.body.userfirstname;
    const userlastname = req.body.userlastname;
    const comment = req.body.comment;
    const newComment = new Comment({
        userfirstname,
        userlastname,
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