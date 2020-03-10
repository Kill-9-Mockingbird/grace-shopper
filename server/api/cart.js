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

//route to checkout cart
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
        if (req.body.packageQty) {
          const updateQty = await OrderDetail.findOne({
            where: {
              experienceId: experienceId,
              orderId: cart.id
            }
          })
          await updateQty.update({packageQty: req.body.packageQty})
        }

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

// route -- increase qty
router.put('/:experienceId/increase', async (req, res, next) => {
  try {
    const experienceToUpdate = await OrderDetail.findOne({
      where: {
        orderId: req.body.orderId,
        experienceId: req.params.experienceId
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
  } catch (error) {
    next(error)
  }
})

// route -- decrease qty
router.put('/:experienceId/decrease', async (req, res, next) => {
  try {
    const experienceToUpdate = await OrderDetail.findOne({
      where: {
        orderId: req.body.orderId,
        experienceId: req.params.experienceId
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

    return res.status(200).json(updatedCart)
  } catch (error) {
    next(error)
  }
})

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
