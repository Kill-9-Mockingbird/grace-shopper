const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
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
  purchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Order
