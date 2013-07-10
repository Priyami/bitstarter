var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    readIndexHtmlfile('index.html', function(err,indexContents){

	console.log(indexContents);
    }

  response.send('Hello');
});

function readIndexHtmlfile(pah,callback){
    try{
	var filename = require.resolve(path)
	fs.readfile(filename,'utf8',callback);

    }catch(e){
	callback(e);
    }

}



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

