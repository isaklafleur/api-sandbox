var express = require("express");
var axios = require("axios");
var router = express.Router();

const URL = "https://ih-crud-api.herokuapp.com/characters";

/* SHOW CREATE FORM */
router.get("/new", (req, res, next) => {
  res.render("characters/new");
});

router.post("/new", (req, res, next) => {
  const newCharacter = {
    name: req.body.name,
    occupation: req.body.occupation,
    weapon: req.body.weapon
  };
  axios
    .post(URL, newCharacter)
    .then(response => {
      console.log(response);
      res.redirect("/characters");
    })
    .catch(error => console.log(error));
});

/* GET ALL characters  */
router.get("/", (req, res, next) => {
  axios
    .get(URL)
    .then(response => {
      console.log(response);
      const data = {
        characters: response.data
      };
      res.render("characters/list", data);
    })
    .catch(error => console.log(error));
});

/* GET ONE character */
router.get("/:characterID", (req, res, next) => {
  const charID = req.params.characterID;
  axios
    .get(`${URL}/${charID}`)
    .then(response => {
      console.log(response);
      const data = {
        characters: response.data
      };
      res.render("characters/show", data);
    })
    .catch(error => console.log(error));
});

module.exports = router;
