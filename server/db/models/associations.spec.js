const {expect} = require('chai')
const db = require('../db')

const User = require('./user')
const Experience = require('./experience')
const Celebrity = require('./celebrity')
const Order = require('./order')

describe('User >-< Order Association', () => {
  before(() => db.sync({force: true}))
  afterEach(() => db.sync({force: true}))

  describe('Sequelize Models', () => {
    it('a user may have many orders', async () => {
      const beyonce = await User.create({
        firstName: 'Beyonce',
        lastName: 'Knowles',
        email: 'dayumbeyonce@jayz.com'
      })
      const firstOrder = await Order.create({purchased: false})
      const secondOrder = await Order.create({purchased: true})
      await beyonce.addOrders([firstOrder, secondOrder])
      const allOrders = await beyonce.getOrders().map(order => order.purchased)
      expect(allOrders).to.deep.equal([false, true])
    })
  })
})

describe('Order >-< Experience Association', () => {
  before(() => db.sync({force: true}))
  afterEach(() => db.sync({force: true}))

  describe('Sequelize Models', () => {
    it('an order may belong to many experiences', async () => {
      const order = await Order.create({
        purchased: false
      })
      const firstExperience = await Experience.create({
        name: 'Snorkeling in Bali'
      })
      const secondExperience = await Experience.create({
        name: 'Snorkeling in Maldives'
      })
      await order.addExperiences([firstExperience, secondExperience])
      const allExperiences = await order
        .getExperiences()
        .map(experience => experience.name)
      expect(allExperiences).to.deep.equal([
        'Snorkeling in Bali',
        'Snorkeling in Maldives'
      ])
    })
  })
})

describe('Celebrity >-< Experience Association', () => {
  before(() => db.sync({force: true}))
  afterEach(() => db.sync({force: true}))

  describe('Sequelize Models', () => {
    it('a celebrity may have/offer many experiences', async () => {
      const celebrity = await Celebrity.create({
        name: 'Beyonce Knowles'
      })
      const firstExperience = await Experience.create({
        name: 'Kayaking in Bali'
      })
      const secondExperience = await Experience.create({
        name: 'Kayaking in Maldives'
      })
      await celebrity.addExperiences([firstExperience, secondExperience])
      const allExperiences = await celebrity
        .getExperiences()
        .map(experience => experience.name)
      expect(allExperiences).to.deep.equal([
        'Kayaking in Bali',
        'Kayaking in Maldives'
      ])
    })

    it('an experience belongs to a celebrity', async () => {
      const celebrity = await Celebrity.create({
        name: 'Beyonce Knowles'
      })
      const experience = await Experience.create({
        name: 'Kayaking in Bali'
      })
      await experience.setCelebrity(celebrity)

      const getCelebrity = await experience.getCelebrity()
      expect(getCelebrity.name).to.deep.equal('Beyonce Knowles')
    })
  })
})
