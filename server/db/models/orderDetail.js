const Sequelize = require('sequelize')
const db = require('../db')

const OrderDetail = db.define('orderDetail', {
  orderId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  experienceId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  packageQty: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1
    }
  }
})

module.exports = OrderDetail
