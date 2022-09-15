const Column = require('./Model');

function columnCreate(req, res) {
  const newColumn = new Column({
    title: req.body.title,
    status: req.body.status,
    cards: req.body.cards,
  });

  newColumn
    .save()
    .then(() => res.status(200).json('Column created'))
    .catch(() => res.status(400).json('Column not created'));
}

module.exports = columnCreate;
