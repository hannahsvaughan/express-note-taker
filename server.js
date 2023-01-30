//DEPENDENCIES
const express = require("express");

// EXPRESS CONFIG
const app = express();

//SET INITAL PORT - is this correct?
const PORT = 3001;

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SETS UP EXPRESS APP TO SERVE STATIC FILES
app.use(express.static('public'));

//ROUTER
require("./routes/api.routes")(app);
require("./routes/html.routes")(app);

//LISTENER
app.listen(PORT, () => 
  console.log(`Express server currently running on por: ${PORT}`)
);


