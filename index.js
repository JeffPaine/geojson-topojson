var express = require('express');
var topojson = require('topojson');

var app = express();

// Enable the processing of POST bodys
app.use(express.bodyParser());
// Log web activity
app.use(express.logger());

// Serve index.html on GET
app.get('/', function(req, res) {
  res.sendfile('index.html');
});

// Convert GeoJSON to TopoJSON on POST
app.post('/', function(req, res) {
  var geojson = req.body;
  var convertedToTopojson = topojson.topology(geojson);
  res.json(convertedToTopojson);
});

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
