const homeRouter = require('../modules/home/routes');
const columnRouter = require('../modules/column/routes');

function routes(app) {
  app.use('/', homeRouter);
  app.use('/column', columnRouter);
}

module.exports = routes;