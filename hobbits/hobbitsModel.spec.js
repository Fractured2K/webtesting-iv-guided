const db = require('../data/dbConfig');
const Hobbits = require('./hobbitsModel');

describe('hobbits model', () => {
	beforeEach(async () => {
		await db('hobbits').truncate();
	});

	describe('insert()', () => {
		it('should insert the provided hobbit', async () => {
			let hobbit = await Hobbits.insert({ name: 'gaffer' });
			expect(hobbit.name).toBe('gaffer');

			hobbit = await Hobbits.insert({ name: 'gaffer2' });
			expect(hobbit.name).toBe('gaffer2');
		});
	});
});
