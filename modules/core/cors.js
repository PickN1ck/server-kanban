// function cors(app) {
//   app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Control-Type, Accept, Authorization',
//     );
//     if (req.method === 'OPTIONS') {
//       res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//       return res.status(200).json({});
//     }
//     next();
//   });
// }
//
// module.exports = cors;
const cors = require('cors');

const corsModule = (app) => {
  app.use(
    cors({
      origin: process.env.CLIENT_HOST,
      credentials: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
    }),
  );
};

module.exports = corsModule;
