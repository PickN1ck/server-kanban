const mongoose = require('mongoose');

const { Schema } = mongoose;

const cardSchema = new Schema({
  title: String,
  status: String,
  description: String,
  priority: Number,
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
