const mongoose = require ('mongoose')
const reactionSchema = require ('./reaction')
const thoughtSchema = new mongoose.Schema({   


thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
},

createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toISOString()
},

username: {
    type: String,
    required: true
},
reactions: [reactionSchema]},

{
    toJSON: {
        getters: true
    },
    id: false
})

const thought = mongoose.model("thought", thoughtSchema)

module.exports = thought

