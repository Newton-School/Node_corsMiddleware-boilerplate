const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

// Write the 3rd party CORS middleware to get the desired result

// GET endpointfor sending the result
app.get("/", function (req, res, next) {
  res.send(" Cors middleware working successfully");
});

module.exports = app;
