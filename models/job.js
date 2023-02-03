const mongoose = require("./connection.js");

const jobSchema = new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    date: String,
    details: Array
}, {timestamps: true});

const Job = mongoose.model("job", jobSchema);

module.exports = Job;
