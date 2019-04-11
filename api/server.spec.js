const request = require('supertest');
const server = require('./server');

// testing endpoints
// returns correct http status code

// GET HTTP STATUS CODE
describe('server.js', () => {
	describe('GET /', () => {
		it('should respond with 200OK', () => {
			return request(server)
				.get('/')
				.expect(200);
		});
	});

	it('should return JSON', () => {
		return request(server)
			.get('/')
			.expect('Content-Type', /json/i);
	});

	it('should  return { api: "up"}', () => {
		return request(server)
			.get('/')
			.then(res => {
				expect(res.body).toEqual({ api: 'up' });
			});
	});
});
