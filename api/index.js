const serverless = require("serverless-http");
const app = require("../backend/server"); // import your Express app
module.exports = serverless(app);
