const faker = require('faker')
faker.seed(123)
const userSeed = []

for (let i = 0; i < 50; i++) {
  userSeed.push({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phoneNumber: faker.phone.phoneNumber(),
    streetAddress: faker.address.streetAddress(),
    secondaryAddress: faker.address.secondaryAddress(),
    county: faker.address.county(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode('#####'),
    country: faker.address.country(),
    profilePicture: faker.image.avatar(),
    dateOfBirth: faker.date.between('1945-01-01', '1999-12-31'),
    emergencyContactName: faker.name.findName(),
    emergencyContactPhone: faker.phone.phoneNumber(),
    isAdmin: faker.random.boolean()
  })
}

module.exports = userSeed
