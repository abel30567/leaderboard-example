var express = require('express');
var ejs = require('ejs');
var ejsMate = require('ejs-mate')

var app = express();

app.use(express.static(__dirname + '/public'));
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

app.use(require("body-parser").urlencoded({extended: true}));

// 
app.get('/', function(req, res) {
   res.json("Go to other route");
});    
app.get('/:seed', function(req, res) {
    var seed = req.params.seed;
    res.render('index', {seed:seed});
 });    


var PORT = 3000;

app.listen(PORT, function(err) {
    if (err) {
        throw err;
    }
    console.log('Magic happens in port:' + PORT);
});