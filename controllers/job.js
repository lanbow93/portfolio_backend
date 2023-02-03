const router = require("express").Router()
const Job = require("../models/job")

// Index
router.get("/", async (request, response) => {
    try {
        response.status(200).json(await Job.find({}))
    } catch(error){
        response.status(400).json(error)
    }
})

// New - Frontend Only

// Delete
router.delete("/:id", async (request, response) => {
    try {
        response.status(200).json(await Job.findByIdAndDelete(request.params.id))
    } catch(error){
        response.status(400).json(error)
    }
})

// Update 
router.put("/:id", async (request, response) => {
    try {
        response.status(200).json(await Job.findByIdAndUpdate(request.params.id,request.body, {new: true}))
    } catch(error) {
        response.status(400).json(error)
    }
})

// Create
router.post("/", async (request, response) => {
    try {
        const newJob = await Job.create(request.body)
        response.status(200).json(newJob)
    }catch(error){
        response.status(400).json(error)
    }
})

// Edit - Frontend Only

// Show
router.get("/:id", async (request, response) => {
    try {
        response.status(200).json(await Job.findById(request.params.id))
    }catch(error){
        response.status(400).json(error)
    }
})



module.exports = router;