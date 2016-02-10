var express = require('express'),
	app = express(),
	methodOverride = require("method-override");

//Middleware
app.use(methodOverride());

//Import Controller
var NFLScoresCtrl = require('./controllers/nflscores');

//API Routes
var nflscores = express.Router();

nflscores.route('/nflscores').get(NFLScoresCtrl.getScores);

app.use('/', nflscores);

// captura del resto de peticiones no permitidas
nflscores.all('*', function(req, res) {
	res.writeHead(404, {
		"Content-Type": "text/html"
	});
	res.write('Petici&oacute;n no permitida (cambiar c&oacute;digo?)!!!\n');
	res.end();
});

app.listen(11337, function() {
	console.log('Escuchando en el 11337');
});