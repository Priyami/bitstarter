var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var htmlfile = "index.html";
app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
    response.write("hello");
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

/*var http = require('http');
var fs = require('fs');
var htmlfile ="index.html";
http.createServer(function (req, res) {
  var html = fs.readFileSync(htmlfile).toString();
  res.end(html);
}).listen(8080,'localhost');
console.log('Server running at http://localhost:8080/');
*/