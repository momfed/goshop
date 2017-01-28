var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	var readstream = fs.createReadStream(__dirname + '/home.html', 'utf8');
	readstream.pipe(res);
});

server.listen(3000, 'localhost');
console.log('listening to port 3000');