const mongoose = require('mongoose');

const { Schema } = mongoose;

const columnSchema = new Schema({
  title: String,
  status: String,
  cards: Array,
});

const Column = mongoose.model('Column', columnSchema);

module.exports = Column;
