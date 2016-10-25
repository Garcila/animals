var mongoose        = require('mongoose');
var Color           = require('./models/color');
var data            = require('./public/colours.js')

function seedDB() {
  //Remove all the colors in the db
  Color.remove({}, function(err){
    if(err){
      console.log(err)
    } else {

    }
    console.log('removed all colors');
    //add colors
    var i=1;
    data.forEach(function(seed){
      Color.create(seed, function (err, data) {
        (err) ? console.log(err) : console.log('added color number: ' + i);
        i++;
      });
    });
  });
}

module.exports = seedDB;
