var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("READ the readme.md file for route instructions!!!!!");
});

module.exports = router;
