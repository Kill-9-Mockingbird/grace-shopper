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

// router.delete('/:experienceId', isUser, async (req, res, next) => {
//   try {
//     const itemToDelete = await OrderDetail.findOne({
//       where:
//     })
//   } catch (error) {}
// })
