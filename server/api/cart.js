const router = require('express').Router()
const {Order, Experience, Celebrity, OrderDetail} = require('../db/models')
const {isUser} = require('../../utils')
module.exports = router

//Get all orders on the cart for a user
router.get('/', isUser, async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        userId: req.user.id,
        purchased: false
      },
      include: [{model: Experience, include: [{model: Celebrity}]}]
    })
    if (cart) {
      res.json(cart)
    } else {
      res.status(404).send('Cart is empty!')
    }
  } catch (err) {
    next(err)
  }
})

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

//route to modify cart quanity
router.put('/:experienceId/edit', isUser, async (req, res, next) => {
  try {
    const itemToUpdate = await OrderDetail.findOne({
      where: {
        experienceId: req.params.experienceId
      }
    })
    const updatedItem = await itemToUpdate.update({
      packageQty: req.body.packageQty
    })
    res.json(updatedItem)
  } catch (error) {
    next(error)
  }
})
