const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const Comment = new Schema({
    content: String,
    createdAt: {
        type: Date,
        default: Date.now();
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}); 

const Flux = new Schema({
    content: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }, 
    author: {
        type: Schema.Types.ObjectId,
        ref: "User";
    },
    comments: [Comment]
}); 

module.exports = {
    Tweet: mongoose.model("Flux",Flux),
    Comment: mongoose.model("Comment",Comment)
};
