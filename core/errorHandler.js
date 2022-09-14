function errorHandler(app) {
  app.use(apiNotFound);
}

function apiNotFound(req, res) {
  res.status(400).json('API not found');
}

module.exports = errorHandler;
