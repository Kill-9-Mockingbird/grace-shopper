const Sequelize = require('sequelize')
const db = require('../db')

const Experience = db.define('experience', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 100,
    validate: {
      min: 0,
      max: 100
    }
  },
  groupSize: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 6
    }
  },
  description: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true
    }
    // default experience image, isUrl
  },

  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },

  duration: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true
    }
  },
  price: {
    // integer instead of string and double and float and etc
    // getter in order to convert into dollars instead of pennies
    // or convert this in the frontend if you would like and divide by 100
    type: Sequelize.STRING
  }
})

module.exports = Experience
