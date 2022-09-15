const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var routes = require('./routes.js');

const app = express();
app.use(cors());
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
app.use(bodyParser.json());
app.use('', routes);

module.exports = app;
