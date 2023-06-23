const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/User')

router.post('/', async (req, res) => {
    var email = req.body.email
    var password = req.body.password

    const user = await User.findOne({ email })
    if (email == "admin@primegain.com" && password == 'adminpassword') {
        res.status(300).send()// Admin login
    }
    else if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            res.status(200).send(user)//correct details
        }
        else {
            res.status(401).send()//wrong password
        }
    }
    else {
        res.status(401).send()//user doesnt exist
    }
})

module.exports = router