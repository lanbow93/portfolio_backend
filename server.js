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
const Education = require("./models/education")
const Job = require("./models/job")

// Application object
const app = express()

// Middleware
app.use(morgan("dev"))
app.use(cors({}))
app.use(express.json())

// Routers
app.use("/projects", projectRouter)
app.use("/jobs", jobRouter)
app.use("/education",educationRouter)

// Routes
app.get("/", (request, response) => {
    response.send("Portfolio server is functional")
})

app.get("/about", async (request, response) => {

    try {
        const jobs = await Job.find({})
        try {
            const education = await Education.find({})
            response.status(200).json({jobs, education})
        }catch(error){
            response.status(400).json(error)
        }
    }catch(error){
        response.status(400).json(error)
    }
})


app.get("/home", (request, response) => {
    response.json(homeInfo)
})

app.listen(PORT, (request, response) => {
    console.log("Listening on Port: " + PORT)
})
