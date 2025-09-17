const serverless = require('serverless-http');
const app = require('../backend/server'); // adapt if your path is different
module.exports = serverless(app);
