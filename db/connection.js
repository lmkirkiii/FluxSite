const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fluxus_db");
mongoose.promise = Promise; 
module.exports = mongoose; 