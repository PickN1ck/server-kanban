const Router = require('router');
const home = require('./home');

const router = Router();

router.get('/', home);

module.exports = router;
