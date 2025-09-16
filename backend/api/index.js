const serverless = require("serverless-http");
const app = require("../backend/server"); // import your Express app

console.log("Serverless function loaded successfully");

module.exports = serverless(app);
