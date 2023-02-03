require("dotenv").config();
const {MONGO_URI} = process.env;
const mongoose = require("mongoose");


mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URI)

mongoose.connection
    .on("open", () => { console.log("Mongo connection has been established")})
    .on("close", () => { console.log("Mongo has disconnected")})
    .on("error", (error) => { console.log(error)})

module.exports = mongoose