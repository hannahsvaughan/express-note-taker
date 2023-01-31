const express = require("express")

// WE require modular routes
const apiRoutes = require("./api")
const app = express()

//we Tell our app to use those routes
app.use("/api", apiRoutes)

module.exports = app