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
      return res.json(cart)
    } else {
      return res.status(201).json(cart)
    }
  } catch (err) {
    next(err)
  }
})
// talk about restfulness of checkout
//route to checkout cart
// /api/cart/checkout
// making another put request to my cart
// one put route, where we can establish some extra middleware functions that will do a couple of things
// we can have a function specifically to increment/decrement
// we can have a function to checkout
// a function to add/remove
// incrementOrDecrement, addRemove, checkout
router.put('/checkout', isUser, async (req, res, next) => {
  try {
    const orderToCheckout = await Order.findOne({
      where: {
        userId: req.user.id,
        purchased: false
      }
    })
    const updateOrder = await orderToCheckout.update({
      purchased: true
    })
    res.send(updateOrder)
  } catch (error) {
    next(error)
  }
})

// SARAH: feels like cart/:cartId
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
        await cart.addExperience(experience)
        const updatedCart = await Order.findOne({
          where: {
            userId: req.user.id,
            purchased: false
          },
          include: [{model: Experience, include: [{model: Celebrity}]}]
        })
        return res.status(200).json(updatedCart)
      }
    } else {
      return res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

//delete an item from the cart
router.delete('/:experienceId', isUser, async (req, res, next) => {
  try {
    // if this is all here, maybe you want to put all of this into a separate function
    const experienceId = req.params.experienceId
    const cart = await Order.findOne({
      where: {
        userId: req.user.id,
        purchased: false
      },
      include: [{model: Experience, include: [{model: Celebrity}]}]
    })

    if (cart) {
      const experienceToRemove = await Experience.findByPk(experienceId)

      if (experienceToRemove) {
        await cart.removeExperience(experienceToRemove)
        const updatedCart = await Order.findOne({
          where: {
            userId: req.user.id,
            purchased: false
          },
          include: [{model: Experience, include: [{model: Celebrity}]}]
        })
        if (updatedCart.experiences.length === 0) {
          await updatedCart.destroy()
          return res.sendStatus(204)
        } else {
          return res.json(updatedCart)
        }
      }
    }
  } catch (error) {
    next(error)
  }
})

// route -- increase qty
router.put('/:experienceid/increase', async (req, res, next) => {
  try {
    // does this work every time? what if you had an experienceId that doesn't relate to the right order?
    const experienceToUpdate = await OrderDetail.findOne({
      where: {
        experienceId: req.params.experienceid
      }
    })

    if (experienceToUpdate) {
      experienceToUpdate.packageQty++
      await experienceToUpdate.save()

      const updatedCart = await Order.findOne({
        where: {
          userId: req.user.id,
          purchased: false
        },
        include: [{model: Experience, include: [{model: Celebrity}]}]
      })
      return res.status(200).json(updatedCart)
    } else {
      return res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

// route -- decrease qty
router.put('/:experienceid/decrease', async (req, res, next) => {
  try {
    const experienceToUpdate = await OrderDetail.findOne({
      where: {
        experienceId: req.params.experienceid
      }
    })
    if (experienceToUpdate) {
      experienceToUpdate.packageQty--
      await experienceToUpdate.save()
    }
    const updatedCart = await Order.findOne({
      where: {
        userId: req.user.id,
        purchased: false
      },
      include: [{model: Experience, include: [{model: Celebrity}]}]
    })

    console.log(updatedCart) // remove console logs
    return res.status(200).json(updatedCart)
  } catch (err) {
    next(err)
  }
})
