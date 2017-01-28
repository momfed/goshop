var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://shopdata:dafuq123@ds135669.mlab.com:35669/todo')

//Create a schema - this is like a blue print
var todoSchema = new mongoose.Schema({
	item: String
});

var Todo = mongoose.model('Todo', todoSchema);

//var data = [{item: 'slepp'}, {item: 'slepp more'}, {item: 'try to slepp'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

	app.get('/todo', function(req, res){
		//get data from mongodb and pass it to the view
		Todo.find({}, function(err, data){
			if (err) throw err;
		
		res.render('todo', {todos: data});
		})

	});

	app.post('/todo', urlencodedParser, function(req, res){
		//get data from the view & add it to mongodb
		var newTodo = Todo(req.body).save(function(err, data){
			if (err) throw err;
			res.json(data);
		})
	});

	app.delete('/todo/:item', function(req, res){
		//delete the requestet item from the mongodb
		Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
			if (err) throw err;
			res.json(data);
		});
	});

}