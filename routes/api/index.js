const express = require("express")
// WE require modular routes
const noteRoutes = require("./noteRoutes.js")
const app = express()

//we Tell our app to use those routes
app.use("/notes", noteRoutes)

module.exports = app