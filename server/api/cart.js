const router = require('express').Router()
const {Order, Experience, Celebrity, OrderDetail} = require('../db/models')
const {isUser} = require('../../utils')
module.exports = router

//Get all orders on the cart for a logged in user and creates an order if there is none present.
router.get('/', isUser, async (req, res, next) => {
  try {
    const [cart, created] = await Order.findOrCreate({
      where: {
        userId: req.user.id,
        purchased: false
      },
      include: [{model: Experience, include: [{model: Celebrity}]}]
    })
    if (!created) {
      res.json(cart)
    } else {
      res.status(201).send(cart)
    }
  } catch (err) {
    next(err)
  }
})

// // create a new order the first time someone adds something to their cart
// router.post('/', isUser, async (req, res, next) => {
//   try {
//     const cart = await Order.create(req.body)
//     if (cart) {
//       res.status(201).json(cart)
//     }
//   } catch(err) {
//     next(err)
//   }
// })

// add a item to the cart
router.put('/:experienceId', isUser, async (req, res, next) => {
  try {
    const experienceId = req.params.experienceId
    const experience = await Experience.findByPk(experienceId)
    if (experience) {
      const cart = await Order.findOne({
        where: {
          userId: req.user.id,
          purchased: false
        },
        include: [{model: Experience, include: [{model: Celebrity}]}]
      })
      if (cart) {
        const updatedCart = cart.addExperience(experience)
        res.send(updatedCart)
      }
    }
  } catch (err) {
    next(err)
  }
})

// edit quantity of item in order

//delete an item from the cart
router.delete('/:experienceId', isUser, async (req, res, next) => {
  try {
    const experienceId = req.params.experienceId
    const cart = await Order.findOne({
      where: {
        userId: req.user.id,
        purchased: false
      },
      include: [{model: Experience, include: [{model: Celebrity}]}]
    })

    if (cart) {
      const experienceToRemove = await cart.experiences.find(experience => {
        return experience.id === experienceId
      })
    }
  } catch (error) {
    next(error)
  }
})
