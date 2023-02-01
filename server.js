//DEPENDENCIES
const express = require("express");
const routes = require("./routes");
// EXPRESS CONFIG
const app = express();
const path = require("path");

//SET INITAL PORT 
const PORT = process.env.port || 3001;

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SETS UP EXPRESS APP TO SERVE STATIC FILES
app.use(routes)
app.use(express.static('public'));

//ROUTER
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});
// GET * should return the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//POST REQUEST??? idk

//DELETE?


//LISTENER
app.listen(PORT, () => 
  console.log(`Express server currently running on port: ${PORT}`)
);


