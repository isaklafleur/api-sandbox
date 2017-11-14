// More info here how to define a Schema -> http://mongoosejs.com/docs/guide.html
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// More info here -> http://mongoosejs.com/docs/schematypes.html
const countrySchema = new Schema({
  name: String,
  code: String
});

const Country = mongoose.model("Country", countrySchema);

module.exports = {
  Country: Country
};
