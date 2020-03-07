const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')

describe('Order Model', () => {
  let order
  before(() => db.sync({force: true}))
  beforeEach(() => {
    order = {
      purchased: false
    }
  })
  afterEach(() => db.sync({force: true}))

  it('has a field for order purchase status', async () => {
    order.notARealAttribute = 'xxx'
    const savedOrder = await Order.create(order)
    expect(savedOrder.purchased).to.equal(false)
    expect(savedOrder.notARealAttribute).to.equal(undefined)
  })

  it('purchased status default value is false', async () => {
    delete order.fuelLevel
    const defaultStatusForPurchased = await Order.create(order)
    expect(defaultStatusForPurchased.purchased).to.equal(false)
  })
})
