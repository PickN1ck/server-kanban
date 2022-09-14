const express = require('express');
const errorHandler = require('./core/errorHandler');
const logger = require('./core/logger');
const cors = require('./core/cors');
const parseResponse = require('./core/parseResponse');
const routes = require('./core/Routes');
const app = express();
const PORT = 3000;

logger(app);
parseResponse(app);
cors(app);
routes(app);

errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
