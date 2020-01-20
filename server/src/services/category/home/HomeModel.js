const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    name: String,
    coverPicture: String
})

module.exports = mongoose.model("HomeSchema", HomeSchema)