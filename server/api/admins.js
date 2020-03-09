const router = require('express').Router()
const {User, Order, OrderDetail} = require('../db/models')
const {isAdmin} = require('../../utils')

// SARAH: Would recommend putting this into the users route with the isAdmin function incorporated

// ADMIN ROUTES
// admin route that can get all user information
router.get('/users', isAdmin, async (req, res, next) => {
  // query parameters
  // ?user=admin
  try {
    const users = await User.findAll({
      include: [{model: Order}]
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//admin: create user
router.post('/users', isAdmin, async (req, res, next) => {
  await User.create(req.body)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(next)
})

//receive user information with orders
router.get('/users/:userId', isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      include: 'orders' // stay consistent as you're coding
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.put('/users/:userId', isAdmin, async (req, res, next) => {
  try {
    const id = req.params.userId
    const user = await User.findByPk(id)
    if (user) {
      res.json(await user.update(req.body))
    } else {
      res.status(404).send('User Not Found!')
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/users/:userId', isAdmin, async (req, res, next) => {
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

module.exports = router
