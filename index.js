const express = require('express');
const errorHandler = require('./modules/core/errorHandler');
const logger = require('./modules/core/logger');
const parseResponse = require('./modules/core/parseResponse');
const routes = require('./modules/core/Routes');
const dbConnection = require('./modules/core/dbConnection');

const cors = require('./modules/core/cors');
const corsDb = require('./modules/core/cors');

const app = express();
const PORT = process.env.PORT || 3000;

dbConnection();
logger(app);
parseResponse(app);
corsDb(app);
routes(app);

errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
