const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('Admin routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('All Admin routes', () => {
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
        isAdmin: false
      })
    })

    it('GET /api/admin/:userId', async () => {
      const authenticatedUser = request.agent(app)
      await authenticatedUser
        .post('/auth/login')
        .send({email: 'cody@puppybook.com', password: '1246'})
        .expect(200)

      const res = await authenticatedUser.get('/api/admin/1').expect(404)
      expect(res.body).to.be.an('object')
      expect(Object.keys(res.body).length).to.be.equal(0)
    })
    // end get one user ('/api/admin/:userId')
    it('GET /api/admin/users', async () => {
      const authenticatedUser = request.agent(app)
      await authenticatedUser
        .post('/auth/login')
        .send({email: 'cody@puppybook.com', password: '1246'})
        .expect(200)

      const res = await authenticatedUser.get('/api/admin/users').expect(401)
      expect(res.body).to.be.an('object')
      expect(Object.keys(res.body).length).to.be.equal(0)
    })
    //end get all users ('/api/admin/users')
    it('POST /api/admin', async () => {
      const authenticatedUser = request.agent(app)
      await authenticatedUser
        .post('/auth/login')
        .send({email: 'cody@puppybook.com', password: '1246'})
        .expect(200)

      const res = await authenticatedUser.post('/api/admin').expect(404)
      expect(res.body).to.be.an('object')
      expect(Object.keys(res.body).length).to.be.equal(0)
    })
    //end post a user ('/api/admin')
    it('DELETE /api/admin/:userId', async () => {
      const authenticatedUser = request.agent(app)
      await authenticatedUser
        .post('/auth/login')
        .send({email: 'cody@puppybook.com', password: '1246'})
        .expect(200)

      const res = await authenticatedUser.delete('/api/admin/1').expect(404)
      expect(res.body).to.be.an('object')
      expect(Object.keys(res.body).length).to.be.equal(0)
    })
    //end delete a user('/api/admin/:userId')
  })
}) // end describe('Admin routes')
