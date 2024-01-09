const mongoose = require("mongoose");

const commentsSchema = {
    name: String,
    comments: String
}

const Note = mongoose.model("Comment", commentsSchema);

module.exports = Comment;