var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('The request made to: ' + req.url);
	if (req.url === '/home' || req.url === '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/home.html').pipe(res);
	} else if(req.url === '/contact'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	} else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/404.html').pipe(res);
	}
});

server.listen(3000, 'localhost');
console.log('listening to port 3000');