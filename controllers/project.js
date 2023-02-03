const router = require("express").Router()
const Project = require("../models/project")

// Index
router.get("/", async (request, response) => {
    try {
        response.status(200).json(await Project.find({}))
    } catch(error){
        response.status(400).json(error)
    }
})

// New - Frontend Only

// Delete
router.delete("/:id", async (request, response) => {
    try {
        response.status(200).json(await Project.findByIdAndDelete(request.params.id))
    } catch(error){
        response.status(400).json(error)
    }
})

// Update 
router.put("/:id", async (request, response) => {
    try {
        response.status(200).json(await Project.findByIdAndUpdate(request.params.id,request.body, {new: true}))
    } catch(error) {
        response.status(400).json(error)
    }
})

// Create
router.post("/", async (request, response) => {
    try {
        const newProject = await Project.create(request.body)
        response.status(200).json(newProject)
    }catch(error){
        response.status(400).json(error)
    }
})

// Edit - Frontend Only

// Show
router.get("/:id", async (request, response) => {
    try {
        response.status(200).json(await Project.findById(request.params.id))
    }catch(error){
        response.status(400).json(error)
    }
})



module.exports = router;