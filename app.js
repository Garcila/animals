var express               = require('express'),
    app                   = express(),
    moment                = require('moment'),
    seedDB                = require('./seeds'),
    mongoose              = require('mongoose'),
    bodyParser            = require('body-parser'),
    methodOverride        = require('method-override'),
    expressSanitizer      = require('express-sanitizer');

//=========================app Config
// seedDB();
mongoose.connect('mongodb://localhost/colors_app'); //create if not already db called colours_app and connect to mongodb
app.set('view engine', 'ejs'); //set template engine to be ejs
app.use(express.static('public')); //deliver static content (css, html, js...) to express from public directory
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());  //always after bodyParser
app.use(methodOverride('_method')); //allows the use of PUT and DELETE instead of POST in the RESTFUL route.  It does so under _method

//=========================Restful routes

//Index

//Root

//New

//Create

//Show

//Edit

//Uptade

//Destroy

app.listen(3000, function () {
  console.log('server running Colours App');
});
