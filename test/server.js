var expect = require("chai").expect;
//var request = require("request");
var request = require("supertest");

// This agent refers to PORT where program is runninng.
//var server = supertest.agent("http://localhost:11337");

describe("NFLScores", function() {
	var server;
	before(function() {
		server = require('../src/server');
	});

	after(function() {
		server.close();
	});

	describe("Conexión al servidor", function() {

		it("returns status 200", function(done) {
			request(server)
				.get("/NFLScores")
				.expect("Content-type", /json/)
				.expect(200)
				.end(function(err, res) {
					expect(res.status).to.equal(200);
					done();
				});
		});

		it("returns json", function(done) {
			request(server)
				.get("/NFLScores")
				.expect("Content-type", /json/)
				.expect(200)
				.end(function(err, res) {
					expect(res.body).to.exist;
					done();
				});
		});

		it("returns json have property 'ss'", function(done) {
			request(server)
				.get("/NFLScores")
				.expect("Content-type", /json/)
				.expect(200)
				.end(function(err, res) {
					expect(res.body).to.have.property('ss');
					done();
				});
		});
	});

	describe("Petición no permitida", function() {

		it("GET - returns status 404", function(done) {
			request(server)
				.get("/random")
				.expect(404)
				.end(function(err, res) {
					expect(res.status).to.equal(404);
					done();
				});
		})

		it("POST - returns status 404", function(done) {
			request(server)
				.post("/NFLScores")
				.expect(404)
				.end(function(err, res) {
					expect(res.status).to.equal(404);
					done();
				});
		})

	});
})