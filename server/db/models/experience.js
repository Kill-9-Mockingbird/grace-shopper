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
  },

  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },

  duration: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.STRING
  }
})

module.exports = Experience
