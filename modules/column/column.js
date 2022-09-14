let columns = [
  {
    _id: '12afs312c1',
    title: 'todo',
    info: '',
    cards: [],
  },
  {
    _id: '12afs312c2',
    title: 'in progress',
    info: '',
    cards: [],
  },
  {
    _id: '12afs312c3',
    title: 'review',
    info: '',
    cards: [],
  },
  {
    _id: '12afs312c4',
    title: 'done',
    info: '',
    cards: [],
  },
];

function column(req, res) {
  let newColumn = req.body;
  columns.push(newColumn);
  res.json(columns);
}

module.exports = column;
