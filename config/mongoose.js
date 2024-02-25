const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/task');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"error in connectiong the mongodb"));

db.once('open',()=>{
    console.log("connected to the database");
});

module.exports = db;

