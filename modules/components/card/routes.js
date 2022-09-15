const Router = require('router');
const cardGetAll = require('./cardGetAll');
const cardDeleteById = require('./cardDeleteById');
const cardCreate = require('./cardCreate');
const cardUpdateById = require('./cardUpdateById');

const router = Router();

router.get('/', cardGetAll);
router.post('/', cardCreate);
router.delete('/:cardID', cardDeleteById);
router.patch('/:cardID', cardUpdateById);

// router.post('/', card);

module.exports = router;
