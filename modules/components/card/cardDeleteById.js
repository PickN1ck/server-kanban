const Card = require('./Model');

async function cardDeleteById(req, res) {
  const cardID = req.params.cardID;
  await Card.deleteOne({ _id: cardID })
    .then(() => res.status(200).json('Card deleted'))
    .catch((err) => {
      console.log(err);
      res.status(400).json('Error');
    });
}

module.exports = cardDeleteById;
