//cargamos el package express y creamos nuestra app
var express = require('express');
var app = express();
var path = require('path');
var request = require('request');

//enviamos nuestro archivo index.html al usuario como página de inicio
app.get('/nflscores', function(req, res){

	var urlRegularSeason = {
		url: 'http://www.nfl.com/liveupdate/scorestrip/ss.xml',
		method  : 'GET'
	};

	var urlPostSeason = {
		url: 'http://www.nfl.com/liveupdate/scorestrip/postseason/ss.xml',
		method  : 'GET'
	};

	//var bosy2;
	request(urlRegularSeason, function (error, response, body) {

	    if (!error && response.statusCode == 200) {
	       //console.log(body);
	       // console.log("PEPE");
	       // console.log(res);
	        //bosy2 = body;
	        //res.json({"pepe":"pepe2"});
	        //res.write(JSON.stringify(body));
	        //res.sendFile(path.join(__dirname + '/index.html'));
	        //res.send(JSON.stringify(body));
	        res.setHeader('Content-Type', 'application/json');
	        res.send(body);
	    }
	});
	//console.log(bosy2);
	//res.json(bosy2);
	//res.sendFile(path.join(__dirname + '/index.html'));
});

//iniciamos el servidor
app.listen(11337);
console.log('Escuchando en el 11337');
