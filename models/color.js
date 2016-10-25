var mongoose          = require('mongoose');

//Create the Schema
var colorSchema = new mongoose.Schema({
  name:       String,
  hexcode:    String,
  date:       {type: Date, default: Date.now} //defines the type as Date and will set the date at the time of creation
});

//export module model
module.exports = mongoose.model('Color', colorSchema);
