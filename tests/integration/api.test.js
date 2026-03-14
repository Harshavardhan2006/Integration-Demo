const request = require('supertest');
const app = require('../../server');

describe('GET /sum', () => {
    it('should return the sum of a and b', async () => {
        const res = await request(app).get('/sum?a=5&b=10');
        expect (res.body.result).toBe(15);
    });
});