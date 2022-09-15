const Column = require('./Model');

async function columnDeleteById(req, res) {
  const columnID = req.params.columnID;
  await Column.deleteOne({ _id: columnID })
    .then(() => res.status(200).json('Column deleted'))
    .catch((err) => {
      console.log(err);
      res.status(400).json('Error');
    });
  // res.json(columnID);
}

module.exports = columnDeleteById;
