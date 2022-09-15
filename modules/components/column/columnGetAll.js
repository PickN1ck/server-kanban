const Column = require('./Model');

function columnGetAll(req, res) {
  Column.find()
    .exec()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Column get all error');
    });
}

module.exports = columnGetAll;
