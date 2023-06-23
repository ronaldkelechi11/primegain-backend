const express = require('express');
const mongoose = require('mongoose');
const app = express()
const PORT = 5000
const mongoClientUrl = "mongodb"


app.listen(PORT, () => {
    console.log("Server is live");
})