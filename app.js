var express               = require('express'),
    app                   = express(),
    Color                 = require('./models/color');
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
// INDEX show all campgrounds
app.get('/colors', function(req, res){
  //get all camps from db
  Color.find({}, function(err, colors){
    err ? console.log(err) : res.render('colors/index', {colors: colors});
  });
});

//Root
app.get('/', function(req, res){
  res.redirect('/colors');
});

//New
app.get('/colors/new', function (req, res) {
  res.render('colors/new');
});

//Create
app.post('/colors', function (req, res) {
  //crete newColor variable with sanitized inputs
  var name      = req.sanitize(req.body.name);
  var hexcode   = req.sanitize(req.body.hexcode);
  var newColor  = {name: name, hexcode: hexcode}
  Color.create(newColor, function (err, newCreatedColor) {
    err ? render('new') : res.redirect('/colors');
  });
});

//Show

//Edit

//Uptade

//Destroy

app.listen(3000, function () {
  console.log('server running Colours App');
});
