'use strict'

const fs = require('fs')
const db = require('../server/db')
const path = require('path')
const {
  User,
  Celebrity,
  Experience,
  Order,
  OrderDetail
} = require('../server/db/models')
const celebritiesSeed = JSON.parse(
  fs.readFileSync(path.join(__dirname, '/celebritiesSeed.json'), 'utf8')
)
const userSeed = require('./userSeed.js')
const experienceSeed = require('./experiencesSeed.js')
const orderSeed = require('./orderSeed.js')
const orderDetailSeed = require('./orderDetailSeed.js')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await User.bulkCreate(userSeed)
  const celebrities = await Celebrity.bulkCreate(celebritiesSeed)
  const experiences = await Experience.bulkCreate(experienceSeed)
  const orders = await Order.bulkCreate(orderSeed)

  let details = orderDetailSeed.map(order => {
    for (let i = 0; i < experiences.length; i++) {
      let currentExp = experiences[i]
      if (currentExp.dataValues.id === order.experienceId) {
        order.itemCost = currentExp.price
        break
      }
    }
    return order
  })

  const orderDetails = await OrderDetail.bulkCreate(details)

  for (let i = 0; i < orders.length; i++) {
    let currentOrder = orders[i]
    if (currentOrder.dataValues.purchased) {
      let total = 0
      for (let j = 0; j < orderDetails.length; j++) {
        let currentItem = orderDetails[j]
        if (currentItem.dataValues.orderId === currentOrder.dataValues.id) {
          total +=
            currentItem.dataValues.itemCost * currentItem.dataValues.packageQty
        }
      }
      await currentOrder.update({orderTotal: total})
    }
  }

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${celebrities.length} celebrities`)
  console.log(`seeded ${experiences.length} experiences`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded ${orderDetails.length} orderDetails`)

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
