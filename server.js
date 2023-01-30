
const express = require('express');
const path = require('path')
const fs = require('fs');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

//SET INITAL PORT - is this correct?
const PORT = 3001;

// EXPRESS CONFIG
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// SETS UP EXPRESS APP TO SERVE STATIC FILES
app.use(express.static('public'));

//ROUTER
require("./routes/api.routes")(app);
require("./routes/html.routes")(app);

//LISTENER
app.listen(PORT, () => 
  console.log(`Express server currently running on por: ${PORT}`)
);


