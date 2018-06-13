var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
Football = require('./model/Football.js');
mongoose.connect('mongodb://admin2:admin2@ds251240.mlab.com:51240/sports_compare'); 
var db = mongoose.connection;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/football/:name', function(req, res){
	Football.find({'name': req.params.name}).then(function(player){
		res.json(player);
	});

});

app.listen(3001);
console.log('Started on port 3001')