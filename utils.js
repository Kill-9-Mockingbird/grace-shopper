const isAdmin = (req, res, next) => {
  try {
    if (req.user) {
      if (req.user.isAdmin) {
        next()
      } else {
        res.status(401).send('Must be an admin!')
      }
    } else {
      res.status(401).send('Must login to access!')
    }
  } catch (error) {
    next(error)
  }
}

const isUser = (req, res, next) => {
  try {
    if (req.user) {
      next()
    } else {
      res.status(401).send('Must login to access!')
    }
  } catch (error) {
    next(error)
  }
}

module.exports = {isAdmin, isUser}
