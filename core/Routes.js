const homeRouter = require('../modules/home/routes');
const columnRouter = require('../modules/column/routes');
const cardRouter = require('../modules/card/routes');

function routes(app) {
  app.use('/', homeRouter);
  app.use('/column', columnRouter);
  app.use('/card', cardRouter);
}

module.exports = routes;