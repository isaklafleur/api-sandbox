var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.send("READ the readme.md file for route instructions!!!!!");
});

module.exports = router;
