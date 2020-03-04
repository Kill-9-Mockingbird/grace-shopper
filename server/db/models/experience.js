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
    defaultValue:
      'https://www.traveldailymedia.com/assets/2019/09/St-Lucia.jpg',
    validate: {
      notEmpty: true,
      isUrl: true
    }
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
    type: Sequelize.INTEGER
  }
})

module.exports = Experience
