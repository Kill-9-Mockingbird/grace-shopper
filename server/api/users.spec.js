/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    const firstName = 'Cody'

    beforeEach(() => {
      return User.create({
        firstName: firstName,
        lastName: 'Fullstack',
        email: 'cody@puppybook.com',
        password: '1246',
        phoneNumber: '8189092819',
        streetAddress: '453 west 36th street',
        county: 'New York',
        state: 'NY',
        zipCode: 10014,
        country: 'United States of America',
        emergencyContactName: 'Joe',
        emergencyContactPhone: '8189482748',
        isAdmin: true
      })
    })

    it('GET /api/users', async () => {
      const authenticatedUser = request.agent(app)
      await authenticatedUser
        .post('/auth/login')
        .send({email: 'cody@puppybook.com', password: '1246'})
        .expect(200)

      const res = await authenticatedUser.get('/api/users').expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].firstName).to.be.equal(firstName)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
