const express = require("express");
const cors = require("cors");
const { mongoose } = require("./models/db");
const bodyParser = require("body-parser");
var path = require("path");

//routes
const rtsIndex = require("./routes/router");

//middleware
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//routers
app.use("/shopping/flight-offers", rtsIndex); // api endpoint

// static
app.use(express.static(path.join(__dirname, "public")));

//server
app.listen(2800, function () {
  console.log("Servidor Levantado en el puerto", 2800);
});
