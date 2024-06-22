const express = require ('express')
const userModel = require ('../models/user')
const router = express.Router()

router.get ("/",async (req,res) => {
    try {
        const users = await userModel.find()
        res.json(users)
    }
    catch (err) {
        res.status(500)
    }
})

router.get ("/:id",async (req,res) => {
    try {
        const user = await userModel.findById(req.params.id) 
        if (!user) {
            return res.status(404)
        }
        res.json(user)
    }
    catch (err) {
        res.status(500)
    }
})

router.post ("/",async (req,res) => {
    try {
        const user = await userModel.create(req.body)
        res.json(user)
    }
    catch (err) {
        res.status(500)
    }
})

router.put ("/:id",async (req,res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body,{new: true, runValidators: true})
        res.json(user)
    }
    catch (err) {
        res.status(500)
    }
})

router.delete ("/:id",async (req,res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id)
        res.json(user)
    }
    catch (err) {
        res.status(500)
    }
})

router.post ("/:userId/friends/:friendId",async (req,res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.userId,{new: true},{$addToSet:{friends:req.params.friendId}})
        res.json(user)
    }
    catch (err) {
        res.status(500)
    }
})

router.delete ("/:userId/friends/:friendId",async (req,res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.usertId,req.body,{new: true},{$pull:{friends:req.params.friendId}})
    }
    catch (err) {
        res.status(500)
    }
})

module.exports = router 