const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
// router.use('/users') => you also have /users/:userId/cart
router.use('/experiences', require('./experiences'))
router.use('/cart', require('./cart'))
router.use('/admin', require('./admins'))
// /api/admin/users => there is an admin with the ID users

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
