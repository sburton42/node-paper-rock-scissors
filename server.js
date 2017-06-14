var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
	console.log("Got a request for /");

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<html><body><h1>Test</h1></body></html>")
	response.end();

});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

