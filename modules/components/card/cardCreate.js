const Card = require('./Model');

function cardCreate(req, res) {
  const newCard = new Card({
    title: req.body.title,
    status: req.body.status,
    description: req.body.description,
    priority: req.body.priority,
  });

  newCard
    .save()
    .then(() => res.status(200).json('Card created'))
    .catch(() => res.status(400).json('Card not created'));
}

module.exports = cardCreate;
