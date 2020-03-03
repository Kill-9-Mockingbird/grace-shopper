const faker = require('faker')

let orderSeed = [
  {
    userId: 1,
    experienceId: 3,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 1,
    experienceId: 5,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 3,
    experienceId: 26,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 3,
    experienceId: 14,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 2,
    experienceId: 9,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 4,
    experienceId: 10,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 5,
    experienceId: 18,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 6,
    experienceId: 21,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 7,
    experienceId: 11,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 8,
    experienceId: 26,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 9,
    experienceId: 25,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 10,
    experienceId: 4,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 11,
    experienceId: 20,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 19,
    experienceId: 19,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 12,
    experienceId: 25,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 14,
    experienceId: 15,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 15,
    experienceId: 14,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 16,
    experienceId: 22,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 17,
    experienceId: 2,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 18,
    experienceId: 3,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 8,
    experienceId: 5,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 29,
    experienceId: 26,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 38,
    experienceId: 14,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 21,
    experienceId: 9,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 43,
    experienceId: 10,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 47,
    experienceId: 18,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 34,
    experienceId: 21,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 23,
    experienceId: 11,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 25,
    experienceId: 26,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 29,
    experienceId: 25,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 37,
    experienceId: 4,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 41,
    experienceId: 20,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 42,
    experienceId: 19,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 37,
    experienceId: 25,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 50,
    experienceId: 15,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 30,
    experienceId: 14,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 44,
    experienceId: 22,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  },
  {
    userId: 43,
    experienceId: 2,
    packageQty: faker.random.number({min: 1, max: 6}),
    purchased: faker.random.boolean()
  }
]

module.exports = orderSeed
