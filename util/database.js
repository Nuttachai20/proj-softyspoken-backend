//Import the mongoose module
const mongoose = require('mongoose');
const user = require('../Model/userModel')


//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/softyspoken';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });


//Get the default connection
const db = mongoose.connection;

db.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


exports.module = db