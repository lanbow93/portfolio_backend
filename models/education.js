const mongoose = require('./connection.js');

const educationSchema = new mongoose.Schema({
    title: String,
    facility: String,
    location: String,
    description: String
});

const Education = mongoose.model("education", educationSchema);

module.exports = Education;