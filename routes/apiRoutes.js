var express = require("express");
var router = express.Router();
var Country = require("../models/Country").Country;

router.get("/", function(req, res, next) {
  Country.find({}, (err, result) => {
    if (err) {
      next(err);
    } else {
      const data = {
        countries: result
      };
      res.json(data);
    }
  });
});

module.exports = router;
