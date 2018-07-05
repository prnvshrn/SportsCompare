var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
Football = require('./model/Football.js');
baseball = require('./model/Baseball.js');
mongoose.connect('mongodb://admin2:admin2@ds251240.mlab.com:51240/sports_compare'); 
var db = mongoose.connection;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var graphqlHTTP = require('express-graphql');
var graphql_schema = require('./graphql_schema.js');
var path = require('path');

app.get('/football/:name', function(req, res){
	Football.find({'name': req.params.name}).then(function(player){
		res.json(player);
	});
});

app.get('/baseball/:name', function(req, res){
  Baseball.find({'name': req.params.name}).then(function(player){
    res.json(player);
  });
});

app.use('/graphql', graphqlHTTP({
    schema: graphql_schema,
    debug: true,
    graphiql: true
})
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);
console.log('Started on port 3001')