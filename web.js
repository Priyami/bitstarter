var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var content = string(fs.readFile("index.html"));
    //console.log("content from Index.html");
    response.send(JSON.parse(content));
    response.send('hello');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
