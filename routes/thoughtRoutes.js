const express = require ('express')
const thoughtModel = require ('../models/thought')
const router = express.Router()

router.get ("/",async (req,res) => {
    try {
        const thoughts = await thoughtModel.find()
        res.json(thoughts)
    }
    catch (err) {
        res.status(500)
    }
})

router.get ("/:id",async (req,res) => {
    try {
        const thought = await thoughtModel.findById(req.params.id) 
        if (!thought) {
            return res.status(404)
        }
        res.json(thought)
    }
    catch (err) {
        res.status(500)
    }
})

router.post ("/",async (req,res) => {
   try {
         const thought = await thoughtModel.create(req.body)
        res.json(thought)
    }
    catch (err) {
        res.status(500)
    }
})

router.put ("/:id",async (req,res) => {
    try {
        const thought = await thoughtModel.findByIdAndUpdate(req.params.id, req.body,{new: true, runValidators: true})
        res.json(thought)
    }
    catch (err) {
        res.status(500)
    }
})

router.delete ("/:id",async (req,res) => {
    try {
        const thought = await thoughtModel.findByIdAndDelete(req.params.id)
        res.json(thought)
    }
    catch (err) {
        res.status(500)
    }
})

router.delete ("/:thoughtId/reactions",async (req,res) => {
    try {
        const thought = await thoughtModel.findByIdAndUpdate(req.params.thoughtId,{new: true},{$pull:{reactions:{reactionId:req.params.reactionId}}})
        res.json(thought)
    }
    catch (err) {
        res.status(500)
    }
})

router.post ("/:thoughtId/reactions",async (req,res) => {
    try {
        const thought = await thoughtModel.findByIdAndUpdate(req.params.thoughtId,req.body,{new: true, runValidators: true})
        res.json(thought)
    }
    catch (err) {
        res.status(500)
    }
})

module.exports = router 