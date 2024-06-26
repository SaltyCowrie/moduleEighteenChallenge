const mongoose = require ('mongoose')
const userSchema = new mongoose.Schema({   
    username: {
    type: String,
    unique: true,
    required: true,
    trim: true
},

email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
},

thoughts: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought'
    }
],


friends: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
]},

{
    toJSON: {
        virtuals: true
    },
    id: false
})

const user = mongoose.model("user", userSchema)

module.exports = user

