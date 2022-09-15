const homeRouter = require('../components/home/routes');
const columnRouter = require('../components/column/routes');
const cardRouter = require('../components/card/routes');

function routes(app) {
  app.use('/', homeRouter);
  app.use('/card', cardRouter);
  app.use('/column', columnRouter);
}

module.exports = routes;
