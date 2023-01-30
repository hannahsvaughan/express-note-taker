//DEPENDENCIES
const path = require('path');


//ROUTING
module.exports = (app) => {
    // HTML GET Requests

    // GET /notes should return the notes.html file
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    // GET * should return the index.html file
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};