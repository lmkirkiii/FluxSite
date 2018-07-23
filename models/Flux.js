const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const Comment = new Schema({
    content: String,
    createdAt: {
        type: Date,
        default: Date.now();
    }
})