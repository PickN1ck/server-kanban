const Router = require('router');
const column = require('./column');

const router = Router();

router.get('/', column);
router.post('/', column);

module.exports = router;
