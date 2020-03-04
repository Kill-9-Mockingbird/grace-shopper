const router = require('express').Router()
const {User, Order, Experience} = require('../db/models')
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
        'username',
        'googleId',
        'phoneNumber',
        'streetAddress',
        'secondaryAddress',
        'county',
        'state',
        'zipCode',
        'country',
        'profilePicture',
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
router.post('/', async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      phoneNumber,
      streetAddress,
      secondaryAddress,
      county,
      state,
      zipCode,
      country,
      profilePicture,
      dateOfBirth,
      emergencyContactName,
      emergencyContactPhone
    } = req.body
    const newUser = {
      name,
      email
    }

    if (firstName) newUser.firstName = firstName
    if (lastName) newUser.lastName = lastName
    if (username) newUser.username = username
    if (email) newUser.email = email
    if (password) newUser.password = password
    if (phoneNumber) newUser.phoneNumber = phoneNumber
    if (streetAddress) newUser.streetAddress = streetAddress
    if (secondaryAddress) newUser.secondaryAddress = secondaryAddress
    if (county) newUser.county = county
    if (state) newUser.state = state
    if (zipCode) newUser.zipCode = zipCode
    if (country) newUser.country = country
    if (profilePicture) newUser.profilePicture = profilePicture
    if (dateOfBirth) newUser.dateOfBirth = dateOfBirth
    if (emergencyContactName)
      newUser.emergencyContactName = emergencyContactName
    if (emergencyContactPhone)
      newUser.emergencyContactPhone = emergencyContactPhone

    const createUser = await User.create(newUser)
    if (createUser) {
      res.status(201).send(createUser)
    } else {
      res.status(400).send('Unable to save to database')
    }
  } catch (err) {
    next(err)
  }
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
