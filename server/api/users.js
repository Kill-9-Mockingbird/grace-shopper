const router = require('express').Router()
const {User, Order, OrderDetail} = require('../db/models')
const {isUser} = require('../../utils')
module.exports = router

// USER ROUTES
// route to return users basic info for an app user page
router.get('/', isUser, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['firstName', 'profilePictureUrl', 'county', 'state']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
