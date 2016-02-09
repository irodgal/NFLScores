//cargamos el package express y creamos nuestra app
var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var parseString = require('xml2js').parseString;

//enviamos nuestro archivo index.html al usuario como página de inicio
app.get('/nflscores', function(req, res) {

	var urlRegularSeason = {
		url: 'http://www.nfl.com/liveupdate/scorestrip/ss.xml',
		method: 'GET'
	};

	var urlPostSeason = {
		url: 'http://www.nfl.com/liveupdate/scorestrip/postseason/ss.xml',
		method: 'GET'
	};

	//var bosy2;
	request(urlRegularSeason, function(error, response, body) {

		if (!error && response.statusCode == 200) {
			res.setHeader('Content-Type', 'application/json');

			//en body tenemos el xml desde nfl.com
			var objToResponse;

			parseString(body, function(err, result) {
				objToResponse = result;
			});

			res.send(JSON.stringify(objToResponse));
		}
	});
});

//iniciamos el servidor
app.listen(11337);
console.log('Escuchando en el 11337');