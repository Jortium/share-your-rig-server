const app = require('../app');

describe('App', () => {
  it('GET / responds with 200 containing "Hello, world!"', () => supertest(app).get('/').expect(200, 'Hello, boilerplate!'));
});
