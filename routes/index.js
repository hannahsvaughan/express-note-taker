// const express = require("express")
// // WE require modular routes
// const noteRoutes = require("./noteRoutes.js")
// const app = express()
const router = require("express").Router();
const path = require("path");


router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// GET * should return the index.html file
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;