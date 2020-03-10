const faker = require('faker')

let orderDetailSeed = []

for (let i = 0; i < 50; i++) {
  orderDetailSeed.push({
    orderId: faker.random.number({min: 1, max: 38}),
    experienceId: faker.random.number({min: 1, max: 27}),
    packageQty: faker.random.number({min: 1, max: 6})
  })
}

module.exports = orderDetailSeed
