const Router = require('router');
const card = require('./card');

const router = Router();

router.get('/', card);
router.post('/', card);

module.exports = router;
