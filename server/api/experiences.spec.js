const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Experience = db.model('experience')

describe('Experience routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/experiences/', () => {
    const name = 'Kayaking in Florida'

    beforeEach(() => {
      return Experience.create({
        name: name,
        inventory: '100',
        groupSize: '2',
        description: 'In the Florida Keys, you can kayak everywhere!',
        imageUrl:
          'https://kokatat.com/images/550marquees/B_florida_keys-1-19.jpg',
        city: 'Key West',
        state: 'Florida',
        duration: '4',
        price: '40000'
      })
    })

    it('GET /api/experiences', async () => {
      const res = await request(app)
        .get('/api/experiences')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(name)
    })
  }) // end describe('/api/experiences')

  describe('/api/experiences/:experienceId', () => {
    const name = 'Kayaking in Florida'

    beforeEach(() => {
      return Experience.create({
        name: name,
        inventory: '100',
        groupSize: '2',
        description: 'In the Florida Keys, you can kayak everywhere!',
        imageUrl:
          'https://kokatat.com/images/550marquees/B_florida_keys-1-19.jpg',
        city: 'Key West',
        state: 'Florida',
        duration: '4',
        price: '40000'
      })
    })

    it('GET /api/experiences/:experienceId', async () => {
      const res = await request(app)
        .get('/api/experiences/1')
        .expect(200)
      expect(res.body).to.be.an('object')
      expect(res.body.name).to.be.equal(name)
    })
  }) // end describe('/api/experiences/:experienceId')
}) // end describe('Experience routes')
