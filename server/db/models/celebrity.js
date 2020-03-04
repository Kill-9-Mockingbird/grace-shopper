const Sequelize = require('sequelize')
const db = require('../db')

const Celebrity = db.define('celebrity', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true
    }
  },
  link: {
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
  }
})

module.exports = Celebrity
