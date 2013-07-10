var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    fs.readFile('index.html', function (err, data) {
if (err)
throw err;
if (data)
 console.log(data.toString('utf8'));
	response.send(data.toString('utf8'));
	});

    response.send('hello');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
