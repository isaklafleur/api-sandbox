var express = require("express");
var router = express.Router();
var Country = require("../models/Country").Country;

router.get("/", (req, res) => {
  Country.find({}, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      const data = {
        countries: result
      };
      res.json(data);
    }
  });
});

module.exports = router;
