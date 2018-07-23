const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const User = new Schema({
    local: {
        email: String,
        password:String
    },
    fluxus: [
        {
            type: Schema.Types.ObjectId,
            ref: "Flux"
        }
    ]
});

module.exports = mongoose.model("User", User);
