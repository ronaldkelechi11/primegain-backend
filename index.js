const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

// Javscript Variables
const app = express()
const PORT = 5000
const mongoClientUrl = "mongodb://127.0.0.1:27017/primegaininvestments"

// Middleware
app.use(express.json())
app.use(cors({ origin: "*" }))

// Initialize Route
const signup = require("./routes/signup")
const signin = require('./routes/signin')
const dashboard = require("./routes/dashboard")
const adminDashboard = require('./routes/admindashboard')

//Assign Route
app.use("/signup", signup);
app.use("/signin", signin);
app.use("/dashboard", dashboard);
app.use("/admin", adminDashboard);


// Report Logs
app.listen(PORT, () => {
    console.log("Server is live on: " + PORT);
    mongoose.connect(mongoClientUrl)
        .then(() => console.log("Connected to DB"))
        .catch(err => console.log(err))
})