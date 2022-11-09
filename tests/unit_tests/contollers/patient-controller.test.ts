import PatientController from './../../../src/controllers/api1/patient-controller';
describe("Patient Controller", () => {
    test("initialized routes", () => {
        const controller = new PatientController();
        const response = controller.initializedRoutes();
        expect(response).toBeUndefined();
    });
      
})

/* const request = require('supertest')
const app = require('../server')
describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send({
        userId: 1,
        title: 'test is cool',
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  })
})
 */