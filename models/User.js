const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

// username, email, telephone, dateAccountCreated, password
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 256
    },
    email: {
        type: String,
        required: true,
        max: 256
    },
    telephone: {
        type: Number,
        required: true,
        max: 20
    },
    dateAccountCreated: {
        type: String,
        max: 256
    },
    password: {
        type: String,
        required: true,
        max: 256
    },
})

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})
module.exports = mongoose.Model("User", userSchema)