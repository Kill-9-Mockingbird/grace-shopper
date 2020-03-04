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
    } // default this as well
  },
  imageUrl: {
    // same validations as that in experience
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Celebrity
