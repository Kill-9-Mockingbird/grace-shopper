const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    },
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('password')
    }
  },
  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt')
    }
  },
  googleId: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  phoneNumber: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: true
  },
  streetAddress: {
    type: Sequelize.STRING
  },
  secondaryAddress: {
    type: Sequelize.STRING
  },
  county: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  zipCode: {
    type: Sequelize.STRING
  },
  country: {
    type: Sequelize.STRING
  },

  profilePictureUrlUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://static1.squarespace.com/static/54b7b93ce4b0a3e130d5d232/54b7cd91e4b0b6572f771175/5a9924d20d92970572b7c3b6/1519986489468/icon.png?format=1500w',
    validate: {
      isUrl: true
    }
  },
  dateOfBirth: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  emergencyContactName: {
    type: Sequelize.STRING,
    allowNull: true
  },
  emergencyContactPhone: {
    type: Sequelize.STRING,
    allowNull: true
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
})

module.exports = User

/**
 * instanceMethods
 */
User.prototype.correctPassword = function(candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password()
}

/**
 * classMethods
 */
User.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

User.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password(), user.salt())
  }
}

User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)
User.beforeBulkCreate(users => {
  users.forEach(setSaltAndPassword)
})
