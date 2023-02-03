// Import dependencies
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const projectRouter = require("./controllers/project")
const jobRouter = require("./controllers/job")
const educationRouter = require("./controllers/education")
const homeInfo = require("./controllers/home.json")
const {PORT} = process.env

// Application object
const app = express()

// Middleware
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

// Routers
app.use("/projects", projectRouter)
app.use("/jobs", jobRouter)
app.use("/education",educationRouter)

// Routes
app.get("/", (request, response) => {
    response.send("Portfolio server is functional")
})

app.get("/home", (request, response) => {
    response.json(homeInfo)
})

app.listen(PORT, (request, response) => {
    console.log("Listening on Port: " + PORT)
})
