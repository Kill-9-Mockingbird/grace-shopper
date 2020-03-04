const router = require('express').Router()
const {User, Order, Experience} = require('../db/models')
const {isAdmin, isUser} = require('../../utils')
module.exports = router

//basic route to return all users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email'],
      include: 'orders'
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//admin route that can get all user information
router.get('/admin', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: [
        'id',
        'email',
        'firstName',
        'lastName',
        'password',
        'salt',
        'googleId',
        'phoneNumber',
        'streetAddress',
        'secondaryAddress',
        'county',
        'state',
        'zipCode',
        'country',
        'profilePictureUrl',
        'dateOfBirth',
        'emergencyContactName',
        'emergencyContactPhone',
        'isAdmin'
      ],
      include: 'orders'
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//logged in user to see all info (need to add validation)
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      include: 'orders'
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})
//create user

router.post('/', isAdmin, async (req, res, next) => {
  User.create(req.body)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(next)
})

router.delete('/:userId', async (req, res, next) => {
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
