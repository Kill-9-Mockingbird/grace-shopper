const {expect} = require('chai')
const db = require('../index')
const Experience = db.model('experience')

describe('Experience Model', () => {
  let experience
  before(() => db.sync({force: true}))
  beforeEach(() => {
    experience = {
      name: 'Kayaking in Florida',
      inventory: 100,
      groupSize: 6,
      description: 'Kayaking everywhere in Florida!',
      imageUrl:
        'https://kokatat.com/images/550marquees/B_florida_keys-1-19.jpg',
      city: 'Key West',
      state: 'Florida',
      duration: 1,
      price: 10000
    }
  })
  afterEach(() => db.sync({force: true}))

  it('has a field for name, inventory, groupSize, description, imageUrl, city, state, duration, price', async () => {
    experience.notARealAttribute = 'xxx'
    const savedExperience = await Experience.create(experience)
    expect(savedExperience.name).to.equal('Kayaking in Florida')
    expect(savedExperience.inventory).to.equal(100)
    expect(savedExperience.groupSize).to.equal(6)
    expect(savedExperience.description).to.equal(
      'Kayaking everywhere in Florida!'
    )
    expect(savedExperience.imageUrl).to.equal(
      'https://kokatat.com/images/550marquees/B_florida_keys-1-19.jpg'
    )
    expect(savedExperience.city).to.equal('Key West')
    expect(savedExperience.state).to.equal('Florida')
    expect(savedExperience.duration).to.equal(1)
    expect(savedExperience.price).to.equal(10000)
    expect(savedExperience.notARealAttribute).to.equal(undefined)
  })

  it('has a default value for imageUrl', async () => {
    delete experience.imageUrl
    const createdExperience = await Experience.create(experience)
    expect(createdExperience.imageUrl).to.equal(
      'https://www.traveldailymedia.com/assets/2019/09/St-Lucia.jpg'
    )
  })
})
