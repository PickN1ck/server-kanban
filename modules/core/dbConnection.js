const mongoose = require('mongoose');
require('dotenv').config();

const connectionString = process.env.MONGO_CONNECTION_STRING;

async function dbConnection() {
  await mongoose
    .connect(connectionString)
    .then(() => console.log('Mongo connection OK'))
    .catch((err) => console.log(err));
}

module.exports = dbConnection;
