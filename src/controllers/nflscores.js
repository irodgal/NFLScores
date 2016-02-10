var request = require('request'),
	parseString = require('xml2js').parseString;


// GET - Devuelve los resultados para una jornada de Regular Season
exports.getScores = function(req, res) {

	//metodo que devuelve la url a la que pedir los datos
	//dependera de si estamos en temporada regular o playoffs
	var getUrl = function() {
		var urlRegularSeason = {
				url: 'http://www.nfl.com/liveupdate/scorestrip/ss.xml',
				method: 'GET'
			},
			urlPostSeason = {
				url: 'http://www.nfl.com/liveupdate/scorestrip/postseason/ss.xml',
				method: 'GET'
			};

		//TODO: aqui ver el calculo de fechas

		//return urlRegularSeason;
		return urlPostSeason;
	}

	request(getUrl(), function(error, response, body) {

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

};