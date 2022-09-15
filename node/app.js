const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var routes = require('./routes.js');

const app = express();
app.use(cors());
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
app.use(bodyParser.json());
app.use('/api', routes);

module.exports = app;
