const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/User')


// username, email, telephone, dateAccountCreated, password
router.post('/', (req, res) => {
    var username = req.body.username
    var email = req.body.email
    var telephone = req.body.telephone
    var dateAccountCreated = req.body.dateAccountCreated
    var password = req.body.password

    const user = new User({ username: username, email: email, telephone: telephone, dateAccountCreated: dateAccountCreated, password: password })
    User.findOne({ email, username })
        .then((response) => {
            if (response == null) {
                user.save()
                    .then(res.status(200).send())//user saved
                    .catch(err => res.status(501).send())// error while saving
            }
            else {
                res.status(401).send()// user exist
            }
        })
        .catch((err) => { console.log(err), res.send(501) })//error while saving 
})

module.exports = router