var expect = require("chai").expect;
var request = require("request");

describe("NFLScores", function() {
	describe("Conexión al servidor", function() {

		var url = "http://localhost:11337/NFLScores";

		it("returns status 200", function(done) {
			request(url, function(error, response, body) {
				expect(response.statusCode).to.equal(200);
				done();
			});
		});

		it("returns json", function(done) {
			request(url, function(error, response, body) {
				expect(body).to.exist;
				expect(JSON.parse(body)).to.exist;
				done();
			});
		});

		it("returns json have property 'ss'", function(done) {
			request(url, function(error, response, body) {
				expect(JSON.parse(body)).to.have.property('ss');
				done();
			});
		});
	});

	describe("Petición no permitida", function() {

		var urlGet = {
			url: 'http://localhost:11337/XXX',
			method: 'GET'
		},
		urlPost = {
			url: 'http://localhost:11337/NFLScores',
			method: 'POST'
		};

		it("GET - returns status 404", function(done) {
			request(urlGet, function(error, response, body) {
				expect(response.statusCode).to.equal(404);
				done();
			});
		});

		it("POST - returns status 404", function(done) {
			request(urlPost, function(error, response, body) {
				expect(response.statusCode).to.equal(404);
				done();
			});
		});

	});
})