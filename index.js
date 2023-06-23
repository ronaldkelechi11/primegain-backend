const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()
const PORT = 5000
const mongoClientUrl = "mongodb://127.0.0.1:27017/primegaininvestments"

// Middleware
app.use(express.json())
app.use(cors({ origin: "*" }))

// Initialize Route

//Assign Route

app.listen(PORT, () => {
    console.log("Server is live on: " + PORT);
    mongoose.connect(mongoClientUrl)
        .then(() => console.log("Connected to DB"))
        .catch(err => console.log(err))
})