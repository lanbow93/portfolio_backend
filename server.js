// Import dependencies
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const {PORT} = process.env

// Application object
const app = express()

// Middleware
app.use(morgan("dev"))
app.use(cors({}))


// Routes
app.get("/", (request, response) => {
    response.send("Portfolio server is functional")
})

app.listen(PORT, () => {
    console.log("Listening on Port: " + PORT)
})
