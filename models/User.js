const mongoose = require('mongoose')

// username, email, telephone, dateAccountCreated, password
const userSchema = new mongoose.Schema({

})
module.exports = mongoose.Model("User", userSchema)