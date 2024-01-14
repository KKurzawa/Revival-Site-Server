const mongoose = require("mongoose");

const commentsSchema = {
    userfirstname: String,
    userlastname: String,
    comment: String
}

const Comment = mongoose.model("Comment", commentsSchema);

module.exports = Comment;