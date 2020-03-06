const router = require('express').Router()
const {User} = require('../db/models')
const {isAdmin} = require('../../utils')

// ADMIN ROUTES
// admin route that can get all user information
router.get('/users', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: 'orders'
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

module.exports = router
