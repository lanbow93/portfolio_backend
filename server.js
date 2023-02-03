// Import dependencies
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const projectRouter = require("./controllers/project")
const {PORT} = process.env

// Application object
const app = express()

// Middleware
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

// Routers
app.use("/projects", projectRouter)

// Routes
app.get("/", (request, response) => {
    response.send("Portfolio server is functional")
})

app.listen(PORT, (request, response) => {
    console.log("Listening on Port: " + PORT)
})
