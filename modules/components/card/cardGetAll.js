const Card = require('./Model');

function cardGetAll(req, res) {
  Card.find()
    .exec()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Card get all error');
    });
}

module.exports = cardGetAll;
