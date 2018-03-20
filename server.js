var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var hbs = require ("express-handlebars");
var PORT = 3000;

// Require all models
var db = require("./models");

// Initialize Express
var app = express();

// Configure middleware

// require routes - gets object inside of routes index.js importing blueprint so we can use it
var routes = require("./routes")
app.use(routes)
//set up handlbars
app.engine("handlebars", hbs({defaultLayout:"main"}))
app.set("view engine", "handlebars")
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/news")


// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
