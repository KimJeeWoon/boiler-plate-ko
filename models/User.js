const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    user_id: {
        type: String,
        trim: true,
        unique: 1,
        maxlength: 40
    },
    password: {
        type: String,
        minlength: 25
    },
    name: {
        type: String,
        maxlength: 10
    },
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }