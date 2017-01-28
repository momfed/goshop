var express = require('express');
var app = express();
var todoC = require('./controllers/todocontroller');

//set up template settings

app.set('view engine', 'ejs');

//set up static files

app.use(express.static('./public'));

//fire controller

todoC(app);

//listen to a port

app.listen(3000);
console.log('listening to port 3000');




















/*
app.get('/', function(req, res){
	res.render('home', {qs: req.query});
});

app.post('/', parse, function(req, res){
	res.render('success', {data: req.body});
});

app.get('/contact', function(req, res){
	res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res){
	var data = {age: 17, job: 'developer', hobbies: ['eating', 'slepping', 'coding']};
	res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);

console.log("listening to port 3000");




















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
console.log('listening to port 3000');*/