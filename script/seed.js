'use strict'

const fs = require('fs')
const db = require('../server/db')
const path = require('path')
const {User, Celebrity, Experience, Order} = require('../server/db/models')
const celebritiesSeed = JSON.parse(
  fs.readFileSync(path.join(__dirname, '/celebritiesSeed.json'), 'utf8')
)
const userSeed = require('./userSeed.js')
const experienceSeed = require('./experienceSeed.js')
// const orderSeed = require("./orderSeed.js")

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await User.bulkCreate(userSeed)
  const celebrities = await Celebrity.bulkCreate(celebritiesSeed)
  const experiences = await Experience.bulkCreate(experienceSeed)
  // const orders = await Order.bulkCreate(orderSeed);

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${celebrities.length} celebrities`)
  console.log(`seeded ${experiences.length} experiences`)
  // console.log(`seeded ${orders.length} orders`)

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
