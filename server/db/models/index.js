const User = require('./user')
const Experience = require('./experience')
const Celebrity = require('./celebrity')
const Order = require('./order')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

User.belongsToMany(Experience, {
  as: 'orders',
  through: Order
})

Experience.belongsToMany(User, {
  as: 'orders',
  through: Order
})

Celebrity.hasMany(Experience)
Experience.belongsTo(Celebrity, {as: 'celebrity'})
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Experience,
  Celebrity,
  Order
}
