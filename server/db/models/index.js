const User = require('./user')
const Experience = require('./experience')
const Celebrity = require('./celebrity')
const Order = require('./order')
const OrderDetail = require('./orderDetail')

User.hasMany(Order)

Order.belongsToMany(Experience, {
  through: OrderDetail
})

Celebrity.hasMany(Experience)
Experience.belongsTo(Celebrity)

module.exports = {
  User,
  Experience,
  Celebrity,
  Order,
  OrderDetail
}
