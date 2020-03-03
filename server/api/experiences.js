const router = require('express').Router()
const {Experience} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const experiences = await Experience.findAll()
    res.json(experiences)
  } catch (err) {
    next(err)
  }
})

router.get('/:experienceId', async (req, res, next) => {
  try {
    const experienceId = req.params.experienceId
    const singleExperience = await Experience.findByPk(experienceId)
    res.json(singleExperience)
  } catch (error) {
    next(error)
  }
})
