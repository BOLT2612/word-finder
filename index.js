// index.js
// server for word-finder

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send("Hello word-finder World!");
  console.log("processed GET request");
});

app.listen('3000', function() {
  console.log("word-finder SERVER ready for your request");
});