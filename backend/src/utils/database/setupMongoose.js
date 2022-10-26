const mongoose = require('mongoose');
const BlueBird = require('bluebird');
const DB_URL = require('../../config/database/values').DB_URL;


mongoose.Promise = BlueBird;

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('DB Connection established Successfully');
});
connection.on('error', () => {
  console.log('Error occurred in DB connection');
});
