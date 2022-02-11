const mongoose = require("mongoose");
const config = require("../config");

function connect() {
  mongoose
    .connect(config.MDB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
}

module.exports = connect;
