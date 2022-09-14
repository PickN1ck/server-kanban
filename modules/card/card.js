let cards = [
  {
    _id: 'ewrjkrewj1',
    status: 'todo',
    description: '',
    priority: 1,
  },
  {
    _id: 'ewrjkrewj2',
    title: 'in progress',
    description: '',
    priority: 4,
  },
  {
    _id: 'ewrjkrewj3',
    title: 'review',
    description: '',
    priority: 2,
  },
  {
    _id: 'ewrjkrewj4',
    title: 'done',
    description: '',
    priority: 1,
  },
];

function card(req, res) {
  let newCard = req.body;
  cards.push(newCard);
  res.json(cards);
}

module.exports = card;
