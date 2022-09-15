const Card = require('./Model');

async function cardUpdateById(req, res) {
  const cardID = req.params.cardID;
  await Card.findByIdAndUpdate({ _id: cardID }, req.body)
    .then(() => res.status(200).json('Card updated'))
    .catch((err) => {
      console.log(err);
      res.status(400).json('Card not found');
    });
}

module.exports = cardUpdateById;
