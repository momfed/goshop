var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('yaayyy u got me');
});

server.listen(3000, 'localhost');
console.log('listening to port 3000');