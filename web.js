var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var content;
app.get('/', function(request, response) {
    fs.readFile('index.html', function (err, data) {
if (err)
throw err;
if (data)
 console.log(data.toString('utf8'));
 content = data.toString('utf8');
	response.send(content);
	});
    //response.send(content);
    response.send('hello');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
