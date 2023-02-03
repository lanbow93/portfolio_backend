const mongoose = require("./connection.js");

const projectSchema = new mongoose.Schema({
    projectTitle: String,
    projectImage: String,
    skillList: Array,
    description: String,
    summary: Array,
    links: {
        frontend: String,
        backend: String,
        live: String
    }
},{timestamps: true});

const Project = mongoose.model("project", projectSchema)

module.exports = Project;
