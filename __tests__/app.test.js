const request = require('supertest');
const app = require('../index');

describe('GET /api/hello', () => {
  it('responds with JSON message', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Hello from CI/CD demo!');
  });
});
