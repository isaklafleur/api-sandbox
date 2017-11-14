var express = require("express");
var router = express.Router();
var Country = require("../models/Country").Country;

router.get("/countries", (req, res) => {
  Country.find({}, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      const data = {
        countries: result
      };
      res.status(200).json(data);
    }
  });
});

router.get("/countries/:countryCode", (req, res) => {
  const cc = req.params.countryCode;
  Country.find({ code: cc }, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      const data = {
        countries: result
      };
      res.status(200).json(data);
    }
  });
});

module.exports = router;
