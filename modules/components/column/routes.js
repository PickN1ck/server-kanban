const Router = require('router');
const columnCreate = require('./columnCreate');
const columnGetAll = require('./columnGetAll');
const columnDeleteById = require('./columnDeleteById');

const router = Router();

router.get('/', columnGetAll);
router.post('/', columnCreate);
router.delete('/:columnID', columnDeleteById);

module.exports = router;
