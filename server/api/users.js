const router = require('express').Router()
const {User, Order, OrderDetail} = require('../db/models')
const {isAdmin, isUser} = require('../../utils')
module.exports = router

// USER ROUTES
// route to return users basic info for an app user page
router.get('/', isUser, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['firstName', 'profilePictureUrlUrl', 'county', 'state']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
// ADMIN ROUTES
// admin route that can get all user information
router.get('/all', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: 'orders',
      OrderDetail
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//receive user information with orders
router.get('/:userId', isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      include: 'orders'
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

//admin: create user
router.post('/', isAdmin, async (req, res, next) => {
  User.create(req.body)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(next)
})

router.delete('/:userId', isAdmin, async (req, res, next) => {
  try {
    const id = req.params.userId
    const numAffectedRows = await User.destroy({
      where: {
        id: id
      }
    })
    if (numAffectedRows > 0) {
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})
