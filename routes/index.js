var express = require("express");
var router = express.Router();

const URLJSON = "https://jsonplaceholder.typicode.com/posts";

/* GET home page. */
router.get("/", function(req, res, next) {
  fetch(URLJSON)
    .then(response => {
      console.log(response);
      const data = {
        posts: response
      };
      res.render("index", data);
    })
    .catch(error => console.log(error));
});

module.exports = router;
