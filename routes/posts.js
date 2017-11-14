var express = require("express");
var axios = require("axios");
var router = express.Router();

const URLJSON = "https://jsonplaceholder.typicode.com/posts";

/* GET home page. */
router.get("/", function(req, res, next) {
  axios
    .get(URLJSON)
    .then(response => {
      console.log("response: ", response);
      const data = {
        posts: response.data
      };
      res.render("posts", data);
    })
    .catch(error => console.log(error));
});

router.get("/:postID", function(req, res, next) {
  const postID = req.params.postID;
  axios
    .get(`${URLJSON}/${postID}`)
    .then(response => {
      console.log("response: ", response);
      const data = {
        post: response.data
      };
      res.render("post", data);
    })
    .catch(error => console.log(error));
});

module.exports = router;
