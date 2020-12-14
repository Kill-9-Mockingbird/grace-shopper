const router = require('express').Router()
const {User, Order, Experience} = require('../db/models')
const {isUser, isAdmin} = require('../../utils')
module.exports = router

// USER ROUTES
// route to return users basic info for an app user page
router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['firstName', 'profilePictureUrl', 'county', 'state']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/orders', isAdmin, async (req, res, next) => {
  try {
    const user = await User.findAll({
      include: {
        model: Order,
        include: {
          model: Experience
        }
      }
    })
    res.status(201).send(user)
  } catch (err) {
    next(err)
  }
})

router.get('/orders/:userId', isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      include: {
        model: Order,
        include: {
          model: Experience
        }
      }
    })
    res.status(201).send(user)
  } catch (err) {
    next(err)
  }
})
