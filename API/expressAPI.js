//First step towards node.js local host server
//Uses expo api to connect ot Node.js server
// Postman 
//MongoDb(subject to change based on project)
//Refer to-do list project for reference

var express = require("express");
var app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});