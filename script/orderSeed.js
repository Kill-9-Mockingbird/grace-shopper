const faker = require('faker')

let orderSeed = []

for (let i = 0; i < 400; i++) {
  orderSeed.push({
    userId: faker.random.number({min: 1, max: 200}),
    experienceId: faker.random.number({min: 1, max: 27}),
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  })
}

module.exports = orderSeed
