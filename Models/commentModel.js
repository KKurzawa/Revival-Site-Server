const mongoose = require("mongoose");

const commentsSchema = {
    username: String,
    comment: String
}

const Comment = mongoose.model("Comment", commentsSchema);

module.exports = Comment;