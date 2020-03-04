const mongoose = require("mongoose");
//taking databse path from config file
const url = require("../bin/config.json");
const dbPath = url.db_url;
//connecting mongoose
mongoose.connect(dbPath, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
//error if connection is lost
db.on("error", () => {
    console.log("> error occurred from the database");
});
//connection established successfully
db.once("open", () => {
    console.log(" successfully opened the database");
});

module.exports = mongoose;