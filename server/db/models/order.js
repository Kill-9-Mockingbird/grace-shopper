const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  // neither of these are necessary when you're making your associations
  userId: {
    type: Sequelize.INTEGER
  },
  experienceId: {
    type: Sequelize.INTEGER
  },
  packageQty: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  },
  // storing some historical value of your price at the time of purchase
  purchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Order
