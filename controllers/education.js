const router = require("express").Router()
const Education = require("../models/education")

// Index
router.get("/", async (request, response) => {
    try {
        response.status(200).json(await Education.find({}))
    } catch(error){
        response.status(400).json(error)
    }
})

// New - Frontend Only

// Delete
router.delete("/:id", async (request, response) => {
    try {
        response.status(200).json(await Education.findByIdAndDelete(request.params.id))
    } catch(error){
        response.status(400).json(error)
    }
})

// Update 
router.put("/:id", async (request, response) => {
    try {
        response.status(200).json(await Education.findByIdAndUpdate(request.params.id,request.body, {new: true}))
    } catch(error) {
        response.status(400).json(error)
    }
})

// Create
router.post("/", async (request, response) => {
    try {
        const newEducation = await Education.create(request.body)
        response.status(200).json(newEducation)
    }catch(error){
        response.status(400).json(error)
    }
})

// Edit - Frontend Only

// Show
router.get("/:id", async (request, response) => {
    try {
        response.status(200).json(await Education.findById(request.params.id))
    }catch(error){
        response.status(400).json(error)
    }
})



module.exports = router;