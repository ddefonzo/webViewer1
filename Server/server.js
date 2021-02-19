const express = require('express');
const notesRouter = require('./Routes/notes');

// Load env variables
require('dotenv').config()

//Initalizes express server
const app = express();

//specifies what port to run the server on ||3001;
const PORT = process.env.PORT 

//Adds json parsing middleware to incoming request
app.use(express.json());

//makes the app aware of routes in another folder
app.use('/notes', notesRouter)

//console.log that your server is up and running 
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));